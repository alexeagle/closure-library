load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files(["utils.js"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":uri",
        ":utils",
    ],
)

closure_js_library(
    name = "uri",
    srcs = ["uri.js"],
    lenient = True,
    deps = [
        ":utils",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "utils",
    srcs = ["utils.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)
