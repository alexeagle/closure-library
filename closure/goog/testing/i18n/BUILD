package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "asserts",
    testonly = True,
    srcs = ["//closure/goog/testing/i18n:asserts.js"],
    lenient = True,
    deps = ["//closure/goog/testing:jsunit"],
)
