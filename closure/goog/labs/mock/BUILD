load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":mock",
        ":timeoutmode",
        ":verificationmode",
    ],
)

closure_js_library(
    name = "mock",
    srcs = ["mock.js"],
    lenient = True,
    deps = [
        ":timeoutmode",
        ":verificationmode",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:error",
        "//closure/goog/functions",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "timeoutmode",
    srcs = ["timeoutmode.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "verificationmode",
    srcs = ["verificationmode.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
