load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":basicstat"],
)

closure_js_library(
    name = "basicstat",
    srcs = ["basicstat.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/string:stringformat",
        "//closure/goog/structs:circularbuffer",
    ],
)
