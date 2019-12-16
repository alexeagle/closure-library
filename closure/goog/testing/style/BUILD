load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":layoutasserts",
        ":style",
    ],
)

closure_js_library(
    name = "layoutasserts",
    srcs = ["layoutasserts.js"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog:base",
        "//closure/goog/style",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "style",
    srcs = ["style.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/math:rect",
        "//closure/goog/style",
    ],
)
