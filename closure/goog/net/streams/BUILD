package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":base64pbstreamparser",
        ":base64streamdecoder",
        ":jsonstreamparser",
        ":nodereadablestream",
        ":pbjsonstreamparser",
        ":pbstreamparser",
        ":streamfactory",
        ":streamparser",
        ":utils",
        ":xhrnodereadablestream",
        ":xhrstreamreader",
    ],
)

closure_js_library(
    name = "base64pbstreamparser",
    srcs = ["//closure/goog/net/streams:base64pbstreamparser.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net/streams:base64streamdecoder",
        "//closure/goog/net/streams:pbstreamparser",
        "//closure/goog/net/streams:streamparser",
    ],
)

closure_js_library(
    name = "base64streamdecoder",
    srcs = ["//closure/goog/net/streams:base64streamdecoder.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt:base64",
    ],
)

closure_js_library(
    name = "jsonstreamparser",
    srcs = ["//closure/goog/net/streams:jsonstreamparser.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net/streams:streamparser",
        "//closure/goog/net/streams:utils",
    ],
)

closure_js_library(
    name = "nodereadablestream",
    srcs = ["//closure/goog/net/streams:nodereadablestream.js"],
    lenient = True,
)

closure_js_library(
    name = "pbjsonstreamparser",
    srcs = ["//closure/goog/net/streams:pbjsonstreamparser.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net/streams:jsonstreamparser",
        "//closure/goog/net/streams:streamparser",
        "//closure/goog/net/streams:utils",
    ],
)

closure_js_library(
    name = "pbstreamparser",
    srcs = ["//closure/goog/net/streams:pbstreamparser.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net/streams:streamparser",
    ],
)

closure_js_library(
    name = "streamfactory",
    srcs = ["//closure/goog/net/streams:streamfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net/streams:xhrnodereadablestream",
        "//closure/goog/net/streams:xhrstreamreader",
    ],
)

closure_js_library(
    name = "streamparser",
    srcs = ["//closure/goog/net/streams:streamparser.js"],
    lenient = True,
)

closure_js_library(
    name = "utils",
    srcs = ["//closure/goog/net/streams:utils.js"],
    lenient = True,
)

closure_js_library(
    name = "xhrnodereadablestream",
    srcs = ["//closure/goog/net/streams:xhrnodereadablestream.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/log",
        "//closure/goog/net/streams:nodereadablestream",
        "//closure/goog/net/streams:xhrstreamreader",
    ],
)

closure_js_library(
    name = "xhrstreamreader",
    srcs = ["//closure/goog/net/streams:xhrstreamreader.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/net/streams:base64pbstreamparser",
        "//closure/goog/net/streams:jsonstreamparser",
        "//closure/goog/net/streams:pbjsonstreamparser",
        "//closure/goog/net/streams:pbstreamparser",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)
