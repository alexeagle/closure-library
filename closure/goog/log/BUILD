load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":log"],
)

closure_js_library(
    name = "log",
    srcs = ["log.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/debug",
        "//closure/goog/debug:logger",
        "//closure/goog/debug:logrecord",
    ],
)
