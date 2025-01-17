---
title: JavaScript Conformance Rules for Closure Library
section: develop
layout: article
---
<!-- Documentation licensed under CC BY 4.0 -->
<!-- License available at https://creativecommons.org/licenses/by/4.0/ -->

# JavaScript Conformance Rules for Closure Library

The config file:
[closure/goog/conformance\_proto.txt](https://github.com/google/closure-library/tree/master/closure/goog/conformance_proto.txt)


## Introduction

Closure JavaScript code is expected to conform to a set of rules for security,
performance, code health, or other reasons. This configuration file for the
[JS Conformance Framework] enforces this.

The security-specific rules in here mostly target DOM (and Closure) APIs that
are prone to script-injection vulnerabilities ([XSS]). In these cases, the rules
will point to wrapper APIs that, instead of plain strings, consume values of
types with specific security contracts indicating that the value can be safely
used in a given context.



## Possible Violations

If you are adding code and the warning you are seeing doesn’t seem appropriate
and the warning is a "Possible Violation" then the compiler doesn’t have enough
type information to confirm that you aren’t violating a rule. As noted in the
[JS Conformance Framework] documentation, conformance rules are enforced
strictly so you aren’t allowed to "possibly violate". The fix is to change the
code to so that sufficient type information is available.

## How to fix possible violations

Removing false-positive 'possible violations' requires providing more
type-information. Often this is as simple as declaring array content types or
tightening an APIs return type or choosing a different API.

For example, many Closure DOM APIs return a precise type if passed a
`goog.dom.TagName` instance. Passing this instance instead of a string solves
many possible violations.

Examples:

```js
// Possible violation.
var img = goog.dom.createDom('img');
img.src = src;
// Clean.
var img = goog.dom.createDom(goog.dom.TagName.IMG);
img.src = src;
// Build error - native APIs don't support goog.dom.TagName.
var img = document.createElement(goog.dom.TagName.IMG);
img.src = src;
```

```js
// Possible violation.
var img = goog.dom.getElementByClass('avatar');
img.src = src;
// Clean.
var img = goog.dom.getElementByTagNameAndClass(goog.dom.TagName.IMG, 'avatar');
img.src = src;
```

```js
// Possible violation.
var img = goog.dom.getElement('avatar');
img.src = src;
// Clean.
var img = goog.dom.asserts.assertIsHTMLImageElement(goog.dom.getElement('avatar'));
img.src = src;
// No violation but unsafe - see below.
var img = /** @type {!HTMLImageElement} */ (goog.dom.getElement('avatar'));
img.src = src;
```

Summing it up:

*   Use `goog.dom` functions with `goog.dom.TagName` instances.
*   Use `getElementByTagNameAndClass`.
*   Use `goog.dom.asserts` if there's no better API.
*   Avoid type-casting as there's no check whether you actually cast a correct
    type - it means that you can cast `HTMLScriptElement` typed as `Element` to
    `HTMLImageElement`.

## Explanation of conformance rules

### goog.base

goog.base is not compatible with EcmaScript 5+ strict mode.  As part of the
migration to strict mode Closure Library has moved away from goog.base and
instead uses the "base" method defined on the class constructor by
goog.inherits.

Calling a super class constructor:

```js
var MyClass = function(arg) {
  MyClass.base(this, 'constructor', arg);
};
```

Calling a super class method:

```js
MyClass.prototype.method = function(arg) {
  MyClass.base(this, 'method', arg);
}
```

### goog.debug.Logger {#logger}

goog.debug.Logger should not be used directly. Instead use the goog.log static
wrappers. goog.log is safely strippable from production code. However,
goog.debug.Logger is only stripped from code if the logger\_ suffix is used in
the name. 

Note:  You may see "possible violations" for code that is not a logger if the
code is badly typed. Verify that you have a dependency on the type you are
expecting.

### eval

eval is a security risk and is not allowed to be used. Since values passed to
eval() are evaluated and executed as any ordinary JavaScript, it is not
inherently safe to pass content to eval(). Eval() is typically not necessary
for ordinary programming.

IE's `execScript` is also banned.

`Function`, `setTimeout`, `setInterval` and `requestAnimationFrame` with string
argument are also banned.

### throw 'message' {#throwOfNonErrorTypes}

`throw` with a string literal can not have a stack trace attached to it, making
debugging significantly more difficult.  Use `throw new Error('message')`
instead.

### Arguments.prototype.callee {#callee}

`Arguments.prototype.callee` is not allowed in EcmaScript
"[strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)"
code.

### Calls to Document.prototype.write {#documentWrite}

Calling `Document.prototype.write` is a security risk and is banned. Any content
passed to `write()` will be automatically evaluated in the DOM and therefore the
assignment of user-controlled, insufficiently sanitized or escaped content can
result in [XSS] vulnerabilities.

`Document.prototype.write` is bad for performance as it forces document
reparsing, has unpredictable semantics and disallows many optimizations a
browser may make. It is almost never needed. Only exception is writing to a
completely new window such as a popup or an iframe.


If you need to use it, use the type-safe [`goog.dom.safe.documentWrite`]
wrapper, or directly render a Strict Soy template using
[`goog.soy.Renderer.prototype.renderElement`] \(or similar\).

### Assignment to Element.prototype.innerHTML/outerHTML {#innerHtml}

Direct assignment of a non-constant value to `innerHTML` and `outerHTML` is a
security risk and is banned. Any content passed to `innerHTML` or `outerHTML`
will be automatically evaluated in the DOM and therefore the assignment of
user-controlled, insufficiently sanitized or escaped content can result in [XSS]
vulnerabilities.

Instead, use the type-safe [`goog.dom.safe.setInnerHtml`] wrapper, or directly
render a Strict Soy template using [`goog.soy.Renderer.prototype.renderElement`]
\(or similar\).

Note: Reads of these properties are permitted.

### Creating untyped elements is forbidden {#untypedElements}

We have several conformance rules banning assignment to dangerous properties
such as `script.src`. These rules work only if we know the type of the
manipulated element, e.g. `HTMLScriptElement`. Sadly,
`document.createElement('script')` and similar return only `Element` as
perceived by JS Compiler. For our rules to work, we need to know the exact type
which is returned by `goog.dom` methods when used together with
`goog.dom.TagName`. Typically, it's `goog.dom.createElement` and
`goog.dom.createDom` but other methods such as `goog.dom.getElementsByTagName`
also work. `DomHelper` counterparts of these methods support `goog.dom.TagName`
too.

For this reason, we ban creating untyped `'script'`, `'iframe'`, `'frame'`,
`'embed'`, and `'object'` elements and require using `goog.dom` methods with
`goog.dom.TagName` with them.

### Assignment to Location.prototype.href and Window.prototype.location {#location}

Direct assignment of a non-constant value to `Location.prototype.href` and
`Window.prototype.location` is a security risk and is banned. Externally
controlled strings assigned to `Location.href` can result in [XSS]
vulnerabilities, e.g. via "`javascript:evil()`" URLs.

Instead of directly assigning to Location.prototype.href or
Window.prototype.location, use the safe wrapper function
[`goog.dom.safe.setLocationHref`]. When passed
a string, this wrapper sanitizes the URL before passing it to the underlying DOM
property. If passed a value of type `goog.html.SafeUrl`, the value is assigned
without further sanitization.

Note: Reads of this property are permitted.

### Assignment to .href property of Anchor, Link, etc elements {#href}

Direct assignment of a non-constant value to the href property of Anchor, Link,
and similar elements is a security risk and is banned. Externally controlled
strings assigned to the href property can result in [XSS] vulnerabilities, e.g.
via "javascript:evil()" URLs.

Instead of directly assigning to the href property, use safe wrapper functions
such as [`goog.dom.safe.setAnchorHref`]. When passed a
string, this wrapper sanitizes the URL before passing it to the underlying DOM
property. If passed a value of type `goog.html.SafeUrl`, the value is assigned
without further sanitization.

Note: Reads of this property are permitted.

### Assignment to property requires a TrustedResourceUrl via goog.dom.safe {#trustedResourceUrl}

Assignment of a non-constant value to certain URL-valued properties, like
Base.href and Script.src, via a string that is not fully application controlled
is a security risk and is banned. Attacker controlled values assigned to these
properties can result in loading code from an untrusted domain. For example, the
following would be unsafe if www.google.com were to have an open redirector and
attackerControlled were something like '../redirect=http://evil.com/evil#':

```js
script.src = 'https://www.google.com/module/' + attackerControlled + '.js';
```

Instead of directly assigning to these properties use safe wrapper functions
which take TrustedResourceUrl, such as goog.dom.safe.setScriptSrc.

Note: Reads of this property are permitted.

### Assigning a variable to a dangerous property via createDom is forbidden. {#createDom}

`goog.dom.createDom` and its version in `DomHelper` support assigning attributes
to the newly created elements. This conformance rule bans assigning attributes
that can load attacker controlled code, such as `script.src` or `innerHTML`.

To assign these attributes, create the element first and then assign the
attribute using `goog.dom.safe` functions like this:

```js
var script = goog.dom.createDom(goog.dom.TagName.SCRIPT);
goog.dom.safe.setScriptSrc(script, trustedResourceUrl);
```

Alternatively, use a function in `goog.html.SafeHtml` such as
`goog.html.SafeHtml.createScriptSrc`.

This rule might report a possible violation if the tag name or attributes are
not literals. To avoid this possible violation, structure the code like this:

```js
// Reports a possible violation.
var tag = 'img';
var attrs = {'src': ''};
goog.dom.createDom(tag, attrs);
// Passes.
goog.dom.createDom('img', {'src': ''});
```

Note that string literal values assigned to banned attributes are allowed as
they couldn't be attacker controlled.

### Setting content of Script element is not allowed {#scriptContent}

Setting content of `<script>` and then appending it to the document has the same
effect as calling eval(). This coding pattern is prone to XSS vulnerabilities,
and therefore disallowed.

### Window.prototype.postMessage {#postMessage}

Raw "postMessage" can create security vulnerabilities. Use gapi.rpc instead.
gapi.rpc conceptually augments window.postmessage with more security and other
features. 

Valid reasons for using raw "postMessage" include when it is used for
communication to/from an iframe hosted on the same domain as the page containing
the iframe. However, be sure to get a security review to allow usage of this.


### @expose {#expose}

@expose has non-obvious global side-effects that can cause errors.

### Global declarations {#globalVars}

Global functions and var declarations are not allowed, these pollute global
scope.  Top level namespaces are allowed if declared with "goog.provide" or
"goog.module".

### Unknown types {#unknownThis}

Loose types "?" (unknown), "\*" (all), "Object" and "Function" should be used
sparingly as they degrade available type information. "?" as a "this" type is
forbidden so that accidental unknowns (which are far more common) can be
caught.


### Client Side Storage (Closure library specific) {#storage}

Client side storage mechanisms are dangerous because of PII and security
implications. TODO(johnlenz): Document what someone submitting code to Closure
should in the case they see this warning.


### Unsafe legacy APIs {#legacyApis}

Closure (as well as some libraries built on top of
Closure)
include several APIs that consume plain strings, and pass them on to an API that
process that string in an injection-vulnerability-prone way (most commonly, an
assignment to `.innerHTML`). Thus, use of such APIs incurs similar risks of
injection vulnerabilities as the underlying DOM API (e.g., `innerHTML`
assignment). Due to these risks, conformance rules disallow the use of such
APIs. The respective conformance rules' error message refers to the equivalent,
safe API to use instead. Typically, the safe API consumes values of an
appropriate security-contract type such as `goog.html.SafeHtml`.

<!-- Links -->

[JS Conformance Framework]: https://github.com/google/closure-compiler/wiki/JS-Conformance-Framework
[XSS]: https://en.wikipedia.org/wiki/Cross-site_scripting
[`goog.dom.safe.documentWrite`]: https://google.github.io/closure-library/api/goog.dom.safe#documentWrite
[`goog.dom.safe.setAnchorHref`]: https://google.github.io/closure-library/api/goog.dom.safe#setAnchorHref
[`goog.dom.safe.setInnerHtml`]: https://google.github.io/closure-library/api/goog.dom.safe#setInnerHtml
[`goog.dom.safe.setLocationHref`]:  https://google.github.io/closure-library/api/goog.dom.safe#setLocationHref
[`goog.soy.Renderer.prototype.renderElement`]: https://google.github.io/closure-library/api/goog.soy.Renderer#renderElement

