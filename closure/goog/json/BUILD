load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":hybrid",
        ":json",
        ":jsonable",
        ":nativejsonprocessor",
        ":processor",
    ],
)

closure_js_library(
    name = "hybrid",
    srcs = ["hybrid.js"],
    lenient = True,
    deps = [
        ":json",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "json",
    srcs = ["json.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "json_perf",
    testonly = 1,
    srcs = ["json_perf.js"],
    lenient = True,
    deps = [
        ":json",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/math",
        "//closure/goog/string",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:propertyreplacer",
    ],
)

closure_js_library(
    name = "jsonable",
    srcs = ["jsonable.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "nativejsonprocessor",
    srcs = ["nativejsonprocessor.js"],
    lenient = True,
    deps = [
        ":processor",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "processor",
    srcs = ["processor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string:parser",
        "//closure/goog/string:stringifier",
    ],
)
