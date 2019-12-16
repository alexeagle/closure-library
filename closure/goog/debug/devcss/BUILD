load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":devcss",
        ":devcssrunner",
    ],
)

closure_js_library(
    name = "devcss",
    srcs = ["devcss.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["devcssrunner.js"],
    lenient = True,
    deps = [
        ":devcss",
        "//closure/goog:base",
    ],
)
