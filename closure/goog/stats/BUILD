package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":basicstat"],
)

closure_js_library(
    name = "basicstat",
    srcs = ["//closure/goog/stats:basicstat.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/string:stringformat",
        "//closure/goog/structs:circularbuffer",
    ],
)
