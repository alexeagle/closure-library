load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":fx",
        ":transition",
    ],
)

closure_js_library(
    name = "fx",
    srcs = ["fx.js"],
    lenient = True,
    deps = [
        ":transition",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "transition",
    srcs = ["transition.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/style",
        "//closure/goog/style:transition",
        "//closure/goog/timer",
    ],
)
