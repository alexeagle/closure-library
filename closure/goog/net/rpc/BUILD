load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":httpcors"],
)

closure_js_library(
    name = "httpcors",
    srcs = ["httpcors.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
    ],
)
