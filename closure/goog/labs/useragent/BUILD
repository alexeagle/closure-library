package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":browser",
        ":device",
        ":engine",
        ":platform",
        ":util",
        ":verifier",
    ],
)

closure_js_library(
    name = "browser",
    srcs = ["//closure/goog/labs/useragent:browser.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/object",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "device",
    srcs = ["//closure/goog/labs/useragent:device.js"],
    lenient = True,
    deps = ["//closure/goog/labs/useragent:util"],
)

closure_js_library(
    name = "engine",
    srcs = ["//closure/goog/labs/useragent:engine.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "platform",
    srcs = ["//closure/goog/labs/useragent:platform.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:util",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "test_agents",
    testonly = True,
    srcs = ["//closure/goog/labs/useragent:test_agents.js"],
    lenient = True,
)

closure_js_library(
    name = "util",
    srcs = ["//closure/goog/labs/useragent:util.js"],
    lenient = True,
    deps = ["//closure/goog/string:internal"],
)

closure_js_library(
    name = "verifier",
    srcs = ["//closure/goog/labs/useragent:verifier.js"],
    lenient = True,
)
