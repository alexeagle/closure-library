package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":pixeldensitymonitor"],
)

closure_js_library(
    name = "pixeldensitymonitor",
    srcs = ["//closure/goog/labs/style:pixeldensitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)
