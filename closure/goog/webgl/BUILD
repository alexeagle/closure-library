load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":webgl"],
)

closure_js_library(
    name = "webgl",
    srcs = ["webgl.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
