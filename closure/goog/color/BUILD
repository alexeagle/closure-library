load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":alpha",
        ":color",
        ":names",
    ],
)

closure_js_library(
    name = "alpha",
    srcs = ["alpha.js"],
    lenient = True,
    deps = [
        ":color",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "color",
    srcs = ["color.js"],
    lenient = True,
    deps = [
        ":names",
        "//closure/goog:base",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "names",
    srcs = ["names.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
