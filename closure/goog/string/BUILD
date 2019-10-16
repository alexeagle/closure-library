package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":const",
        ":internal",
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
    srcs = ["//closure/goog/string:const.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "internal",
    srcs = ["//closure/goog/string:internal.js"],
    lenient = True,
)

closure_js_library(
    name = "linkify",
    srcs = ["//closure/goog/string:linkify.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "newlines",
    srcs = ["//closure/goog/string:newlines.js"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

closure_js_library(
    name = "parser",
    srcs = ["//closure/goog/string:parser.js"],
    lenient = True,
)

closure_js_library(
    name = "path",
    srcs = ["//closure/goog/string:path.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "string",
    srcs = ["//closure/goog/string:string.js"],
    lenient = True,
    deps = ["//closure/goog/string:internal"],
)

closure_js_library(
    name = "stringbuffer",
    srcs = ["//closure/goog/string:stringbuffer.js"],
    lenient = True,
)

closure_js_library(
    name = "stringformat",
    srcs = ["//closure/goog/string:stringformat.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "stringifier",
    srcs = ["//closure/goog/string:stringifier.js"],
    lenient = True,
)

closure_js_library(
    name = "typedstring",
    srcs = ["//closure/goog/string:typedstring.js"],
    lenient = True,
)
