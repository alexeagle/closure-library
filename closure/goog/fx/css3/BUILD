package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":fx",
        ":transition",
    ],
)

closure_js_library(
    name = "fx",
    srcs = ["//closure/goog/fx/css3:fx.js"],
    lenient = True,
    deps = ["//closure/goog/fx/css3:transition"],
)

closure_js_library(
    name = "transition",
    srcs = ["//closure/goog/fx/css3:transition.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/style",
        "//closure/goog/style:transition",
        "//closure/goog/timer",
    ],
)
