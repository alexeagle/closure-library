package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":delegateregistry",
        ":delegates",
    ],
)

closure_js_library(
    name = "delegateregistry",
    srcs = ["//closure/goog/delegate:delegateregistry.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
    ],
)

closure_js_library(
    name = "delegates",
    srcs = ["//closure/goog/delegate:delegates.js"],
    lenient = True,
)
