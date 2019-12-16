load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["datamanager.js"],
    lenient = True,
    deps = [
        ":datasource",
        ":expr",
        "//closure/goog:base",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "datasource",
    srcs = ["datasource.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "expr",
    srcs = ["expr.js"],
    lenient = True,
    deps = [
        ":datasource",
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "fastdatanode",
    srcs = ["fastdatanode.js"],
    lenient = True,
    deps = [
        ":datamanager",
        ":datasource",
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsdatasource",
    srcs = ["jsdatasource.js"],
    lenient = True,
    deps = [
        ":datamanager",
        ":datasource",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "jsondatasource",
    srcs = ["jsondatasource.js"],
    lenient = True,
    deps = [
        ":datamanager",
        ":datasource",
        ":jsdatasource",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "jsxmlhttpdatasource",
    srcs = ["jsxmlhttpdatasource.js"],
    lenient = True,
    deps = [
        ":datamanager",
        ":datasource",
        ":fastdatanode",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/log",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "xmldatasource",
    srcs = ["xmldatasource.js"],
    lenient = True,
    deps = [
        ":datamanager",
        ":datasource",
        "//closure/goog:base",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:xml",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
        "//closure/goog/string",
        "//closure/goog/uri",
    ],
)
