load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["absoluteposition.js"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog:base",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "abstractposition",
    srcs = ["abstractposition.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "anchoredposition",
    srcs = ["anchoredposition.js"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "anchoredviewportposition",
    srcs = ["anchoredviewportposition.js"],
    lenient = True,
    deps = [
        ":anchoredposition",
        ":positioning",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "clientposition",
    srcs = ["clientposition.js"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "menuanchoredposition",
    srcs = ["menuanchoredposition.js"],
    lenient = True,
    deps = [
        ":anchoredviewportposition",
        ":positioning",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "positioning",
    srcs = ["positioning.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["viewportclientposition.js"],
    lenient = True,
    deps = [
        ":clientposition",
        ":positioning",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "viewportposition",
    srcs = ["viewportposition.js"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog:base",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)
