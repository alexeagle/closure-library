package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "layoutasserts",
    testonly = True,
    srcs = ["//closure/goog/testing/style:layoutasserts.js"],
    lenient = True,
    deps = [
        "//closure/goog/style",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing/style",
    ],
)

closure_js_library(
    name = "style",
    testonly = True,
    srcs = ["//closure/goog/testing/style:style.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/math:rect",
        "//closure/goog/style",
    ],
)
