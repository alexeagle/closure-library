package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":animationframe",
        ":polyfill",
    ],
)

closure_js_library(
    name = "animationframe",
    srcs = ["//closure/goog/dom/animationframe:animationframe.js"],
    lenient = True,
    deps = ["//closure/goog/dom/animationframe:polyfill"],
)

closure_js_library(
    name = "polyfill",
    srcs = ["//closure/goog/dom/animationframe:polyfill.js"],
    lenient = True,
)
