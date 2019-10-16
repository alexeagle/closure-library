package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":proto",
        ":serializer",
    ],
)

closure_js_library(
    name = "proto",
    srcs = ["//closure/goog/proto:proto.js"],
    lenient = True,
    deps = ["//closure/goog/proto:serializer"],
)

closure_js_library(
    name = "serializer",
    srcs = ["//closure/goog/proto:serializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/string",
    ],
)
