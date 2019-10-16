package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":httpcors"],
)

closure_js_library(
    name = "httpcors",
    srcs = ["//closure/goog/net/rpc:httpcors.js"],
    lenient = True,
    deps = [
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
    ],
)
