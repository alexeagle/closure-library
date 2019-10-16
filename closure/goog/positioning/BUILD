package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":absoluteposition",
        ":abstractposition",
        ":anchoredposition",
        ":anchoredviewportposition",
        ":clientposition",
        ":menuanchoredposition",
        ":positioning",
        ":viewportclientposition",
        ":viewportposition",
    ],
)

closure_js_library(
    name = "absoluteposition",
    srcs = ["//closure/goog/positioning:absoluteposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
    ],
)

closure_js_library(
    name = "abstractposition",
    srcs = ["//closure/goog/positioning:abstractposition.js"],
    lenient = True,
)

closure_js_library(
    name = "anchoredposition",
    srcs = ["//closure/goog/positioning:anchoredposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
    ],
)

closure_js_library(
    name = "anchoredviewportposition",
    srcs = ["//closure/goog/positioning:anchoredviewportposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
    ],
)

closure_js_library(
    name = "clientposition",
    srcs = ["//closure/goog/positioning:clientposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "menuanchoredposition",
    srcs = ["//closure/goog/positioning:menuanchoredposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredviewportposition",
    ],
)

closure_js_library(
    name = "positioning",
    srcs = ["//closure/goog/positioning:positioning.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
    ],
)

closure_js_library(
    name = "viewportclientposition",
    srcs = ["//closure/goog/positioning:viewportclientposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:clientposition",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "viewportposition",
    srcs = ["//closure/goog/positioning:viewportposition.js"],
    lenient = True,
    deps = [
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/style",
    ],
)
