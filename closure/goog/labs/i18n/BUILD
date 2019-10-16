package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":listformat",
        ":listsymbols",
        ":listsymbolsext",
    ],
)

closure_js_library(
    name = "listformat",
    srcs = ["//closure/goog/labs/i18n:listformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/labs/i18n:listsymbols",
    ],
)

closure_js_library(
    name = "listsymbols",
    srcs = ["//closure/goog/labs/i18n:listsymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "listsymbolsext",
    srcs = ["//closure/goog/labs/i18n:listsymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/labs/i18n:listsymbols"],
)
