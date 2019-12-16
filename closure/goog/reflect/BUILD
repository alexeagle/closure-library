load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":reflect"],
)

closure_js_library(
    name = "reflect",
    srcs = ["reflect.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
