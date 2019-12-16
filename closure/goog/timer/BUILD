load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [":timer"],
)

closure_js_library(
    name = "timer",
    srcs = ["timer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/promise",
    ],
)
