package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "fakemechanism",
    testonly = True,
    srcs = ["//closure/goog/testing/storage:fakemechanism.js"],
    lenient = True,
    deps = [
        "//closure/goog/storage/mechanism:iterablemechanism",
        "//closure/goog/structs:map",
    ],
)
