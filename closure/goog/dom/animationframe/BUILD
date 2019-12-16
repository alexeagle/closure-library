load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":animationframe",
        ":polyfill",
    ],
)

closure_js_library(
    name = "animationframe",
    srcs = ["animationframe.js"],
    lenient = True,
    deps = [
        ":polyfill",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "polyfill",
    srcs = ["polyfill.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
