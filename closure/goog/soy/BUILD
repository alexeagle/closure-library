package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":data",
        ":renderer",
        ":soy",
    ],
)

closure_js_library(
    name = "data",
    srcs = ["//closure/goog/soy:data.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/i18n:bidi",
        "//closure/goog/string:const",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "renderer",
    srcs = ["//closure/goog/soy:renderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/soy",
        "//closure/goog/soy:data",
    ],
)

closure_js_library(
    name = "soy",
    srcs = ["//closure/goog/soy:soy.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/soy:data",
        "//closure/goog/string",
    ],
)
