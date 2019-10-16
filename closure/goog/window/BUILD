package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":window"],
)

closure_js_library(
    name = "window",
    srcs = ["//closure/goog/window:window.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)
