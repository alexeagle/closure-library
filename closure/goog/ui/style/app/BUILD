load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":buttonrenderer",
        ":menubuttonrenderer",
        ":primaryactionbuttonrenderer",
    ],
)

closure_js_library(
    name = "buttonrenderer",
    srcs = ["buttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["menubuttonrenderer.js"],
    lenient = True,
    deps = [
        ":buttonrenderer",
        "//closure/goog:base",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menurenderer",
    ],
)

closure_js_library(
    name = "primaryactionbuttonrenderer",
    srcs = ["primaryactionbuttonrenderer.js"],
    lenient = True,
    deps = [
        ":buttonrenderer",
        "//closure/goog:base",
        "//closure/goog/ui:button",
        "//closure/goog/ui:registry",
    ],
)

css_library(
    name = "all_controls_css",
    srcs = [],
    compatible_with = [],
    deps_mgmt = "legacy",
    deps = [
        ":button_css",
        ":menubutton_css",
        ":pillbutton_css",
        ":primaryactionbutton_css",
    ],
)

css_library(
    name = "button_css",
    srcs = [],
    compatible_with = [],
    deps_mgmt = "legacy",
    deps = ["//webutil/css/legacy/fastui/app:button"],
)

css_library(
    name = "menubutton_css",
    srcs = [],
    compatible_with = [],
    deps_mgmt = "legacy",
    deps = ["//webutil/css/legacy/fastui/app:menubutton"],
)

css_library(
    name = "pillbutton_css",
    srcs = [],
    compatible_with = [],
    deps_mgmt = "legacy",
    deps = ["//webutil/css/legacy/fastui/app:pillbutton"],
)

css_library(
    name = "primaryactionbutton_css",
    srcs = [],
    compatible_with = [],
    deps_mgmt = "legacy",
    deps = ["//webutil/css/legacy/fastui/app:primaryactionbutton"],
)
