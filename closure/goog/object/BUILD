load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files(["object.js"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":object"],
)

closure_js_library(
    name = "object",
    srcs = ["object.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
