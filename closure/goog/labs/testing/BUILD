load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "assertthat",
    srcs = ["assertthat.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/debug:error",
    ],
)

closure_js_library(
    name = "decoratormatcher",
    srcs = ["decoratormatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dictionarymatcher",
    srcs = ["dictionarymatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "environment",
    srcs = ["environment.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["json_fuzzing.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
        "//closure/goog/testing:pseudorandom",
    ],
)

closure_js_library(
    name = "logicmatcher",
    srcs = ["logicmatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "matcher",
    srcs = ["matcher.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "numbermatcher",
    srcs = ["numbermatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "objectmatcher",
    srcs = ["objectmatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "stringmatcher",
    srcs = ["stringmatcher.js"],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)
