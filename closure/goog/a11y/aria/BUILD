load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["announcer.js"],
    lenient = True,
    deps = [
        ":aria",
        ":attributes",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "aria",
    srcs = ["aria.js"],
    lenient = True,
    deps = [
        ":attributes",
        ":datatables",
        ":roles",
        "//closure/goog:base",
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
    srcs = ["attributes.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "datatables",
    srcs = ["datatables.js"],
    lenient = True,
    deps = [
        ":attributes",
        "//closure/goog:base",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "roles",
    srcs = ["roles.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
