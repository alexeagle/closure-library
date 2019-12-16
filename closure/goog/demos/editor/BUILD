load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = [
        "avoid_dep",
        "genjsdeps",
    ],
    exports = [
        ":deps",
        ":helloworld",
        ":helloworlddialog",
        ":helloworlddialogplugin",
    ],
)

closure_js_library(
    name = "deps",
    srcs = ["deps.js"],
    lenient = True,
    tags = ["genjsdeps"],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "helloworld",
    srcs = ["helloworld.js"],
    lenient = True,
    tags = ["genjsdeps"],
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:plugin",
    ],
)

closure_js_library(
    name = "helloworlddialog",
    srcs = ["helloworlddialog.js"],
    lenient = True,
    tags = ["genjsdeps"],
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/string",
        "//closure/goog/ui/editor:abstractdialog",
    ],
)

closure_js_library(
    name = "helloworlddialogplugin",
    srcs = ["helloworlddialogplugin.js"],
    lenient = True,
    tags = ["genjsdeps"],
    deps = [
        ":helloworlddialog",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:range",
        "//closure/goog/editor/plugins:abstractdialogplugin",
        "//closure/goog/functions",
        "//closure/goog/ui/editor:abstractdialog",
    ],
)
