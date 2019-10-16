package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":csv"],
)

closure_js_library(
    name = "csv",
    srcs = ["//closure/goog/labs/format:csv.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:newlines",
    ],
)
