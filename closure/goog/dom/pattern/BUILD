package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractpattern",
        ":allchildren",
        ":childmatches",
        ":endtag",
        ":fulltag",
        ":matcher",
        ":nodetype",
        ":pattern",
        ":repeat",
        ":sequence",
        ":starttag",
        ":tag",
        ":text",
        "//closure/goog/dom/pattern/callback:all_js",
    ],
)

closure_js_library(
    name = "abstractpattern",
    srcs = ["//closure/goog/dom/pattern:abstractpattern.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom/pattern",
    ],
)

closure_js_library(
    name = "allchildren",
    srcs = ["//closure/goog/dom/pattern:allchildren.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
    ],
)

closure_js_library(
    name = "childmatches",
    srcs = ["//closure/goog/dom/pattern:childmatches.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:allchildren",
    ],
)

closure_js_library(
    name = "endtag",
    srcs = ["//closure/goog/dom/pattern:endtag.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom/pattern:tag",
    ],
)

closure_js_library(
    name = "fulltag",
    srcs = ["//closure/goog/dom/pattern:fulltag.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:starttag",
        "//closure/goog/dom/pattern:tag",
    ],
)

closure_js_library(
    name = "matcher",
    srcs = ["//closure/goog/dom/pattern:matcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom/pattern",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "nodetype",
    srcs = ["//closure/goog/dom/pattern:nodetype.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
    ],
)

closure_js_library(
    name = "pattern",
    srcs = ["//closure/goog/dom/pattern:pattern.js"],
    lenient = True,
)

closure_js_library(
    name = "repeat",
    srcs = ["//closure/goog/dom/pattern:repeat.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
    ],
)

closure_js_library(
    name = "sequence",
    srcs = ["//closure/goog/dom/pattern:sequence.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
    ],
)

closure_js_library(
    name = "starttag",
    srcs = ["//closure/goog/dom/pattern:starttag.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom/pattern:tag",
    ],
)

closure_js_library(
    name = "tag",
    srcs = ["//closure/goog/dom/pattern:tag.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "text",
    srcs = ["//closure/goog/dom/pattern:text.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom/pattern",
        "//closure/goog/dom/pattern:abstractpattern",
    ],
)
