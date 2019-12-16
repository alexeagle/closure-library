load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":animationdelay",
        ":conditionaldelay",
        ":debouncer",
        ":delay",
        ":freelist",
        ":nexttick",
        ":run",
        ":throttle",
        ":workqueue",
    ],
)

closure_js_library(
    name = "animationdelay",
    srcs = ["animationdelay.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "conditionaldelay",
    srcs = ["conditionaldelay.js"],
    lenient = True,
    deps = [
        ":delay",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "debouncer",
    srcs = ["debouncer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "delay",
    srcs = ["delay.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "freelist",
    srcs = ["freelist.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "nexttick",
    srcs = ["nexttick.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "run",
    srcs = ["run.js"],
    lenient = True,
    deps = [
        ":nexttick",
        ":workqueue",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "throttle",
    srcs = ["throttle.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "workqueue",
    srcs = ["workqueue.js"],
    lenient = True,
    deps = [
        ":freelist",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)
