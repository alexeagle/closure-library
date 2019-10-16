package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":pubsub",
        ":topicid",
        ":typedpubsub",
    ],
)

closure_js_library(
    name = "pubsub",
    srcs = ["//closure/goog/pubsub:pubsub.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "topicid",
    srcs = ["//closure/goog/pubsub:topicid.js"],
    lenient = True,
)

closure_js_library(
    name = "typedpubsub",
    srcs = ["//closure/goog/pubsub:typedpubsub.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/pubsub",
    ],
)
