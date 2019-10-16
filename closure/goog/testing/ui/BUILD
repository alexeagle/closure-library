package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "rendererasserts",
    testonly = True,
    srcs = ["//closure/goog/testing/ui:rendererasserts.js"],
    lenient = True,
    deps = [
        "//closure/goog/testing:asserts",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "rendererharness",
    testonly = True,
    srcs = ["//closure/goog/testing/ui:rendererharness.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom:nodetype",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:dom",
        "//closure/goog/ui:control",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "style",
    testonly = True,
    srcs = ["//closure/goog/testing/ui:style.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/testing:asserts",
    ],
)
