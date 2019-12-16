load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files(["disposable.js"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":disposable",
        ":idisposable",
    ],
)

closure_js_library(
    name = "disposable",
    srcs = ["disposable.js"],
    lenient = True,
    deps = [
        ":idisposable",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "idisposable",
    srcs = ["idisposable.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
