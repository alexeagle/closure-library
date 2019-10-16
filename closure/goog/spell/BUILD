package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":spellcheck"],
)

closure_js_library(
    name = "spellcheck",
    srcs = ["//closure/goog/spell:spellcheck.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:set",
        "//closure/goog/timer",
    ],
)
