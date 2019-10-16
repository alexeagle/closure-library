package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":svgpan"],
)

closure_js_library(
    name = "svgpan",
    srcs = ["//third_party/closure/goog/svgpan:svgpan.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:mousewheelhandler",
    ],
)
