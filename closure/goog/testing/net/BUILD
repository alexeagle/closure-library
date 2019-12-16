load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files(["xhrio.js"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":mockiframeio",
        ":xhrio",
        ":xhriopool",
    ],
)

closure_js_library(
    name = "mockiframeio",
    srcs = ["mockiframeio.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:iframeio",
        "//closure/goog/testing:testqueue",
    ],
)

closure_js_library(
    name = "xhrio",
    srcs = ["xhrio.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom:xml",
        "//closure/goog/events",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/object",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
        "//closure/goog/testing:testqueue",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "xhriopool",
    srcs = ["xhriopool.js"],
    lenient = True,
    deps = [
        ":xhrio",
        "//closure/goog:base",
        "//closure/goog/net:xhriopool",
    ],
)
