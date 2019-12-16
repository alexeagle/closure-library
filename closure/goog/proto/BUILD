load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    exports = [
        ":proto",
        ":serializer",
    ],
)

closure_js_library(
    name = "proto",
    srcs = ["proto.js"],
    lenient = True,
    deps = [
        ":serializer",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "serializer",
    srcs = ["serializer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/json",
        "//closure/goog/string",
    ],
)
