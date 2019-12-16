load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["abstractpattern.js"],
    lenient = True,
    deps = [
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/dom:tagiterator",
    ],
)

closure_js_library(
    name = "allchildren",
    srcs = ["allchildren.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "childmatches",
    srcs = ["childmatches.js"],
    lenient = True,
    deps = [
        ":allchildren",
        ":pattern",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "endtag",
    srcs = ["endtag.js"],
    lenient = True,
    deps = [
        ":tag",
        "//closure/goog:base",
        "//closure/goog/dom:tagiterator",
    ],
)

closure_js_library(
    name = "fulltag",
    srcs = ["fulltag.js"],
    lenient = True,
    deps = [
        ":pattern",
        ":starttag",
        ":tag",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "matcher",
    srcs = ["matcher.js"],
    lenient = True,
    deps = [
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "nodetype",
    srcs = ["nodetype.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "pattern",
    srcs = ["pattern.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "repeat",
    srcs = ["repeat.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/dom:nodetype",
    ],
)

closure_js_library(
    name = "sequence",
    srcs = ["sequence.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/dom:nodetype",
    ],
)

closure_js_library(
    name = "starttag",
    srcs = ["starttag.js"],
    lenient = True,
    deps = [
        ":tag",
        "//closure/goog:base",
        "//closure/goog/dom:tagiterator",
    ],
)

closure_js_library(
    name = "tag",
    srcs = ["tag.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "text",
    srcs = ["text.js"],
    lenient = True,
    deps = [
        ":abstractpattern",
        ":pattern",
        "//closure/goog:base",
        "//closure/goog/dom:nodetype",
    ],
)
