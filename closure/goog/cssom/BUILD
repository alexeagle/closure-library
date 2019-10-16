package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":cssom",
        "//closure/goog/cssom/iframe:all_js",
    ],
)

closure_js_library(
    name = "cssom",
    srcs = ["//closure/goog/cssom:cssom.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)
