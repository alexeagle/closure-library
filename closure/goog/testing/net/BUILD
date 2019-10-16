package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "mockiframeio",
    testonly = True,
    srcs = ["//closure/goog/testing/net:mockiframeio.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:iframeio",
        "//closure/goog/testing:testqueue",
    ],
)

closure_js_library(
    name = "xhrio",
    testonly = True,
    srcs = ["//closure/goog/testing/net:xhrio.js"],
    lenient = True,
    deps = [
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
    testonly = True,
    srcs = ["//closure/goog/testing/net:xhriopool.js"],
    lenient = True,
    deps = [
        "//closure/goog/net:xhriopool",
        "//closure/goog/testing/net:xhrio",
    ],
)
