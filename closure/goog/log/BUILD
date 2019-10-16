package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":log"],
)

closure_js_library(
    name = "log",
    srcs = ["//closure/goog/log:log.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug",
        "//closure/goog/debug:logger",
        "//closure/goog/debug:logrecord",
    ],
)
