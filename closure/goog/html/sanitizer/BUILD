package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":attributewhitelist",
        ":csspropertysanitizer",
        ":csssanitizer",
        ":elementweakmap",
        ":htmlsanitizer",
        ":noclobber",
        ":safedomtreeprocessor",
        ":tagblacklist",
        ":tagwhitelist",
        ":unsafe",
    ],
)

closure_js_library(
    name = "attributewhitelist",
    srcs = ["//closure/goog/html/sanitizer:attributewhitelist.js"],
    lenient = True,
)

closure_js_library(
    name = "csspropertysanitizer",
    srcs = ["//closure/goog/html/sanitizer:csspropertysanitizer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:safeurl",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "csssanitizer",
    srcs = ["//closure/goog/html/sanitizer:csssanitizer.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:cssspecificity",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/html/sanitizer:csspropertysanitizer",
        "//closure/goog/html/sanitizer:noclobber",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "elementweakmap",
    srcs = ["//closure/goog/html/sanitizer:elementweakmap.js"],
    lenient = True,
    deps = ["//closure/goog/html/sanitizer:noclobber"],
)

closure_js_library(
    name = "htmlsanitizer",
    srcs = ["//closure/goog/html/sanitizer:htmlsanitizer.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/html/sanitizer:attributewhitelist",
        "//closure/goog/html/sanitizer:csssanitizer",
        "//closure/goog/html/sanitizer:noclobber",
        "//closure/goog/html/sanitizer:safedomtreeprocessor",
        "//closure/goog/html/sanitizer:tagblacklist",
        "//closure/goog/html/sanitizer:tagwhitelist",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "noclobber",
    srcs = ["//closure/goog/html/sanitizer:noclobber.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "safedomtreeprocessor",
    srcs = ["//closure/goog/html/sanitizer:safedomtreeprocessor.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/html/sanitizer:elementweakmap",
        "//closure/goog/html/sanitizer:noclobber",
        "//closure/goog/log",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagblacklist",
    srcs = ["//closure/goog/html/sanitizer:tagblacklist.js"],
    lenient = True,
)

closure_js_library(
    name = "tagwhitelist",
    srcs = ["//closure/goog/html/sanitizer:tagwhitelist.js"],
    lenient = True,
)

closure_js_library(
    name = "unsafe",
    srcs = ["//closure/goog/html/sanitizer:unsafe.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html/sanitizer:htmlsanitizer",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)
