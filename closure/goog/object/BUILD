package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":object"],
)

closure_js_library(
    name = "object",
    srcs = ["//closure/goog/object:object.js"],
    lenient = True,
)
