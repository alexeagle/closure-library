load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":abstractdragdrop",
        ":animation",
        ":animationqueue",
        ":cssspriteanimation",
        ":dom",
        ":dragdrop",
        ":dragdropgroup",
        ":dragger",
        ":draglistgroup",
        ":dragscrollsupport",
        ":easing",
        ":fx",
        ":transition",
        ":transitionbase",
        "//closure/goog/fx/anim:all_js",
        "//closure/goog/fx/css3:all_js",
    ],
)

closure_js_library(
    name = "abstractdragdrop",
    srcs = ["abstractdragdrop.js"],
    lenient = True,
    deps = [
        ":dragger",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "animation",
    srcs = ["animation.js"],
    lenient = True,
    deps = [
        ":transition",
        ":transitionbase",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:event",
        "//closure/goog/fx/anim",
    ],
)

closure_js_library(
    name = "animationqueue",
    srcs = ["animationqueue.js"],
    lenient = True,
    deps = [
        ":animation",
        ":transition",
        ":transitionbase",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events",
    ],
)

closure_js_library(
    name = "cssspriteanimation",
    srcs = ["cssspriteanimation.js"],
    lenient = True,
    deps = [
        ":animation",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["dom.js"],
    lenient = True,
    deps = [
        ":animation",
        ":transition",
        "//closure/goog:base",
        "//closure/goog/color",
        "//closure/goog/events",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
    ],
)

closure_js_library(
    name = "dragdrop",
    srcs = ["dragdrop.js"],
    lenient = True,
    deps = [
        ":abstractdragdrop",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dragdropgroup",
    srcs = ["dragdropgroup.js"],
    lenient = True,
    deps = [
        ":abstractdragdrop",
        "//closure/goog:base",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "dragger",
    srcs = ["dragger.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "draglistgroup",
    srcs = ["draglistgroup.js"],
    lenient = True,
    deps = [
        ":dragger",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventid",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "dragscrollsupport",
    srcs = ["dragscrollsupport.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "easing",
    srcs = ["easing.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "fx",
    srcs = ["fx.js"],
    lenient = True,
    deps = [
        ":animation",
        ":easing",
        ":transition",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "transition",
    srcs = ["transition.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "transitionbase",
    srcs = ["transitionbase.js"],
    lenient = True,
    deps = [
        ":transition",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
    ],
)
