package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":loremipsum"],
)

closure_js_library(
    name = "loremipsum",
    srcs = ["//third_party/closure/goog/loremipsum/text:loremipsum.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math",
        "//closure/goog/string",
        "//closure/goog/structs:map",
        "//closure/goog/structs:set",
    ],
)
