package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":boundedcollectablestorage"],
)

closure_js_library(
    name = "boundedcollectablestorage",
    srcs = ["//closure/goog/labs/storage:boundedcollectablestorage.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/storage:collectablestorage",
        "//closure/goog/storage:errorcode",
        "//closure/goog/storage:expiringstorage",
    ],
)
