load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["abstractrange.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["browserrange.js"],
    lenient = True,
    deps = [
        ":geckorange",
        ":ierange",
        ":operarange",
        ":w3crange",
        ":webkitrange",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:browserfeature",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "geckorange",
    srcs = ["geckorange.js"],
    lenient = True,
    deps = [
        ":w3crange",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "ierange",
    srcs = ["ierange.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/log",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "operarange",
    srcs = ["operarange.js"],
    lenient = True,
    deps = [
        ":w3crange",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "w3crange",
    srcs = ["w3crange.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "webkitrange",
    srcs = ["webkitrange.js"],
    lenient = True,
    deps = [
        ":w3crange",
        "//closure/goog:base",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/useragent",
    ],
)
