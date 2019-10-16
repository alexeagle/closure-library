package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":query"],
)

closure_js_library(
    name = "query",
    srcs = ["//third_party/closure/goog/dojo/dom:query.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)
