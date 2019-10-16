package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/json:hybrid.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/json",
    ],
)

closure_js_library(
    name = "json",
    srcs = ["//closure/goog/json:json.js"],
    lenient = True,
)

closure_js_library(
    name = "jsonable",
    srcs = ["//closure/goog/json:jsonable.js"],
    lenient = True,
)

closure_js_library(
    name = "nativejsonprocessor",
    srcs = ["//closure/goog/json:nativejsonprocessor.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/json:processor",
    ],
)

closure_js_library(
    name = "processor",
    srcs = ["//closure/goog/json:processor.js"],
    lenient = True,
    deps = [
        "//closure/goog/string:parser",
        "//closure/goog/string:stringifier",
    ],
)
