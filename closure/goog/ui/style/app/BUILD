package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":buttonrenderer",
        ":menubuttonrenderer",
        ":primaryactionbuttonrenderer",
    ],
)

closure_js_library(
    name = "buttonrenderer",
    srcs = ["//closure/goog/ui/style/app:buttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:button",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:custombuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "menubuttonrenderer",
    srcs = ["//closure/goog/ui/style/app:menubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menurenderer",
        "//closure/goog/ui/style/app:buttonrenderer",
    ],
)

closure_js_library(
    name = "primaryactionbuttonrenderer",
    srcs = ["//closure/goog/ui/style/app:primaryactionbuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:button",
        "//closure/goog/ui:registry",
        "//closure/goog/ui/style/app:buttonrenderer",
    ],
)
