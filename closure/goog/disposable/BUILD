package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":disposable",
        ":idisposable",
    ],
)

closure_js_library(
    name = "disposable",
    srcs = ["//closure/goog/disposable:disposable.js"],
    lenient = True,
    deps = ["//closure/goog/disposable:idisposable"],
)

closure_js_library(
    name = "idisposable",
    srcs = ["//closure/goog/disposable:idisposable.js"],
    lenient = True,
)
