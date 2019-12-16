load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":abstractmodulemanager",
        ":activemodulemanager",
    ],
)

closure_js_library(
    name = "abstractmodulemanager",
    srcs = ["abstractmodulemanager.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/module:abstractmoduleloader",
        "//closure/goog/module:moduleinfo",
        "//closure/goog/module:moduleloadcallback",
    ],
)

closure_js_library(
    name = "activemodulemanager",
    srcs = ["activemodulemanager.js"],
    lenient = True,
    deps = [
        ":abstractmodulemanager",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)
