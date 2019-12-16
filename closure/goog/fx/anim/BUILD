load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":anim"],
)

closure_js_library(
    name = "anim",
    srcs = ["anim.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/async:animationdelay",
        "//closure/goog/async:delay",
        "//closure/goog/object",
    ],
)
