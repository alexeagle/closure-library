package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":announcer",
        ":aria",
        ":attributes",
        ":datatables",
        ":roles",
    ],
)

closure_js_library(
    name = "announcer",
    srcs = ["//closure/goog/a11y/aria:announcer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "aria",
    srcs = ["//closure/goog/a11y/aria:aria.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:datatables",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "attributes",
    srcs = ["//closure/goog/a11y/aria:attributes.js"],
    lenient = True,
)

closure_js_library(
    name = "datatables",
    srcs = ["//closure/goog/a11y/aria:datatables.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "roles",
    srcs = ["//closure/goog/a11y/aria:roles.js"],
    lenient = True,
)
