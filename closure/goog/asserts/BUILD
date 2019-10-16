package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":asserts"],
)

closure_js_library(
    name = "asserts",
    srcs = ["//closure/goog/asserts:asserts.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:error",
        "//closure/goog/dom:nodetype",
    ],
)
