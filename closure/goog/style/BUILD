package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":bidi",
        ":cursor",
        ":style",
        ":transform",
        ":transition",
    ],
)

closure_js_library(
    name = "bidi",
    srcs = ["//closure/goog/style:bidi.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:platform",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)

closure_js_library(
    name = "cursor",
    srcs = ["//closure/goog/style:cursor.js"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

closure_js_library(
    name = "style",
    srcs = ["//closure/goog/style:style.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:vendor",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/object",
        "//closure/goog/reflect",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "stylescrollbartester",
    testonly = True,
    srcs = ["//closure/goog/style:stylescrollbartester.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "transform",
    srcs = ["//closure/goog/style:transform.js"],
    lenient = True,
    deps = [
        "//closure/goog/functions",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:coordinate3",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product_isversion",
    ],
)

closure_js_library(
    name = "transition",
    srcs = ["//closure/goog/style:transition.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:vendor",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)
