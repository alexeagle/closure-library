package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":uri",
        ":utils",
    ],
)

closure_js_library(
    name = "uri",
    srcs = ["//closure/goog/uri:uri.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "utils",
    srcs = ["//closure/goog/uri:utils.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)
