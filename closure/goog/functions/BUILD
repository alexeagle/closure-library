package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":functions"],
)

closure_js_library(
    name = "functions",
    srcs = ["//closure/goog/functions:functions.js"],
    lenient = True,
)
