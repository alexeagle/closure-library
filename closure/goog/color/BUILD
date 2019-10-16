package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":alpha",
        ":color",
        ":names",
    ],
)

closure_js_library(
    name = "alpha",
    srcs = ["//closure/goog/color:alpha.js"],
    lenient = True,
    deps = ["//closure/goog/color"],
)

closure_js_library(
    name = "color",
    srcs = ["//closure/goog/color:color.js"],
    lenient = True,
    deps = [
        "//closure/goog/color:names",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "names",
    srcs = ["//closure/goog/color:names.js"],
    lenient = True,
)
