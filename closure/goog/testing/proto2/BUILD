load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":proto2"],
)

closure_js_library(
    name = "proto2",
    srcs = ["proto2.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/proto2:message",
        "//closure/goog/proto2:objectserializer",
        "//closure/goog/testing:asserts",
    ],
)
