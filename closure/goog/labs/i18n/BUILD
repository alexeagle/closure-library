load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "listformat",
    srcs = ["listformat.js"],
    lenient = True,
    deps = [
        ":listsymbols",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "listsymbols",
    srcs = ["listsymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "listsymbolsext",
    srcs = ["listsymbolsext.js"],
    lenient = True,
    deps = [
        ":listsymbols",
        "//closure/goog:base",
    ],
)
