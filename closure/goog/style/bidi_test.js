// Copyright 2012 The Closure Library Authors. All Rights Reserved.
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

goog.module('goog.style.bidiTest');
goog.setTestOnly();

const bidi = goog.require('goog.style.bidi');
const dom = goog.require('goog.dom');
const style = goog.require('goog.style');
const testSuite = goog.require('goog.testing.testSuite');
const userAgent = goog.require('goog.userAgent');

// Updates the calculated metrics.
function updateInfo() {
  let element = document.getElementById('scrolledElementRtl');
  document.getElementById('elementScrollLeftRtl').innerHTML =
      element.offsetParent.scrollLeft;
  document.getElementById('bidiOffsetStartRtl').innerHTML =
      bidi.getOffsetStart(element);
  document.getElementById('bidiScrollLeftRtl').innerHTML =
      bidi.getScrollLeft(element.offsetParent);

  element = document.getElementById('scrolledElementLtr');
  document.getElementById('elementScrollLeftLtr').innerHTML =
      element.offsetParent.scrollLeft;
  document.getElementById('bidiOffsetStartLtr').innerHTML =
      bidi.getOffsetStart(element);
  document.getElementById('bidiScrollLeftLtr').innerHTML =
      bidi.getScrollLeft(element.offsetParent);
}

testSuite({
  setUpPage() {
    for (const e of Array.from(document.querySelectorAll('.scrollDiv'))) {
      // Defer assigning scroll handlers until after tests begins in case of
      // aberrant scrolls.
      e.addEventListener('scroll', updateInfo);
    }

    updateInfo();
  },

  tearDown() {
    document.documentElement.dir = 'ltr';
    document.body.dir = 'ltr';
  },

  testGetOffsetStart() {
    let elm = document.getElementById('scrolledElementRtl');
    assertEquals(elm.style['right'], bidi.getOffsetStart(elm) + 'px');
    elm = document.getElementById('scrolledElementLtr');
    assertEquals(elm.style['left'], bidi.getOffsetStart(elm) + 'px');
  },

  testSetScrollOffsetRtl() {
    const scrollElm = document.getElementById('scrollDivRtl');
    const scrolledElm = document.getElementById('scrolledElementRtl');
    const originalDistance =
        style.getRelativePosition(scrolledElm, document.body).x;
    const scrollAndAssert = (pixels) => {
      bidi.setScrollOffset(scrollElm, pixels);
      assertEquals(
          originalDistance + pixels,
          style.getRelativePosition(scrolledElm, document.body).x);
    };
    scrollAndAssert(0);
    scrollAndAssert(50);
    scrollAndAssert(100);
    scrollAndAssert(150);
    scrollAndAssert(155);
    scrollAndAssert(0);
  },

  testSetScrollOffsetLtr() {
    const scrollElm = document.getElementById('scrollDivLtr');
    const scrolledElm = document.getElementById('scrolledElementLtr');
    const originalDistance =
        style.getRelativePosition(scrolledElm, document.body).x;
    const scrollAndAssert = (pixels) => {
      bidi.setScrollOffset(scrollElm, pixels);
      assertEquals(
          originalDistance - pixels,
          style.getRelativePosition(scrolledElm, document.body).x);
    };
    scrollAndAssert(0);
    scrollAndAssert(50);
    scrollAndAssert(100);
    scrollAndAssert(150);
    scrollAndAssert(155);
    scrollAndAssert(0);
  },

  testFixedBodyChildLtr() {
    const bodyChild = document.getElementById('bodyChild');
    assertEquals(
        userAgent.GECKO ? document.body : null, bodyChild.offsetParent);
    assertEquals(60, bidi.getOffsetStart(bodyChild));
  },

  testFixedBodyChildRtl() {
    document.documentElement.dir = 'rtl';
    document.body.dir = 'rtl';

    const bodyChild = document.getElementById('bodyChild');
    assertEquals(
        userAgent.GECKO ? document.body : null, bodyChild.offsetParent);

    let expectedOffsetStart =
        dom.getViewportSize().width - 60 - bodyChild.offsetWidth;

    // Gecko seems to also add in the marginbox for the body.
    // It's not really clear to me if this is true in the general case,
    // or just under certain conditions.
    if (userAgent.GECKO) {
      const marginBox = style.getMarginBox(document.body);
      expectedOffsetStart -= (marginBox.left + marginBox.right);
    }

    assertEquals(expectedOffsetStart, bidi.getOffsetStart(bodyChild));
  },

  testGetScrollLeftRTL() {
    const scrollLeftDiv = document.getElementById('scrollLeftRtl');
    scrollLeftDiv.style.overflow = 'visible';
    assertEquals(0, bidi.getScrollLeft(scrollLeftDiv));
    scrollLeftDiv.style.overflow = 'hidden';
    assertEquals(0, bidi.getScrollLeft(scrollLeftDiv));
    // NOTE: 'auto' must go above the 'scroll' assertion. Chrome 47 has a bug
    // with non-deterministic scroll positioning. Maybe it recalculates the
    // layout on accessing those properties?
    // TODO(user): Remove this comment when
    // https://code.google.com/p/chromium/issues/detail?id=568706 is resolved.
    scrollLeftDiv.style.overflow = 'auto';
    assertEquals(0, bidi.getScrollLeft(scrollLeftDiv));
    scrollLeftDiv.style.overflow = 'scroll';
    assertEquals(0, bidi.getScrollLeft(scrollLeftDiv));
  },
});
