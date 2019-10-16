package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":anim"],
)

closure_js_library(
    name = "anim",
    srcs = ["//closure/goog/fx/anim:anim.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:animationdelay",
        "//closure/goog/async:delay",
        "//closure/goog/object",
    ],
)
