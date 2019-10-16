package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":affinetransform",
        ":bezier",
        ":box",
        ":coordinate",
        ":coordinate3",
        ":exponentialbackoff",
        ":integer",
        ":irect",
        ":line",
        ":long",
        ":math",
        ":matrix",
        ":path",
        ":paths",
        ":range",
        ":rangeset",
        ":rect",
        ":size",
        ":tdma",
        ":vec2",
        ":vec3",
        "//closure/goog/math/interpolator:all_js",
    ],
)

closure_js_library(
    name = "affinetransform",
    srcs = ["//closure/goog/math:affinetransform.js"],
    lenient = True,
)

closure_js_library(
    name = "bezier",
    srcs = ["//closure/goog/math:bezier.js"],
    lenient = True,
    deps = [
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "box",
    srcs = ["//closure/goog/math:box.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "coordinate",
    srcs = ["//closure/goog/math:coordinate.js"],
    lenient = True,
    deps = ["//closure/goog/math"],
)

closure_js_library(
    name = "coordinate3",
    srcs = ["//closure/goog/math:coordinate3.js"],
    lenient = True,
)

closure_js_library(
    name = "exponentialbackoff",
    srcs = ["//closure/goog/math:exponentialbackoff.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "integer",
    srcs = ["//closure/goog/math:integer.js"],
    lenient = True,
)

closure_js_library(
    name = "irect",
    srcs = ["//closure/goog/math:irect.js"],
    lenient = True,
)

closure_js_library(
    name = "line",
    srcs = ["//closure/goog/math:line.js"],
    lenient = True,
    deps = [
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "long",
    srcs = ["//closure/goog/math:long.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/reflect",
    ],
)

closure_js_library(
    name = "math",
    srcs = ["//closure/goog/math:math.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "matrix",
    srcs = ["//closure/goog/math:matrix.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "path",
    srcs = ["//closure/goog/math:path.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math",
        "//closure/goog/math:affinetransform",
    ],
)

closure_js_library(
    name = "paths",
    srcs = ["//closure/goog/math:paths.js"],
    lenient = True,
    deps = [
        "//closure/goog/math:coordinate",
        "//closure/goog/math:path",
    ],
)

closure_js_library(
    name = "range",
    srcs = ["//closure/goog/math:range.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "rangeset",
    srcs = ["//closure/goog/math:rangeset.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/iter",
        "//closure/goog/math:range",
    ],
)

closure_js_library(
    name = "rect",
    srcs = ["//closure/goog/math:rect.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:irect",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "size",
    srcs = ["//closure/goog/math:size.js"],
    lenient = True,
)

closure_js_library(
    name = "tdma",
    srcs = ["//closure/goog/math:tdma.js"],
    lenient = True,
)

closure_js_library(
    name = "vec2",
    srcs = ["//closure/goog/math:vec2.js"],
    lenient = True,
    deps = [
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "vec3",
    srcs = ["//closure/goog/math:vec3.js"],
    lenient = True,
    deps = [
        "//closure/goog/math",
        "//closure/goog/math:coordinate3",
    ],
)
