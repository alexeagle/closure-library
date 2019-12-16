load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":asserts",
        ":dom",
    ],
)

closure_js_library(
    name = "asserts",
    srcs = ["asserts.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/debug:error",
        "//closure/goog/dom:nodetype",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["dom.js"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/dom:element",
        "//closure/goog/dom:tagname",
    ],
)
