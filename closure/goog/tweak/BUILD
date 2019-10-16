package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":entries",
        ":registry",
        ":tweak",
        ":tweakui",
    ],
)

closure_js_library(
    name = "entries",
    srcs = ["//closure/goog/tweak:entries.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "registry",
    srcs = ["//closure/goog/tweak:registry.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/tweak:entries",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "testhelpers",
    testonly = True,
    srcs = ["//closure/goog/tweak:testhelpers.js"],
    lenient = True,
    deps = [
        "//closure/goog/tweak",
        "//closure/goog/tweak:entries",
        "//closure/goog/tweak:registry",
    ],
)

closure_js_library(
    name = "tweak",
    srcs = ["//closure/goog/tweak:tweak.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/tweak:entries",
        "//closure/goog/tweak:registry",
    ],
)

closure_js_library(
    name = "tweakui",
    srcs = ["//closure/goog/tweak:tweakui.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/tweak",
        "//closure/goog/tweak:entries",
        "//closure/goog/ui:zippy",
        "//closure/goog/useragent",
    ],
)
