// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview Unit tests for Closure's base.js.
 */

goog.provide('goog.baseTest');

goog.setTestOnly('goog.baseTest');

goog.require('goog.Promise');
// Used to test dynamic loading works, see testRequire*
goog.require('goog.Timer');
goog.require('goog.Uri');
goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.object');
goog.require('goog.test_module');
goog.require('goog.testing.PropertyReplacer');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.recordFunction');
goog.require('goog.userAgent');

const earlyTestModuleGet = goog.module.get('goog.test_module');

/**
 * @param {?} name
 * @return {?}
 */
function getFramedVars(name) {
  const w = window.frames[name];
  const doc = w.document;
  doc.open();
  doc.write(
      '<script>' +
      'var a = [0, 1, 2];' +
      'var o = {a: 0, b: 1};' +
      'var n = 42;' +
      'var b = true;' +
      'var s = "string";' +
      'var nv = null;' +
      'var u = undefined;' +
      'var fv = function(){};' +
      '</' +
      'script>');
  doc.close();
  return {
    'array': w.a,
    'object': w.o,
    'number': w.n,
    'boolean': w.b,
    'string': w.s,
    'functionVar': w.fv,
    'nullVar': w.nv,
    'undefinedVar': w.u
  };
}

let framedVars;
let framedVars2;
const stubs = new goog.testing.PropertyReplacer();
const originalGoogBind = goog.bind;

function setUpPage() {
  framedVars = getFramedVars('f1');
  framedVars2 = getFramedVars('f2');
  // remove iframe
  const iframeElement = document.getElementById('f2');
  iframeElement.parentNode.removeChild(iframeElement);
}

function tearDown() {
  goog.setCssNameMapping(undefined);
  stubs.reset();
  goog.bind = originalGoogBind;
}

function testLibrary() {
  assertNotUndefined('\'goog\' not loaded', goog);
}

function testDefine() {
  let result;
  result = goog.define('SOME_DEFINE', 123);  // overridden by 456
  assertEquals(456, result);
  assertEquals('undefined', typeof SOME_DEFINE);

  result = goog.define('SOME_OTHER_DEFINE', 123);  // not overridden
  assertEquals(123, result);
  assertEquals('undefined', typeof SOME_OTHER_DEFINE);

  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;
  provide('ns');

  result = goog.define('ns.SOME_NAMESPACED_DEFINE', 123);  // overridden by 789
  assertEquals(789, result);
  assertEquals('undefined', typeof ns.SOME_NAMESPACED_DEFINE);

  result = goog.define('ns.SOME_OTHER_NAMESPACED_DEFINE', 123);  // untouched
  assertEquals(123, result);
  assertEquals('undefined', typeof ns.SOME_OTHER_NAMESPACED_DEFINE);

  // still works even if namespace not provided.
  result = goog.define('ns2.SOME_UNPROVIDED_DEFINE', 123);  // overridden by 159
  assertEquals(159, result);
  assertEquals('undefined', typeof ns2);

  result = goog.define('ns3.SOME_OTHER_UNPROVIDED_DEFINE', 123);  // untouched
  assertEquals(123, result);
  assertEquals('undefined', typeof ns3);
}

function testProvide() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  provide('goog.test.name.space');
  assertNotUndefined('provide failed: goog.test', goog.test);
  assertNotUndefined('provide failed: goog.test.name', goog.test.name);
  assertNotUndefined(
      'provide failed: goog.test.name.space', goog.test.name.space);

  // ensure that providing 'goog.test.name' doesn't throw an exception
  provide('goog.test');
  provide('goog.test.name');
  delete goog.test;
}

// "watch" is a native member of Object.prototype on Firefox
// Ensure it can still be added as a namespace
function testProvideWatch() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  provide('goog.yoddle.watch');
  assertNotUndefined('provide failed: goog.yoddle.watch', goog.yoddle.watch);
  delete goog.yoddle;
}

// Namespaces should not conflict with elements added to the window based on
// their id
function testConflictingSymbolAndId() {
  // Create a div with a given id
  const divElement = document.createElement('div');
  divElement.id = 'clashingname';
  document.body.appendChild(divElement);

  // The object at window.clashingname is the element with that id
  assertEquals(window.clashingname, divElement);

  // Export a symbol to a sub-namespace of that id
  const symbolObject = {};
  goog.exportSymbol('clashingname.symbolname', symbolObject);

  // The symbol has been added...
  assertEquals(window.clashingname.symbolname, symbolObject);

  // ...and has not affected the original div
  assertEquals(window.clashingname, divElement);
}

function testProvideStrictness() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  provide('goog.xy');
  assertProvideFails('goog.xy');

  provide('goog.xy.z');
  assertProvideFails('goog.xy');

  window['goog']['xyz'] = 'Bob';
  assertProvideFails('goog.xyz');

  delete goog.xy;
  delete goog.xyz;
}

/** @param {?} namespace */
function assertProvideFails(namespace) {
  assertThrows(
      'goog.provide(' + namespace + ') should have failed',
      goog.partial(goog.provide, namespace));
}

function testIsProvided() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  provide('goog.explicit');
  assertTrue(goog.isProvided_('goog.explicit'));
  provide('goog.implicit.explicit');
  assertFalse(goog.isProvided_('goog.implicit'));
  assertTrue(goog.isProvided_('goog.implicit.explicit'));
}

function testGlobalize() {
  const a = {a: 1, b: 2, c: 3};
  const b = {};
  goog.globalize(a, b);
  assertNotUndefined('Globalize to arbitrary object', b.a);
  assertNotUndefined('Globalize to arbitrary object', b.b);
  assertNotUndefined('Globalize to arbitrary object', b.c);
}

function testExportSymbol() {
  const date = new Date();

  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  assertTrue(typeof nodots == 'undefined');
  goog.exportSymbol('nodots', date);
  assertEquals(date, nodots);
  nodots = undefined;

  assertTrue(typeof gotcher == 'undefined');
  goog.exportSymbol('gotcher.dots.right.Here', date);
  assertEquals(date, gotcher.dots.right.Here);
  gotcher = undefined;

  provide('an.existing.path');
  assertNotNull(an.existing.path);
  goog.exportSymbol('an.existing.path', date);
  assertEquals(date, an.existing.path);
  an = undefined;

  const foo = {foo: 'foo'};
  const bar = {bar: 'bar'};
  const baz = {baz: 'baz'};
  goog.exportSymbol('one.two.three.Four', foo);
  goog.exportSymbol('one.two.three.five', bar);
  goog.exportSymbol('one.two.six', baz);
  assertEquals(foo, one.two.three.Four);
  assertEquals(bar, one.two.three.five);
  assertEquals(baz, one.two.six);

  const win = {};
  const fooBar = {foo: 'foo', bar: 'bar'};
  goog.exportSymbol('one.two.four', fooBar, win);
  assertEquals(fooBar, win.one.two.four);
  assertTrue('four' in win.one.two);
  assertFalse('four' in one.two);
  one = undefined;
}

goog.exportSymbol('exceptionTest', function() {
  throw new Error('ERROR');
});

function testExportSymbolExceptions() {
  const inner = function() {
    // If exceptionTest wasn't exported using execScript, IE8 will throw "Object
    // doesn't support this property or method" instead.
    exceptionTest();
  };
  const e =
      assertThrows('Exception wasn\'t thrown by exported function', inner);
  assertEquals('Unexpected error thrown', 'ERROR', e.message);
}

//=== tests for Require logic ===

function testRequireClosure() {
  assertNotUndefined('goog.Timer should be available', goog.Timer);
  /** @suppress {missingRequire} */
  assertNotUndefined(
      'goog.events.EventTarget should be available', goog.events.EventTarget);
}

function testRequireWithExternalDuplicate() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  // Do a provide without going via goog.require. Then goog.require it
  // indirectly and ensure it doesn't cause a duplicate script.
  goog.addDependency('dup.js', ['dup.base'], []);
  goog.addDependency('dup-child.js', ['dup.base.child'], ['dup.base']);
  provide('dup.base');

  stubs.set(goog, 'isDocumentFinishedLoading_', false);
  stubs.set(goog.global, 'CLOSURE_IMPORT_SCRIPT', function(src) {
    if (src == goog.basePath + 'dup.js') {
      fail('Duplicate script written!');
    } else if (src == goog.basePath + 'dup-child.js') {
      // Allow expected script.
      return true;
    } else {
      // Avoid affecting other state.
      return false;
    }
  });

  // To differentiate this call from the real one.
  const require = goog.require;
  require('dup.base.child');
}

//=== tests for language enhancements ===

function testTypeOf() {
  assertEquals('array', goog.typeOf([]));
  assertEquals('string', goog.typeOf('string'));
  assertEquals('number', goog.typeOf(123));
  assertEquals('null', goog.typeOf(null));
  assertEquals('undefined', goog.typeOf(undefined));
  assertEquals('object', goog.typeOf({}));
  assertEquals('function', goog.typeOf(function() {}));

  // Make sure that NodeList is not treated as an array... NodeLists should
  // be of type object but Safari incorrectly reports it as function so a not
  // equals test will have to suffice here.
  assertNotEquals('array', goog.typeOf(document.getElementsByName('*')));
  assertNotEquals('function', goog.typeOf(document.getElementsByName('*')));
  assertEquals('object', goog.typeOf(document.getElementsByName('*')));
}

function testTypeOfFramed() {
  assertEquals('array', goog.typeOf(framedVars.array));
  assertEquals('string', goog.typeOf(framedVars.string));
  assertEquals('number', goog.typeOf(framedVars.number));
  assertEquals('null', goog.typeOf(framedVars.nullVar));
  assertEquals('undefined', goog.typeOf(framedVars.undefinedVar));
  assertEquals('object', goog.typeOf(framedVars.object));
  assertEquals('function', goog.typeOf(framedVars.functionVar));

  // Opera throws when trying to do cross frame typeof on node lists.
  // IE behaves very strange when it comes to DOM nodes on disconnected frames.
}

function testTypeOfFramed2() {
  assertEquals('array', goog.typeOf(framedVars2.array));
  assertEquals('string', goog.typeOf(framedVars2.string));
  assertEquals('number', goog.typeOf(framedVars2.number));
  assertEquals('null', goog.typeOf(framedVars2.nullVar));
  assertEquals('undefined', goog.typeOf(framedVars2.undefinedVar));
  assertEquals('object', goog.typeOf(framedVars2.object));
  assertEquals('function', goog.typeOf(framedVars2.functionVar));

  // Opera throws when trying to do cross frame typeof on node lists.
  // IE behaves very strange when it comes to DOM nodes on disconnected frames.
}

function testIsArray() {
  const array = [1, 2, 3];
  const arrayWithLengthSet = [1, 2, 3];
  arrayWithLengthSet.length = 2;
  const objWithArrayFunctions = {slice: function() {}, length: 0};
  const object = {a: 1, b: 2, c: 3};
  const nullVar = null;
  let notDefined;
  const elem = document.getElementById('elem');
  const text = document.getElementById('text').firstChild;
  const impostor = document.body.getElementsByTagName('BOGUS');
  impostor.push = Array.prototype.push;
  impostor.pop = Array.prototype.pop;
  impostor.slice = Array.prototype.slice;
  impostor.splice = Array.prototype.splice;

  assertTrue('array should be an array', goog.isArray(array));
  assertTrue(
      'arrayWithLengthSet should be an array',
      goog.isArray(arrayWithLengthSet));
  assertFalse(
      'object with array functions should not be an array unless ' +
          'length is not enumerable',
      goog.isArray(objWithArrayFunctions));
  assertFalse('object should not be an array', goog.isArray(object));
  assertFalse('null should not be an array', goog.isArray(nullVar));
  assertFalse('undefined should not be an array', goog.isArray(notDefined));
  assertFalse('NodeList should not be an array', goog.isArray(elem.childNodes));
  assertFalse('TextNode should not be an array', goog.isArray(text));
  assertTrue(
      'Array of nodes should be an array',
      goog.isArray([elem.firstChild, elem.lastChild]));
  assertFalse('An impostor should not be an array', goog.isArray(impostor));
}

function testTypeOfAcrossWindow() {
  if (goog.userAgent.IE && goog.userAgent.isVersionOrHigher('10') &&
      !goog.userAgent.isVersionOrHigher('11')) {
    // TODO(user): This test is flaky on IE10 (passing 90+% of the time).
    // When it flakes the values are undefined which appears to indicate the
    // script did not run in the opened window and not a failure of the logic
    // we are trying to test.
    return;
  }

  const w = window.open('', 'blank');
  if (w) {
    try {
      const d = w.document;
      d.open();
      d.write(
          '<script>function fun(){};' +
          'var arr = [];' +
          'var x = 42;' +
          'var s = "";' +
          'var b = true;' +
          'var obj = {length: 0, splice: {}, call: {}};' +
          '</' +
          'script>');
      d.close();

      assertEquals('function', goog.typeOf(w.fun));
      assertEquals('array', goog.typeOf(w.arr));
      assertEquals('number', goog.typeOf(w.x));
      assertEquals('string', goog.typeOf(w.s));
      assertEquals('boolean', goog.typeOf(w.b));
      assertEquals('object', goog.typeOf(w.obj));
    } finally {
      w.close();
    }
  }
}

function testIsArrayLike() {
  const array = [1, 2, 3];
  const objectWithNumericLength = {length: 2};
  const objectWithNonNumericLength = {length: 'a'};
  const object = {a: 1, b: 2};
  const nullVar = null;
  let notDefined;
  const elem = document.getElementById('elem');
  const text = document.getElementById('text').firstChild;

  assertTrue('array should be array-like', goog.isArrayLike(array));
  assertTrue(
      'obj w/numeric length should be array-like',
      goog.isArrayLike(objectWithNumericLength));
  assertFalse(
      'obj w/non-numeric length should not be array-like',
      goog.isArrayLike(objectWithNonNumericLength));
  assertFalse('object should not be array-like', goog.isArrayLike(object));
  assertFalse('null should not be array-like', goog.isArrayLike(nullVar));
  assertFalse(
      'undefined should not be array-like', goog.isArrayLike(notDefined));
  assertTrue(
      'NodeList should be array-like', goog.isArrayLike(elem.childNodes));
  // TODO(user): Fix isArrayLike to return false for text nodes!
  // assertFalse('TextNode should not be array-like', goog.isArrayLike(text));
  assertTrue(
      'Array of nodes should be array-like',
      goog.isArrayLike([elem.firstChild, elem.lastChild]));
}


/**
 * Use mock date in testIsDateLike() rather than a real goog.date.Date to
 * minimize dependencies in this unit test.
 */
function MockGoogDate() {}

/** @return {number} */
MockGoogDate.prototype.getFullYear = function() {
  return 2007;
};


function testIsDateLike() {
  const jsDate = new Date();
  const googDate = new MockGoogDate();
  const string = 'foo';
  const number = 1;
  const nullVar = null;
  let notDefined;

  assertTrue('js Date should be date-like', goog.isDateLike(jsDate));
  assertTrue('goog Date should be date-like', goog.isDateLike(googDate));
  assertFalse('string should not be date-like', goog.isDateLike(string));
  assertFalse('number should not be date-like', goog.isDateLike(number));
  assertFalse('nullVar should not be date-like', goog.isDateLike(nullVar));
  assertFalse('undefined should not be date-like', goog.isDateLike(notDefined));
}

function testIsFunction() {
  const func = function() {
    return 1;
  };
  const object = {a: 1, b: 2};
  const nullVar = null;
  let notDefined;

  assertTrue('function should be a function', goog.isFunction(func));
  assertFalse('object should not be a function', goog.isFunction(object));
  assertFalse('null should not be a function', goog.isFunction(nullVar));
  assertFalse(
      'undefined should not be a function', goog.isFunction(notDefined));
}

function testIsObject() {
  const object = {a: 1, b: 2};
  const string = 'b';
  const nullVar = null;
  let notDefined;
  const array = [0, 1, 2];
  const fun = function() {};

  assertTrue('object should be an object', goog.isObject(object));
  assertTrue('array should be an object', goog.isObject(array));
  assertTrue('function should be an object', goog.isObject(fun));
  assertFalse('string should not be an object', goog.isObject(string));
  assertFalse('null should not be an object', goog.isObject(nullVar));
  assertFalse('undefined should not be an object', goog.isObject(notDefined));
}


//=== tests for unique ID methods ===

function testGetUid() {
  const a = {};
  const b = {};
  const c = {};

  const uid1 = goog.getUid(a);
  const uid2 = goog.getUid(b);
  const uid3 = goog.getUid(c);

  assertNotEquals('Unique IDs must be unique', uid1, uid2);
  assertNotEquals('Unique IDs must be unique', uid1, uid3);
  assertNotEquals('Unique IDs must be unique', uid2, uid3);
}

function testHasUid() {
  const a = {};

  assertFalse(goog.hasUid(a));
  assertFalse(goog.UID_PROPERTY_ in a);

  const uid = goog.getUid(a);
  assertTrue(goog.hasUid(a));
  assertEquals(uid, goog.getUid(a));
}

function testRemoveUidFromPlainObject() {
  const a = {};
  const uid = goog.getUid(a);
  goog.removeUid(a);
  assertNotEquals(
      'An object\'s old and new unique IDs should be different', uid,
      goog.getUid(a));
}

function testRemoveUidFromObjectWithoutUid() {
  const a = {};
  // Removing a unique ID should not fail even if it did not exist
  goog.removeUid(a);
}

function testRemoveUidFromNode() {
  const node = goog.dom.createElement(goog.dom.TagName.DIV);
  const nodeUid = goog.getUid(node);
  goog.removeUid(node);
  assertNotEquals(
      'A node\'s old and new unique IDs should be different', nodeUid,
      goog.getUid(node));
}

function testConstructorUid() {
  function BaseClass() {}
  function SubClass() {}
  goog.inherits(SubClass, BaseClass);

  const baseClassUid = goog.getUid(BaseClass);
  const subClassUid = goog.getUid(SubClass);

  assertTrue(
      'Unique ID of BaseClass must be a number',
      typeof baseClassUid == 'number');
  assertTrue(
      'Unique ID of SubClass must be a number', typeof subClassUid == 'number');
  assertNotEquals(
      'Unique IDs of BaseClass and SubClass must differ', baseClassUid,
      subClassUid);
  assertNotEquals(
      'Unique IDs of BaseClass and SubClass instances must differ',
      goog.getUid(new BaseClass), goog.getUid(new SubClass));

  assertEquals(
      'Unique IDs of BaseClass.prototype and SubClass.prototype ' +
          'should differ, but to keep the implementation simple, we do not ' +
          'handle this edge case.',
      goog.getUid(BaseClass.prototype), goog.getUid(SubClass.prototype));
}


/**
 * Tests against Chrome bug where the re-created element will have the uid
 * property set but undefined. See bug 1252508.
 */
function testUidNotUndefinedOnReusedElement() {
  const div = goog.dom.createElement(goog.dom.TagName.DIV);
  document.body.appendChild(div);
  div.innerHTML = '<form id="form"></form>';
  const span = goog.dom.getElementsByTagName(goog.dom.TagName.FORM, div)[0];
  goog.getUid(span);

  div.innerHTML = '<form id="form"></form>';
  const span2 = goog.dom.getElementsByTagName(goog.dom.TagName.FORM, div)[0];
  assertNotUndefined(goog.getUid(span2));
}

function testWindowUid() {
  const uid = goog.getUid(window);
  assertTrue('window unique id is a number', typeof uid === 'number');
  assertEquals('returns the same id second time', uid, goog.getUid(window));
  goog.removeUid(window);
  assertNotEquals(
      'generates new id after the old one is removed', goog.getUid(window));
}

//=== tests for clone method ===

function testClonePrimitive() {
  assertEquals(
      'cloning a primitive should return an equal primitive', 5,
      goog.cloneObject(5));
}

function testCloneObjectThatHasACloneMethod() {
  const original = {
    name: 'original',
    clone: function() {
      return {name: 'clone'};
    }
  };

  const clone = goog.cloneObject(original);
  assertEquals('original', original.name);
  assertEquals('clone', clone.name);
}

function testCloneFlatObject() {
  const original = {a: 1, b: 2, c: 3};
  const clone = goog.cloneObject(original);
  assertNotEquals(original, clone);
  assertEquals(1, clone.a);
  assertEquals(2, clone.b);
  assertEquals(3, clone.c);
}

function testCloneDeepObject() {
  const original = {a: 1, b: {c: 2, d: 3}, e: {f: {g: 4, h: 5}}};
  const clone = goog.cloneObject(original);

  assertNotEquals(original, clone);
  assertNotEquals(original.b, clone.b);
  assertNotEquals(original.e, clone.e);

  assertEquals(1, clone.a);
  assertEquals(2, clone.b.c);
  assertEquals(3, clone.b.d);
  assertEquals(4, clone.e.f.g);
  assertEquals(5, clone.e.f.h);
}

function testCloneFunctions() {
  const original = {
    f: function() {
      return 'hi';
    }
  };
  const clone = goog.cloneObject(original);

  assertNotEquals(original, clone);
  assertEquals('hi', clone.f());
  assertEquals(original.f, clone.f);
}


//=== tests for bind() and friends ===

// Function.prototype.bind and Function.prototype.partial are purposefullly
// not defined in open sourced Closure.  These functions sniff for their
// presence.

var foo = 'global';
var obj = {foo: 'obj'};

/**
 * @param {?} arg1
 * @param {?} arg2
 * @return {?}
 */
function getFoo(arg1, arg2) {
  return {foo: this.foo, arg1: arg1, arg2: arg2};
}

function testBindWithoutObj() {
  if (Function.prototype.bind) {
    assertEquals(foo, getFoo.bind()().foo);
  }
}

function testBindWithObj() {
  if (Function.prototype.bind) {
    assertEquals(obj.foo, getFoo.bind(obj)().foo);
  }
}

function testBindWithNullObj() {
  if (Function.prototype.bind) {
    assertEquals(foo, getFoo.bind()().foo);
  }
}

function testBindStaticArgs() {
  if (Function.prototype.bind) {
    const fooprime = getFoo.bind(obj, 'hot', 'dog');
    const res = fooprime();
    assertEquals(obj.foo, res.foo);
    assertEquals('hot', res.arg1);
    assertEquals('dog', res.arg2);
  }
}

function testBindDynArgs() {
  if (Function.prototype.bind) {
    const res = getFoo.bind(obj)('hot', 'dog');
    assertEquals(obj.foo, res.foo);
    assertEquals('hot', res.arg1);
    assertEquals('dog', res.arg2);
  }
}

function testBindCurriedArgs() {
  if (Function.prototype.bind) {
    const res = getFoo.bind(obj, 'hot')('dog');
    assertEquals(obj.foo, res.foo);
    assertEquals('hot', res.arg1);
    assertEquals('dog', res.arg2);
  }
}

function testBindDoubleBind() {
  const getFooP = goog.bind(getFoo, obj, 'hot');
  const getFooP2 = goog.bind(getFooP, null, 'dog');

  const res = getFooP2();
  assertEquals('res.arg1 should be \'hot\'', 'hot', res.arg1);
  assertEquals('res.arg2 should be \'dog\'', 'dog', res.arg2);
}

function testBindWithCall() {
  const obj = {};
  const obj2 = {};
  const f = function() {
    assertEquals('this should be bound to obj', obj, this);
  };
  const b = goog.bind(f, obj);
  b.call(null);
  b.call(obj2);
}

function testBindJs() {
  assertEquals(1, goog.bindJs_(add, {
    valueOf: function() {
      return 1;
    }
  })());
  assertEquals(3, goog.bindJs_(add, null, 1, 2)());
}

function testBindNative() {
  if (Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf('native code') != -1) {
    assertEquals(1, goog.bindNative_(add, {
      valueOf: function() {
        return 1;
      }
    })());
    assertEquals(3, goog.bindNative_(add, null, 1, 2)());

    assertThrows(function() {
      goog.bindNative_(null, null);
    });
  }
}

function testBindDefault() {
  assertEquals(1, goog.bind(add, {
    valueOf: function() {
      return 1;
    }
  })());
  assertEquals(3, goog.bind(add, null, 1, 2)());
}

/**
 * @param {...?} var_args
 * @return {?}
 */
function add(var_args) {
  let sum = Number(this) || 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function testPartial() {
  const f = function(x, y) {
    return x + y;
  };
  const g = goog.partial(f, 1);
  assertEquals(3, g(2));

  const h = goog.partial(f, 1, 2);
  assertEquals(3, h());

  const i = goog.partial(f);
  assertEquals(3, i(1, 2));
}

function testPartialUsesGlobal() {
  const f = function(x, y) {
    assertEquals(goog.global, this);
    return x + y;
  };
  const g = goog.partial(f, 1);
  const h = goog.partial(g, 2);
  assertEquals(3, h());
}

function testPartialWithCall() {
  const obj = {};
  const f = function(x, y) {
    assertEquals(obj, this);
    return x + y;
  };
  const g = goog.partial(f, 1);
  const h = goog.partial(g, 2);
  assertEquals(3, h.call(obj));
}

function testPartialAndBind() {
  // This ensures that this "survives" through a partial.
  const p = goog.partial(getFoo, 'hot');
  const b = goog.bind(p, obj, 'dog');

  const res = b();
  assertEquals(obj.foo, res.foo);
  assertEquals('hot', res.arg1);
  assertEquals('dog', res.arg2);
}

function testBindAndPartial() {
  // This ensures that this "survives" through a partial.
  const b = goog.bind(getFoo, obj, 'hot');
  const p = goog.partial(b, 'dog');

  const res = p();
  assertEquals(obj.foo, res.foo);
  assertEquals('hot', res.arg1);
  assertEquals('dog', res.arg2);
}

function testPartialMultipleCalls() {
  const f = goog.testing.recordFunction();

  const a = goog.partial(f, 'foo');
  const b = goog.partial(a, 'bar');

  a();
  a();
  b();
  b();

  assertEquals(4, f.getCallCount());

  const calls = f.getCalls();
  assertArrayEquals(['foo'], calls[0].getArguments());
  assertArrayEquals(['foo'], calls[1].getArguments());
  assertArrayEquals(['foo', 'bar'], calls[2].getArguments());
  assertArrayEquals(['foo', 'bar'], calls[3].getArguments());
}

function testGlobalEval() {
  goog.globalEval('var foofoofoo = 125;');
  assertEquals('Var should be globally assigned', 125, goog.global.foofoofoo);
  const foofoofoo = 128;
  assertEquals('Global should not have changed', 125, goog.global.foofoofoo);

  // NOTE(user): foofoofoo would normally be available in the function scope,
  // via the scope chain, but the JsUnit framework seems to do something weird
  // which makes it not work.
}

function testGlobalEvalWithHtml() {
  // Make sure we don't trip on HTML markup in the code
  goog.global.evalTestResult = 'failed';
  goog.global.evalTest = function(arg) {
    goog.global.evalTestResult = arg;
  };

  goog.globalEval('evalTest("<test>")');

  assertEquals(
      'Should be able to evaluate strings with HTML in', '<test>',
      goog.global.evalTestResult);
}


//=== tests for inherits ===

function testInherits() {
  function Foo() {}
  function Bar() {}
  goog.inherits(Bar, Foo);
  const bar = new Bar();

  assert('object should be instance of constructor', bar instanceof Bar);
  assert('object should be instance of base constructor', bar instanceof Foo);
}

function testInherits_constructor() {
  function Foo() {}
  function Bar() {}
  goog.inherits(Bar, Foo);
  const bar = new Bar();

  assertEquals(
      'constructor property should match constructor function', Bar,
      bar.constructor);
  assertEquals(
      'Superclass constructor should match constructor function', Foo,
      Bar.superClass_.constructor);
}


//=== tests for makeSingleton ===
function testMakeSingleton() {
  function Foo() {}
  goog.addSingletonGetter(Foo);

  assertNotNull('Should add get instance function', Foo.getInstance);

  const x = Foo.getInstance();
  assertNotNull('Should successfully create an object', x);

  const y = Foo.getInstance();
  assertEquals('Should return the same object', x, y);

  delete Foo.instance_;

  const z = Foo.getInstance();
  assertNotNull('Should work after clearing for testing', z);

  assertNotEquals(
      'Should return a different object after clearing for testing', x, z);
}


//=== tests for now ===

function testNow() {
  // We use bounds rather than a tolerance to eliminate non-determinsim.
  const start = new Date().getTime();
  const underTest = goog.now();
  const end = new Date().getTime();

  assertTrue(start <= underTest && underTest <= end);
}


//=== tests for getmsg ===
function testGetMsgWithDollarSigns() {
  let msg = goog.getMsg('{$amount} per minute', {amount: '$0.15'});
  assertEquals('$0.15 per minute', msg);
  msg = goog.getMsg('{$amount} per minute', {amount: '$0.$1$5'});
  assertEquals('$0.$1$5 per minute', msg);

  msg = goog.getMsg('This is a {$rate} sale!', {rate: '$$$$$$$$$$10'});
  assertEquals('This is a $$$$$$$$$$10 sale!', msg);
  msg = goog.getMsg(
      '{$name}! Hamburgers: {$hCost}, Hotdogs: {$dCost}.',
      {name: 'Burger Bob', hCost: '$0.50', dCost: '$100'});
  assertEquals('Burger Bob! Hamburgers: $0.50, Hotdogs: $100.', msg);
}


function testGetMsgWithPlaceholders() {
  let msg = goog.getMsg('{$a} has {$b}', {a: '{$b}', b: 1});
  assertEquals('{$b} has 1', msg);

  msg = goog.getMsg('{$a}{$b}', {b: ''});
  assertEquals('{$a}', msg);
}


function testGetMsgWithHtml() {
  let msg = goog.getMsg('Hello <{$a}&gt;!', {a: '<b>World</b>'}, {html: true});
  assertEquals('Hello &lt;<b>World</b>&gt;!', msg);
}


//=== miscellaneous tests ===

function testGetObjectByName() {
  const m = {
    'undefined': undefined,
    'null': null,
    emptyString: '',
    'false': false,
    'true': true,
    zero: 0,
    one: 1,
    two: {three: 3, four: {five: 5}},
    'six|seven': '6|7',
    'eight.nine': 8.9,
    '': {b: 42},
  };
  goog.global.m = m;

  assertNull(goog.getObjectByName('m.undefined'));
  assertNull(goog.getObjectByName('m.null'));
  assertEquals(goog.getObjectByName('m.emptyString'), '');
  assertEquals(goog.getObjectByName('m.false'), false);
  assertEquals(goog.getObjectByName('m.true'), true);
  assertEquals(goog.getObjectByName('m.zero'), 0);
  assertEquals(goog.getObjectByName('m.one'), 1);
  assertEquals(goog.getObjectByName('m.two.three'), 3);
  assertEquals(goog.getObjectByName('m.two.four.five'), 5);
  assertEquals(goog.getObjectByName('m.six|seven'), '6|7');
  assertNull(goog.getObjectByName('m.eight.nine'));
  assertNull(goog.getObjectByName('m.notThere'));

  assertEquals(goog.getObjectByName('one', m), 1);
  assertEquals(goog.getObjectByName('two.three', m), 3);
  assertEquals(goog.getObjectByName('two.four.five', m), 5);
  assertEquals(goog.getObjectByName('six|seven', m), '6|7');
  assertNull(goog.getObjectByName('eight.nine', m));
  assertNull(goog.getObjectByName('notThere', m));
  assertNull(goog.getObjectByName('./invalid', m));
  assertEquals(goog.getObjectByName('.b', m), 42);
}


function testGetCssName() {
  assertEquals('classname', goog.getCssName('classname'));
  assertEquals('random-classname', goog.getCssName('random-classname'));
  assertEquals('control-modifier', goog.getCssName('control', 'modifier'));

  goog.setCssNameMapping({'goog': 'a', 'disabled': 'b'}, 'BY_PART');
  let g = goog.getCssName('goog');
  assertEquals('a', g);
  assertEquals('a-b', goog.getCssName(g, 'disabled'));
  assertEquals('a-b', goog.getCssName('goog-disabled'));
  assertEquals('a-button', goog.getCssName('goog-button'));

  goog.setCssNameMapping({'goog-button': 'a', 'active': 'b'}, 'BY_WHOLE');

  g = goog.getCssName('goog-button');
  assertEquals('a', g);
  assertEquals('a-b', goog.getCssName(g, 'active'));
  assertEquals('goog-disabled', goog.getCssName('goog-disabled'));

  e = assertThrows(function() {
    goog.getCssName('.name');
  });
  assertEquals(
      'className passed in goog.getCssName must not start with ".".' +
          ' You passed: .name',
      e.message);

  assertNull(goog.getCssName(null));
}

function testGetCssName_nameMapFn() {
  assertEquals('classname', goog.getCssName('classname'));

  goog.global.CLOSURE_CSS_NAME_MAP_FN = function(classname) {
    return classname + '!';
  };

  assertEquals('classname!', goog.getCssName('classname'));
}


function testBaseMethod() {
  function A() {}
  A.prototype.foo = function(x, y) {
    return x + y;
  };

  function B() {}
  goog.inherits(B, A);
  B.prototype.foo = function(x, y) {
    return 2 + goog.base(this, 'foo', x, y);
  };

  function C() {}
  goog.inherits(C, B);
  C.prototype.foo = function(x, y) {
    return 4 + goog.base(this, 'foo', x, y);
  };

  const d = new C();
  d.foo = function(x, y) {
    return 8 + goog.base(this, 'foo', x, y);
  };

  assertEquals(15, d.foo(1, 0));
  assertEquals(16, d.foo(1, 1));
  assertEquals(16, d.foo(2, 0));
  assertEquals(7, (new C()).foo(1, 0));
  assertEquals(3, (new B()).foo(1, 0));
  assertThrows(function() {
    goog.base(d, 'foo', 1, 0);
  });

  delete B.prototype.foo;
  assertEquals(13, d.foo(1, 0));

  delete C.prototype.foo;
  assertEquals(9, d.foo(1, 0));
}

function testBaseMethodAndBaseCtor() {
  // This will fail on FF4.0 if the following bug is not fixed:
  // https://bugzilla.mozilla.org/show_bug.cgi?id=586482
  function A(x, y) {
    this.foo(x, y);
  }
  A.prototype.foo = function(x, y) {
    this.bar = x + y;
  };

  function B(x, y) {
    goog.base(this, x, y);
  }
  goog.inherits(B, A);
  B.prototype.foo = function(x, y) {
    goog.base(this, 'foo', x, y);
    this.bar = this.bar * 2;
  };

  assertEquals(14, new B(3, 4).bar);
}

function testBaseClass() {
  function A(x, y) {
    this.foo = x + y;
  }

  function B(x, y) {
    goog.base(this, x, y);
    this.foo += 2;
  }
  goog.inherits(B, A);

  function C(x, y) {
    goog.base(this, x, y);
    this.foo += 4;
  }
  goog.inherits(C, B);

  function D(x, y) {
    goog.base(this, x, y);
    this.foo += 8;
  }
  goog.inherits(D, C);

  assertEquals(15, (new D(1, 0)).foo);
  assertEquals(16, (new D(1, 1)).foo);
  assertEquals(16, (new D(2, 0)).foo);
  assertEquals(7, (new C(1, 0)).foo);
  assertEquals(3, (new B(1, 0)).foo);
}

function testBaseMethodWithEs6Subclass() {
  function A() {}
  A.prototype.foo = function(x, y) {
    return x + y;
  };

  function B() {}
  goog.inherits(B, A);
  B.prototype.foo = function(x, y) {
    return 2 + goog.base(this, 'foo', x, y);
  };

  class C extends B {
    foo(x, y) {
      return 4 + super.foo(x, y);
    }

    useBase(x, y) {
      return 4 + goog.base(this, 'foo', x, y);
    }
  }

  const c = new C();

  assertEquals(7, c.foo(1, 0));
  assertEquals(8, c.foo(1, 1));
  assertEquals(8, c.foo(2, 0));
  assertEquals(7, (new C()).foo(1, 0));
  assertThrows(function() {
    goog.base(c, 'foo', 1, 0);
  });
  assertThrows(function() {
    c.useBase(0, 0);
  });
}

function testClassBaseOnMethod() {
  function A() {}
  A.prototype.foo = function(x, y) {
    return x + y;
  };

  function B() {}
  goog.inherits(B, A);
  B.prototype.foo = function(x, y) {
    return 2 + B.base(this, 'foo', x, y);
  };

  function C() {}
  goog.inherits(C, B);
  C.prototype.foo = function(x, y) {
    return 4 + C.base(this, 'foo', x, y);
  };

  const d = new C();
  assertEquals(7, d.foo(1, 0));
  assertEquals(8, d.foo(1, 1));
  assertEquals(8, d.foo(2, 0));
  assertEquals(3, (new B()).foo(1, 0));

  delete B.prototype.foo;
  assertEquals(5, d.foo(1, 0));

  delete C.prototype.foo;
  assertEquals(1, d.foo(1, 0));
}

function testClassBaseOnConstructor() {
  function A(x, y) {
    this.foo = x + y;
  }

  function B(x, y) {
    B.base(this, 'constructor', x, y);
    this.foo += 2;
  }
  goog.inherits(B, A);

  function C(x, y) {
    C.base(this, 'constructor', x, y);
    this.foo += 4;
  }
  goog.inherits(C, B);

  function D(x, y) {
    D.base(this, 'constructor', x, y);
    this.foo += 8;
  }
  goog.inherits(D, C);

  assertEquals(15, (new D(1, 0)).foo);
  assertEquals(16, (new D(1, 1)).foo);
  assertEquals(16, (new D(2, 0)).foo);
  assertEquals(7, (new C(1, 0)).foo);
  assertEquals(3, (new B(1, 0)).foo);
}

function testClassBaseOnMethodAndBaseCtor() {
  function A(x, y) {
    this.foo(x, y);
  }
  A.prototype.foo = function(x, y) {
    this.bar = x + y;
  };

  function B(x, y) {
    B.base(this, 'constructor', x, y);
  }
  goog.inherits(B, A);
  B.prototype.foo = function(x, y) {
    B.base(this, 'foo', x, y);
    this.bar = this.bar * 2;
  };

  assertEquals(14, new B(3, 4).bar);
}

function testGoogRequireCheck() {
  // alias to avoid the being picked up by the deps scanner.
  const provide = goog.provide;

  stubs.set(goog, 'ENABLE_DEBUG_LOADER', true);
  stubs.set(goog, 'useStrictRequires', true);
  stubs.set(goog, 'implicitNamespaces_', {});

  // Aliased so that build tools do not mistake this for an actual call.
  const require = goog.require;
  assertThrows('Requiring non-required namespace should fail', function() {
    require('far.outnotprovided');
  });

  assertUndefined(goog.global.far);
  assertEvaluatesToFalse(goog.getObjectByName('far.out'));
  assertObjectEquals({}, goog.implicitNamespaces_);
  assertFalse(goog.isProvided_('far.out'));

  provide('far.out');

  assertNotUndefined(far.out);
  assertEvaluatesToTrue(goog.getObjectByName('far.out'));
  assertObjectEquals({'far': true}, goog.implicitNamespaces_);
  assertTrue(goog.isProvided_('far.out'));

  goog.global.far.out = 42;
  assertEquals(42, goog.getObjectByName('far.out'));
  assertTrue(goog.isProvided_('far.out'));

  // Empty string should be allowed.
  goog.global.far.out = '';
  assertEquals('', goog.getObjectByName('far.out'));
  assertTrue(goog.isProvided_('far.out'));

  // Null or undefined are not allowed.
  goog.global.far.out = null;
  assertNull(goog.getObjectByName('far.out'));
  assertFalse(goog.isProvided_('far.out'));

  goog.global.far.out = undefined;
  assertNull(goog.getObjectByName('far.out'));
  assertFalse(goog.isProvided_('far.out'));

  stubs.reset();
  delete far;
}

/**
 * @return {?}
 */
function diables_testCspSafeGoogRequire() {
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('10')) {
    return;
  }

  stubs.set(goog, 'ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING', true);

  // Aliased so that build tools do not mistake this for an actual call.
  const require = goog.require;

  require('goog.Uri');

  // Set a timeout to allow the user agent to finish parsing this script block,
  // thus allowing the appended script (via goog.require) to execute.
  const ASYNC_TIMEOUT_MS = 1000;

  const resolver = goog.Promise.withResolver();
  window.setTimeout(function() {
    assertNotUndefined(goog.Uri);
    resolver.resolve();
    stubs.reset();
  }, ASYNC_TIMEOUT_MS);

  return resolver.promise;
}

function testDefineClass() {
  const Base = goog.defineClass(null, {
    constructor: function(foo) {
      this.foo = foo;
    },
    statics: {x: 42},
    frobnicate: function() {
      return this.foo + this.foo;
    }
  });
  const Derived = goog.defineClass(Base, {
    constructor: function() {
      Derived.base(this, 'constructor', 'bar');
    },
    frozzle: function(foo) {
      this.foo = foo;
    }
  });

  assertEquals(42, Base.x);
  const der = new Derived();
  assertEquals('barbar', der.frobnicate());
  der.frozzle('qux');
  assertEquals('quxqux', der.frobnicate());
}

function testDefineClass_interface() {
  /** @interface */
  const Interface =
      goog.defineClass(null, {statics: {foo: 'bar'}, qux: function() {}});
  assertEquals('bar', Interface.foo);
  assertThrows(function() {
    new Interface();
  });
}

function testDefineClass_seals() {
  if (!(Object.seal instanceof Function)) return;  // IE<9 doesn't have seal
  const A = goog.defineClass(null, {constructor: function() {}});
  const a = new A();
  try {
    a.foo = 'bar';
  } catch (expectedInStrictModeOnly) { /* ignored */
  }
  assertEquals(undefined, a.foo);
}

function testDefineClass_unsealable() {
  const LegacyBase = function() {};
  LegacyBase.prototype.foo = null;
  LegacyBase.prototype.setFoo = function(foo) {
    this.foo = foo;
  };
  goog.tagUnsealableClass(LegacyBase);

  const Derived = goog.defineClass(LegacyBase, {constructor: function() {}});

  const der = new Derived();
  der.setFoo('bar');
  assertEquals('bar', der.foo);
}

function testDefineClass_constructorIsNotWrappedWhenSealingIsDisabled() {
  const org = goog.defineClass;
  let ctr = null;
  const replacement = function(superClass, def) {
    ctr = def.constructor;
    return org(superClass, def);
  };
  // copy all the properties
  goog.object.extend(replacement, org);
  replacement.SEAL_CLASS_INSTANCES = false;

  stubs.replace(goog, 'defineClass', replacement);
  const MyClass = goog.defineClass(null, {constructor: function() {}});
  assertEquals('The constructor should not be wrapped.', ctr, MyClass);
}

function testDefineClass_unsealableConstructorIsWrapped() {
  const LegacyBase = function() {};
  LegacyBase.prototype.foo = null;
  LegacyBase.prototype.setFoo = function(foo) {
    this.foo = foo;
  };
  goog.tagUnsealableClass(LegacyBase);

  const org = goog.defineClass;
  let ctr = null;
  const replacement = function(superClass, def) {
    ctr = def.constructor;
    return org(superClass, def);
  };
  // copy all the properties
  goog.object.extend(replacement, org);

  stubs.replace(goog, 'defineClass', replacement);
  const Derived = goog.defineClass(LegacyBase, {constructor: function() {}});

  assertNotEquals('The constructor should be wrapped.', ctr, Derived);
}

// Validate the behavior of goog.module when used from traditional files.
function testGoogModuleGet() {
  // assert that goog.module doesn't modify the global namespace
  assertUndefined(
      'module failed to protect global namespace: ' +
          'goog.test_module_dep',
      goog.test_module_dep);

  // assert that goog.module with goog.module.declareLegacyNamespace is present.
  assertNotUndefined(
      'module failed to declare global namespace: ' +
          'goog.test_module',
      goog.test_module);

  // assert that a require'd goog.module is available immediately after the
  // goog.require call.
  assertNotUndefined(
      'module failed to protect global namespace: ' +
          'goog.test_module_dep',
      earlyTestModuleGet);


  // assert that an non-existent module request doesn't throw and returns null.
  assertEquals(null, goog.module.get('unrequired.module.id'));

  // Validate the module exports
  const testModuleExports = goog.module.get('goog.test_module');
  assertTrue(goog.isFunction(testModuleExports));

  // Test that any escaping of </script> in test files is correct. Escape the
  // / in </script> here so that any such code does not affect it here.
  assertEquals('<\/script>', testModuleExports.CLOSING_SCRIPT_TAG);

  // Validate that the module exports object has not changed
  assertEquals(earlyTestModuleGet, testModuleExports);
}

function testModuleExportSealed() {
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9')) {
    // IE before 9 don't support sealing objects
    return;
  }

  goog.loadModule('goog.module("a.b.supplied"); exports.foo = {};');
  const exports0 = goog.module.get('a.b.supplied');
  assertTrue(Object.isSealed(exports0));

  goog.loadModule('goog.module("a.b.object"); exports = {};');
  const exports1 = goog.module.get('a.b.object');
  assertTrue(Object.isSealed(exports1));


  goog.loadModule('goog.module("a.b.fn"); exports = function() {};');
  const exports2 = goog.module.get('a.b.fn');
  assertFalse(Object.isSealed(exports2));
}

function testWorkaroundSafari10EvalBug0() {
  // Validate the safari module loading workaround isn't triggered for
  // browsers we know it isn't needed.
  if (goog.userAgent.SAFARI) {
    return;
  }
  assertFalse(goog.useSafari10Workaround());
}

function testWorkaroundSafari10EvalBug1() {
  assertEquals(
      '(function(){' +  // no \n
          'goog.module(\'foo\');\n' +
          '\n;})();\n',
      goog.workaroundSafari10EvalBug(
          'goog.module(\'foo\');\n'));
}


function testWorkaroundSafari10EvalBug2() {
  assertEquals(
      '(function(){' +  // no \n
          'goog.module(\'foo\');\n' +
          'alert("//# sourceMappingURL a.b.c.map")\n' +
          'alert("//# sourceURL a.b.c.js")\n' +
          '\n;})();\n',
      goog.workaroundSafari10EvalBug(
          'goog.module(\'foo\');\n' +
          'alert("//# sourceMappingURL a.b.c.map")\n' +
          'alert("//# sourceURL a.b.c.js")\n'));
}

function testGoogLoadModuleInSafari10() {
  try {
    eval('let es6 = 1');
  } catch (e) {
    // If ES6 block scope syntax isn't supported, don't run the rest of the
    // test.
    return;
  }

  goog.loadModule(
      'goog.module("a.safari.test");' +
      'let x = true;' +
      'function fn() { return x }' +
      'exports.fn = fn;');
  const exports = goog.module.get('a.safari.test');

  // Safari 10 will throw an exception if the module being loaded is eval'd
  // without a containing function.
  assertNotThrows(exports.fn);
}


function testLoadFileSync() {
  const fileContents = goog.loadFileSync_('base.js');
  assertTrue(
      'goog.loadFileSync_ returns string', typeof fileContents === 'string');
  assertTrue('goog.loadFileSync_ string length > 0', fileContents.length > 0);

  stubs.set(goog.global, 'CLOSURE_LOAD_FILE_SYNC', function(src) {
    return 'closure load file sync: ' + src;
  });

  assertEquals(
      'goog.CLOSURE_LOAD_FILE_SYNC override', goog.loadFileSync_('test url'),
      'closure load file sync: test url');
}


function testNormalizePath1() {
  assertEquals('foo/path.js', goog.normalizePath_('./foo/./path.js'));
  assertEquals('foo/path.js', goog.normalizePath_('bar/../foo/path.js'));
  assertEquals('bar/path.js', goog.normalizePath_('bar/foo/../path.js'));
  assertEquals('path.js', goog.normalizePath_('bar/foo/../../path.js'));

  assertEquals('../foo/path.js', goog.normalizePath_('../foo/path.js'));
  assertEquals('../../foo/path.js', goog.normalizePath_('../../foo/path.js'));
  assertEquals('../path.js', goog.normalizePath_('../foo/../path.js'));
  assertEquals('../../path.js', goog.normalizePath_('../foo/../../path.js'));

  assertEquals('/../foo/path.js', goog.normalizePath_('/../foo/path.js'));
  assertEquals('/path.js', goog.normalizePath_('/foo/../path.js'));
  assertEquals('/foo/path.js', goog.normalizePath_('/./foo/path.js'));

  assertEquals('//../foo/path.js', goog.normalizePath_('//../foo/path.js'));
  assertEquals('//path.js', goog.normalizePath_('//foo/../path.js'));
  assertEquals('//foo/path.js', goog.normalizePath_('//./foo/path.js'));

  assertEquals('http://../x/y.js', goog.normalizePath_('http://../x/y.js'));
  assertEquals('http://path.js', goog.normalizePath_('http://foo/../path.js'));
  assertEquals('http://x/path.js', goog.normalizePath_('http://./x/path.js'));
}


function testGoogModuleNames() {
  // avoid usage checks
  const module = goog.module;

  function assertInvalidId(id) {
    const err = assertThrows(function() {
      module(id);
    });
    assertEquals('Invalid module identifier', err.message);
  }

  function assertValidId(id) {
    // This is a cheesy check, but we validate that we don't get an invalid
    // namespace warning, but instead get a module isn't loaded correctly
    // error.
    const err = assertThrows(function() {
      module(id);
    });
    assertTrue(err.message.indexOf('has been loaded incorrectly') != -1);
  }

  assertInvalidId('/somepath/module.js');
  assertInvalidId('./module.js');
  assertInvalidId('1');

  assertValidId('a');
  assertValidId('a.b');
  assertValidId('a.b.c');
  assertValidId('aB.Cd.eF');
  assertValidId('a1.0E.Fg');

  assertValidId('_');
  assertValidId('$');
  assertValidId('_$');
  assertValidId('$_');
}


function testGetScriptNonce() {
  // clear nonce cache for test.
  goog.cspNonce_ = null;
  const nonce = 'ThisIsANonceThisIsANonceThisIsANonce';
  const script = goog.dom.createElement(goog.dom.TagName.SCRIPT);
  script.setAttribute('nonce', 'invalid nonce');
  document.body.appendChild(script);

  try {
    assertEquals('', goog.getScriptNonce());
    // clear nonce cache for test.
    goog.cspNonce_ = null;
    script.nonce = nonce;
    assertEquals(nonce, goog.getScriptNonce());
  } finally {
    goog.dom.removeNode(script);
  }
}

function testGoogRequireTypeDestructuring() {
  try {
    eval('const {es6} = {es6: 1}');
  } catch (e) {
    // If ES6 destructuring syntax isn't supported, skip the test.
    return;
  }

  assertNotThrows(function() {
    goog.loadModule(
        'goog.module(\'requiretype.destructuring\');' +
        'const {type} = goog.requireType(\'module.with.types\');');
  });
}
