package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/fx:abstractdragdrop.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/fx:dragger",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "animation",
    srcs = ["//closure/goog/fx:animation.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:event",
        "//closure/goog/fx:transition",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/fx/anim",
    ],
)

closure_js_library(
    name = "animationqueue",
    srcs = ["//closure/goog/fx:animationqueue.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:transition",
        "//closure/goog/fx:transitionbase",
    ],
)

closure_js_library(
    name = "cssspriteanimation",
    srcs = ["//closure/goog/fx:cssspriteanimation.js"],
    lenient = True,
    deps = ["//closure/goog/fx:animation"],
)

closure_js_library(
    name = "dom",
    srcs = ["//closure/goog/fx:dom.js"],
    lenient = True,
    deps = [
        "//closure/goog/color",
        "//closure/goog/events",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:transition",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
    ],
)

closure_js_library(
    name = "dragdrop",
    srcs = ["//closure/goog/fx:dragdrop.js"],
    lenient = True,
    deps = ["//closure/goog/fx:abstractdragdrop"],
)

closure_js_library(
    name = "dragdropgroup",
    srcs = ["//closure/goog/fx:dragdropgroup.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/fx:abstractdragdrop",
    ],
)

closure_js_library(
    name = "dragger",
    srcs = ["//closure/goog/fx:dragger.js"],
    lenient = True,
    deps = [
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
    srcs = ["//closure/goog/fx:draglistgroup.js"],
    lenient = True,
    deps = [
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
        "//closure/goog/fx:dragger",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "dragscrollsupport",
    srcs = ["//closure/goog/fx:dragscrollsupport.js"],
    lenient = True,
    deps = [
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
    srcs = ["//closure/goog/fx:easing.js"],
    lenient = True,
)

closure_js_library(
    name = "fx",
    srcs = ["//closure/goog/fx:fx.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:easing",
        "//closure/goog/fx:transition",
    ],
)

closure_js_library(
    name = "transition",
    srcs = ["//closure/goog/fx:transition.js"],
    lenient = True,
)

closure_js_library(
    name = "transitionbase",
    srcs = ["//closure/goog/fx:transitionbase.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/fx:transition",
    ],
)
