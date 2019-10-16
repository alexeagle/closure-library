package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":style"],
)

closure_js_library(
    name = "style",
    srcs = ["//closure/goog/cssom/iframe:style.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/cssom",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)
