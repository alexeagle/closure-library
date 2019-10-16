package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":deferred",
        ":deferredlist",
    ],
)

closure_js_library(
    name = "deferred",
    srcs = ["//third_party/closure/goog/mochikit/async:deferred.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
    ],
)

closure_js_library(
    name = "deferredlist",
    srcs = ["//third_party/closure/goog/mochikit/async:deferredlist.js"],
    lenient = True,
    deps = ["//third_party/closure/goog/mochikit/async:deferred"],
)
