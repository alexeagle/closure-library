load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":callback",
        ":counter",
        ":test",
    ],
)

closure_js_library(
    name = "callback",
    srcs = ["callback.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "counter",
    srcs = ["counter.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "test",
    srcs = ["test.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/iter",
    ],
)
