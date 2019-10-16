package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":iterables"],
)

closure_js_library(
    name = "iterables",
    srcs = ["//closure/goog/labs/collections:iterables.js"],
    lenient = True,
)
