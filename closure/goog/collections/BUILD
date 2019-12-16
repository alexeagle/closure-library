load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    exports = [":sets"],
)

closure_js_library(
    name = "sets",
    srcs = ["sets.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/labs/collections:iterables",
    ],
)
