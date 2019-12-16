load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files(["string.js"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":const",
        ":linkify",
        ":newlines",
        ":parser",
        ":path",
        ":string",
        ":stringbuffer",
        ":stringformat",
        ":stringifier",
        ":typedstring",
    ],
)

closure_js_library(
    name = "const",
    srcs = ["const.js"],
    lenient = True,
    deps = [
        ":typedstring",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "internal",
    srcs = ["internal.js"],
    lenient = True,
    visibility = [
        "//closure/goog:__pkg__",
        "//closure/goog/bin/sizetests:__pkg__",
        "//closure/goog/dom:__pkg__",
        "//closure/goog/html:__pkg__",
        "//closure/goog/labs/useragent:__pkg__",
    ],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "linkify",
    srcs = ["linkify.js"],
    lenient = True,
    deps = [
        ":string",
        "//closure/goog:base",
        "//closure/goog/html:safehtml",
    ],
)

closure_js_library(
    name = "newlines",
    srcs = ["newlines.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "parser",
    srcs = ["parser.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "path",
    srcs = ["path.js"],
    lenient = True,
    deps = [
        ":string",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "string",
    srcs = ["string.js"],
    lenient = True,
    deps = [
        ":const",
        ":internal",
        "//closure/goog:base",
        "//closure/goog/dom:safe",
        "//closure/goog/html:uncheckedconversions",
    ],
)

closure_js_library(
    name = "stringbuffer",
    srcs = ["stringbuffer.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "stringformat",
    srcs = ["stringformat.js"],
    lenient = True,
    deps = [
        ":string",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "stringifier",
    srcs = ["stringifier.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "typedstring",
    srcs = ["typedstring.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
