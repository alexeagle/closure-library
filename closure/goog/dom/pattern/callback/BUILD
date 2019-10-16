package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":callback",
        ":counter",
        ":test",
    ],
)

closure_js_library(
    name = "callback",
    srcs = ["//closure/goog/dom/pattern/callback:callback.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "counter",
    srcs = ["//closure/goog/dom/pattern/callback:counter.js"],
    lenient = True,
)

closure_js_library(
    name = "test",
    srcs = ["//closure/goog/dom/pattern/callback:test.js"],
    lenient = True,
    deps = ["//closure/goog/iter"],
)
