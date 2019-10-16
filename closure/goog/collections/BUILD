package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":sets"],
)

closure_js_library(
    name = "sets",
    srcs = ["//closure/goog/collections:sets.js"],
    lenient = True,
    deps = ["//closure/goog/labs/collections:iterables"],
)
