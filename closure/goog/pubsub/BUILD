load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":pubsub",
        ":topicid",
        ":typedpubsub",
    ],
)

closure_js_library(
    name = "pubsub",
    srcs = ["pubsub.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "topicid",
    srcs = ["topicid.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "typedpubsub",
    srcs = ["typedpubsub.js"],
    lenient = True,
    deps = [
        ":pubsub",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)
