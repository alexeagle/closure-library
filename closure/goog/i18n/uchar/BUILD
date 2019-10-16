package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":localnamefetcher",
        ":namefetcher",
        ":remotenamefetcher",
    ],
)

closure_js_library(
    name = "localnamefetcher",
    srcs = ["//closure/goog/i18n/uchar:localnamefetcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:ucharnames",
        "//closure/goog/i18n/uchar:namefetcher",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "namefetcher",
    srcs = ["//closure/goog/i18n/uchar:namefetcher.js"],
    lenient = True,
)

closure_js_library(
    name = "remotenamefetcher",
    srcs = ["//closure/goog/i18n/uchar:remotenamefetcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/i18n:uchar",
        "//closure/goog/i18n/uchar:namefetcher",
        "//closure/goog/log",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)
