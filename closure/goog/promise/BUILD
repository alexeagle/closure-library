load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":nativeresolver",
        ":promise",
        ":resolver",
        ":thenable",
    ],
)

closure_js_library(
    name = "nativeresolver",
    srcs = ["nativeresolver.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "promise",
    srcs = ["promise.js"],
    lenient = True,
    deps = [
        ":resolver",
        ":thenable",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/async:freelist",
        "//closure/goog/async:nexttick",
        "//closure/goog/async:run",
        "//closure/goog/debug:error",
    ],
)

closure_js_library(
    name = "resolver",
    srcs = ["resolver.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "testsuiteadapter",
    testonly = 1,
    srcs = ["testsuiteadapter.js"],
    lenient = True,
    deps = [
        ":promise",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "thenable",
    srcs = ["thenable.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
