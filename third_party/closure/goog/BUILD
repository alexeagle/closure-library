package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        "//third_party/closure/goog/dojo/dom:all_js",
        "//third_party/closure/goog/loremipsum/text:all_js",
        "//third_party/closure/goog/mochikit/async:all_js",
        "//third_party/closure/goog/svgpan:all_js",
    ],
)

closure_js_library(
    name = "base",
    srcs = ["//third_party/closure/goog:base.js"],
    lenient = True,
    no_closure_library = True,
)

closure_js_library(
    name = "deps",
    srcs = ["//third_party/closure/goog:deps.js"],
    lenient = True,
    no_closure_library = True,
)
