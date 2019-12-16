load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":nodejs",
        ":webworkers",
    ],
)

closure_js_library(
    name = "nodejs",
    srcs = ["nodejs.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "webworkers",
    srcs = ["webworkers.js"],
    lenient = True,
)
