package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":pagevisibilitymonitor"],
)

closure_js_library(
    name = "pagevisibilitymonitor",
    srcs = ["//closure/goog/labs/dom:pagevisibilitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:vendor",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/memoize",
    ],
)
