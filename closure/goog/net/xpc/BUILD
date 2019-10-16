package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":crosspagechannel",
        ":crosspagechannelrole",
        ":directtransport",
        ":frameelementmethodtransport",
        ":iframepollingtransport",
        ":iframerelaytransport",
        ":nativemessagingtransport",
        ":nixtransport",
        ":relay",
        ":transport",
        ":xpc",
    ],
)

closure_js_library(
    name = "crosspagechannel",
    srcs = ["//closure/goog/net/xpc:crosspagechannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:delay",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/messaging:abstractchannel",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:directtransport",
        "//closure/goog/net/xpc:frameelementmethodtransport",
        "//closure/goog/net/xpc:iframerelaytransport",
        "//closure/goog/net/xpc:nativemessagingtransport",
        "//closure/goog/net/xpc:nixtransport",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "crosspagechannelrole",
    srcs = ["//closure/goog/net/xpc:crosspagechannelrole.js"],
    lenient = True,
)

closure_js_library(
    name = "directtransport",
    srcs = ["//closure/goog/net/xpc:directtransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:transport",
        "//closure/goog/object",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "frameelementmethodtransport",
    srcs = ["//closure/goog/net/xpc:frameelementmethodtransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:transport",
    ],
)

closure_js_library(
    name = "iframepollingtransport",
    srcs = ["//closure/goog/net/xpc:iframepollingtransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:transport",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "iframerelaytransport",
    srcs = ["//closure/goog/net/xpc:iframerelaytransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:transport",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "nativemessagingtransport",
    srcs = ["//closure/goog/net/xpc:nativemessagingtransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:transport",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "nixtransport",
    srcs = ["//closure/goog/net/xpc:nixtransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/log",
        "//closure/goog/net/xpc",
        "//closure/goog/net/xpc:crosspagechannelrole",
        "//closure/goog/net/xpc:transport",
        "//closure/goog/reflect",
    ],
)

closure_js_library(
    name = "relay",
    srcs = ["//closure/goog/net/xpc:relay.js"],
    lenient = True,
)

closure_js_library(
    name = "transport",
    srcs = ["//closure/goog/net/xpc:transport.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/net/xpc",
    ],
)

closure_js_library(
    name = "xpc",
    srcs = ["//closure/goog/net/xpc:xpc.js"],
    lenient = True,
    deps = ["//closure/goog/log"],
)
