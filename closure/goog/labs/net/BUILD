package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":image",
        ":webchannel",
        ":webchanneltransport",
        ":webchanneltransportfactory",
        ":xhr",
        "//closure/goog/labs/net/webchannel:all_js",
    ],
)

closure_js_library(
    name = "image",
    srcs = ["//closure/goog/labs/net:image.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safeurl",
        "//closure/goog/net:eventtype",
        "//closure/goog/promise",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "webchannel",
    srcs = ["//closure/goog/labs/net:webchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:listenable",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

closure_js_library(
    name = "webchanneltransport",
    srcs = ["//closure/goog/labs/net:webchanneltransport.js"],
    lenient = True,
)

closure_js_library(
    name = "webchanneltransportfactory",
    srcs = ["//closure/goog/labs/net:webchanneltransportfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/functions",
        "//closure/goog/labs/net/webchannel:webchannelbasetransport",
    ],
)

closure_js_library(
    name = "xhr",
    srcs = ["//closure/goog/labs/net:xhr.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/string",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)
