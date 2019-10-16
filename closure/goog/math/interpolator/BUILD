package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":interpolator1",
        ":linear1",
        ":pchip1",
        ":spline1",
    ],
)

closure_js_library(
    name = "interpolator1",
    srcs = ["//closure/goog/math/interpolator:interpolator1.js"],
    lenient = True,
)

closure_js_library(
    name = "linear1",
    srcs = ["//closure/goog/math/interpolator:linear1.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/math/interpolator:interpolator1",
    ],
)

closure_js_library(
    name = "pchip1",
    srcs = ["//closure/goog/math/interpolator:pchip1.js"],
    lenient = True,
    deps = [
        "//closure/goog/math",
        "//closure/goog/math/interpolator:spline1",
    ],
)

closure_js_library(
    name = "spline1",
    srcs = ["//closure/goog/math/interpolator:spline1.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/math:tdma",
        "//closure/goog/math/interpolator:interpolator1",
    ],
)
