package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":array"],
)

closure_js_library(
    name = "array",
    srcs = ["//closure/goog/array:array.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)
