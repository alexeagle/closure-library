package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/async:animationdelay.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "conditionaldelay",
    srcs = ["//closure/goog/async:conditionaldelay.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:delay",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "debouncer",
    srcs = ["//closure/goog/async:debouncer.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "delay",
    srcs = ["//closure/goog/async:delay.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "freelist",
    srcs = ["//closure/goog/async:freelist.js"],
    lenient = True,
)

closure_js_library(
    name = "nexttick",
    srcs = ["//closure/goog/async:nexttick.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/dom:tagname",
        "//closure/goog/functions",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
    ],
)

closure_js_library(
    name = "run",
    srcs = ["//closure/goog/async:run.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:nexttick",
        "//closure/goog/async:workqueue",
    ],
)

closure_js_library(
    name = "throttle",
    srcs = ["//closure/goog/async:throttle.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "workqueue",
    srcs = ["//closure/goog/async:workqueue.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:freelist",
    ],
)
