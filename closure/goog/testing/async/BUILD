load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":mockcontrol"],
)

closure_js_library(
    name = "mockcontrol",
    srcs = ["mockcontrol.js"],
    lenient = True,
    deps = [
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:mockcontrol",
        "//closure/goog/testing:mockmatchers",
    ],
)
