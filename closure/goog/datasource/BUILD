package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":datamanager",
        ":datasource",
        ":expr",
        ":fastdatanode",
        ":jsdatasource",
        ":jsondatasource",
        ":jsxmlhttpdatasource",
        ":xmldatasource",
    ],
)

closure_js_library(
    name = "datamanager",
    srcs = ["//closure/goog/datasource:datamanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:expr",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "datasource",
    srcs = ["//closure/goog/datasource:datasource.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "expr",
    srcs = ["//closure/goog/datasource:expr.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "fastdatanode",
    srcs = ["//closure/goog/datasource:fastdatanode.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:datamanager",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsdatasource",
    srcs = ["//closure/goog/datasource:jsdatasource.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:datamanager",
    ],
)

closure_js_library(
    name = "jsondatasource",
    srcs = ["//closure/goog/datasource:jsondatasource.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:datamanager",
        "//closure/goog/datasource:jsdatasource",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "jsxmlhttpdatasource",
    srcs = ["//closure/goog/datasource:jsxmlhttpdatasource.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:datamanager",
        "//closure/goog/datasource:fastdatanode",
        "//closure/goog/events",
        "//closure/goog/log",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "xmldatasource",
    srcs = ["//closure/goog/datasource:xmldatasource.js"],
    lenient = True,
    deps = [
        "//closure/goog/datasource",
        "//closure/goog/datasource:datamanager",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:xml",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
        "//closure/goog/string",
        "//closure/goog/uri",
    ],
)
