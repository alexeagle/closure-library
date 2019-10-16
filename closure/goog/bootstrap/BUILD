package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "nodejs",
    srcs = ["//closure/goog/bootstrap:nodejs.js"],
    lenient = True,
    no_closure_library = True,
)

closure_js_library(
    name = "webworkers",
    srcs = ["//closure/goog/bootstrap:webworkers.js"],
    lenient = True,
    no_closure_library = True,
)
