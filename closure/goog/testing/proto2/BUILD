package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "proto2",
    testonly = True,
    srcs = ["//closure/goog/testing/proto2:proto2.js"],
    lenient = True,
    deps = [
        "//closure/goog/proto2:message",
        "//closure/goog/proto2:objectserializer",
        "//closure/goog/testing:asserts",
    ],
)
