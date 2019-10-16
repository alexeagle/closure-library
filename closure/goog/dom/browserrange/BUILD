package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractrange",
        ":browserrange",
        ":geckorange",
        ":ierange",
        ":operarange",
        ":w3crange",
        ":webkitrange",
    ],
)

closure_js_library(
    name = "abstractrange",
    srcs = ["//closure/goog/dom/browserrange:abstractrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:textrangeiterator",
        "//closure/goog/iter",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/string:stringbuffer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserrange",
    srcs = ["//closure/goog/dom/browserrange:browserrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:browserfeature",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom/browserrange:geckorange",
        "//closure/goog/dom/browserrange:ierange",
        "//closure/goog/dom/browserrange:operarange",
        "//closure/goog/dom/browserrange:w3crange",
        "//closure/goog/dom/browserrange:webkitrange",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "geckorange",
    srcs = ["//closure/goog/dom/browserrange:geckorange.js"],
    lenient = True,
    deps = ["//closure/goog/dom/browserrange:w3crange"],
)

closure_js_library(
    name = "ierange",
    srcs = ["//closure/goog/dom/browserrange:ierange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom/browserrange:abstractrange",
        "//closure/goog/log",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "operarange",
    srcs = ["//closure/goog/dom/browserrange:operarange.js"],
    lenient = True,
    deps = ["//closure/goog/dom/browserrange:w3crange"],
)

closure_js_library(
    name = "w3crange",
    srcs = ["//closure/goog/dom/browserrange:w3crange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom/browserrange:abstractrange",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "webkitrange",
    srcs = ["//closure/goog/dom/browserrange:webkitrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom/browserrange:w3crange",
        "//closure/goog/useragent",
    ],
)
