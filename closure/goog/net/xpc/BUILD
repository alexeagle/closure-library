load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":crosspagechannel",
        ":crosspagechannelrole",
        ":directtransport",
        ":iframepollingtransport",
        ":nativemessagingtransport",
        ":relay",
        ":transport",
        ":xpc",
    ],
)

closure_js_library(
    name = "crosspagechannel",
    srcs = ["crosspagechannel.js"],
    lenient = True,
    deps = [
        ":crosspagechannelrole",
        ":directtransport",
        ":nativemessagingtransport",
        ":xpc",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/async:delay",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/messaging:abstractchannel",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "crosspagechannelrole",
    srcs = ["crosspagechannelrole.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "directtransport",
    srcs = ["directtransport.js"],
    lenient = True,
    deps = [
        ":crosspagechannelrole",
        ":transport",
        ":xpc",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "iframepollingtransport",
    srcs = ["iframepollingtransport.js"],
    lenient = True,
    deps = [
        ":crosspagechannelrole",
        ":transport",
        ":xpc",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/log",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "nativemessagingtransport",
    srcs = ["nativemessagingtransport.js"],
    lenient = True,
    deps = [
        ":crosspagechannelrole",
        ":transport",
        ":xpc",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "relay",
    srcs = ["relay.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "transport",
    srcs = ["transport.js"],
    lenient = True,
    deps = [
        ":xpc",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "xpc",
    srcs = ["xpc.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/log",
    ],
)
