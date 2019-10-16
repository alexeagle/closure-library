package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":nativeresolver",
        ":promise",
        ":resolver",
        ":thenable",
    ],
)

closure_js_library(
    name = "nativeresolver",
    srcs = ["//closure/goog/promise:nativeresolver.js"],
    lenient = True,
)

closure_js_library(
    name = "promise",
    srcs = ["//closure/goog/promise:promise.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:freelist",
        "//closure/goog/async:nexttick",
        "//closure/goog/async:run",
        "//closure/goog/debug:error",
        "//closure/goog/promise:resolver",
        "//closure/goog/promise:thenable",
    ],
)

closure_js_library(
    name = "resolver",
    srcs = ["//closure/goog/promise:resolver.js"],
    lenient = True,
)

closure_js_library(
    name = "testsuiteadapter",
    testonly = True,
    srcs = ["//closure/goog/promise:testsuiteadapter.js"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "thenable",
    srcs = ["//closure/goog/promise:thenable.js"],
    lenient = True,
)
