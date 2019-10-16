package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":multimap"],
)

closure_js_library(
    name = "multimap",
    srcs = ["//closure/goog/labs/structs:multimap.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)
