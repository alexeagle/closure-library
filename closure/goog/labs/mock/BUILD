package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":verificationmode"],
)

closure_js_library(
    name = "mock",
    testonly = True,
    srcs = ["//closure/goog/labs/mock:mock.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:error",
        "//closure/goog/functions",
        "//closure/goog/labs/mock:verificationmode",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "verificationmode",
    srcs = ["//closure/goog/labs/mock:verificationmode.js"],
    lenient = True,
)
