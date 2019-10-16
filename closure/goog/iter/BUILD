package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":es6",
        ":iter",
    ],
)

closure_js_library(
    name = "es6",
    srcs = ["//closure/goog/iter:es6.js"],
    lenient = True,
    deps = ["//closure/goog/iter"],
)

closure_js_library(
    name = "iter",
    srcs = ["//closure/goog/iter:iter.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/functions",
        "//closure/goog/math",
    ],
)
