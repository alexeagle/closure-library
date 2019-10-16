package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":devcss",
        ":devcssrunner",
    ],
)

closure_js_library(
    name = "devcss",
    srcs = ["//closure/goog/debug/devcss:devcss.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/cssom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "devcssrunner",
    srcs = ["//closure/goog/debug/devcss:devcssrunner.js"],
    lenient = True,
    deps = ["//closure/goog/debug/devcss"],
)
