package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "assertthat",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:assertthat.js"],
    lenient = True,
    deps = ["//closure/goog/debug:error"],
)

closure_js_library(
    name = "decoratormatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:decoratormatcher.js"],
    lenient = True,
    deps = ["//closure/goog/labs/testing:matcher"],
)

closure_js_library(
    name = "dictionarymatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:dictionarymatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/labs/testing:matcher",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "environment",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:environment.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:console",
        "//closure/goog/promise:thenable",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:mockclock",
        "//closure/goog/testing:mockcontrol",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "json_fuzzing",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:json_fuzzing.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/testing:pseudorandom",
    ],
)

closure_js_library(
    name = "logicmatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:logicmatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/labs/testing:matcher",
    ],
)

closure_js_library(
    name = "matcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:matcher.js"],
    lenient = True,
)

closure_js_library(
    name = "numbermatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:numbermatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/labs/testing:matcher",
    ],
)

closure_js_library(
    name = "objectmatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:objectmatcher.js"],
    lenient = True,
    deps = ["//closure/goog/labs/testing:matcher"],
)

closure_js_library(
    name = "stringmatcher",
    testonly = True,
    srcs = ["//closure/goog/labs/testing:stringmatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/labs/testing:matcher",
        "//closure/goog/string",
    ],
)
