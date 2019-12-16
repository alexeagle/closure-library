load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":interpolator1",
        ":linear1",
        ":pchip1",
        ":spline1",
    ],
)

closure_js_library(
    name = "interpolator1",
    srcs = ["interpolator1.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "linear1",
    srcs = ["linear1.js"],
    lenient = True,
    deps = [
        ":interpolator1",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "pchip1",
    srcs = ["pchip1.js"],
    lenient = True,
    deps = [
        ":spline1",
        "//closure/goog:base",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "spline1",
    srcs = ["spline1.js"],
    lenient = True,
    deps = [
        ":interpolator1",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/math:tdma",
    ],
)
