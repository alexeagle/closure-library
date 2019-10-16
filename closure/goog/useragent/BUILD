package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":adobereader",
        ":flash",
        ":iphoto",
        ":jscript",
        ":keyboard",
        ":platform",
        ":product",
        ":product_isversion",
        ":useragent",
    ],
)

closure_js_library(
    name = "adobereader",
    srcs = ["//closure/goog/useragent:adobereader.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "flash",
    srcs = ["//closure/goog/useragent:flash.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "iphoto",
    srcs = ["//closure/goog/useragent:iphoto.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "jscript",
    srcs = ["//closure/goog/useragent:jscript.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "keyboard",
    srcs = ["//closure/goog/useragent:keyboard.js"],
    lenient = True,
    deps = ["//closure/goog/labs/useragent:platform"],
)

closure_js_library(
    name = "platform",
    srcs = ["//closure/goog/useragent:platform.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "product",
    srcs = ["//closure/goog/useragent:product.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "product_isversion",
    srcs = ["//closure/goog/useragent:product_isversion.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/string",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "useragent",
    srcs = ["//closure/goog/useragent:useragent.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/reflect",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "useragenttestutil",
    testonly = True,
    srcs = ["//closure/goog/useragent:useragenttestutil.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/object",
        "//closure/goog/useragent",
        "//closure/goog/useragent:keyboard",
        "//closure/goog/useragent:platform",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)
