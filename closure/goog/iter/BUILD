load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":es6",
        ":iter",
    ],
)

closure_js_library(
    name = "es6",
    srcs = ["es6.js"],
    lenient = True,
    deps = [
        ":iter",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "iter",
    srcs = ["iter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/functions",
        "//closure/goog/math",
    ],
)
