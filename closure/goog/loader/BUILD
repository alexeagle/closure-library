package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractmodulemanager",
        ":activemodulemanager",
    ],
)

closure_js_library(
    name = "abstractmodulemanager",
    srcs = ["//closure/goog/loader:abstractmodulemanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/module:abstractmoduleloader",
        "//closure/goog/module:moduleinfo",
        "//closure/goog/module:moduleloadcallback",
    ],
)

closure_js_library(
    name = "activemodulemanager",
    srcs = ["//closure/goog/loader:activemodulemanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/loader:abstractmodulemanager",
    ],
)
