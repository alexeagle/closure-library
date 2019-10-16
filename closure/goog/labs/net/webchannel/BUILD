package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":basetestchannel",
        ":channel",
        ":channelrequest",
        ":connectionstate",
        ":environment",
        ":forwardchannelrequestpool",
        ":netutils",
        ":requeststats",
        ":webchannelbase",
        ":webchannelbasetransport",
        ":webchanneldebug",
        ":wire",
        ":wirev8",
    ],
)

closure_js_library(
    name = "basetestchannel",
    srcs = ["//closure/goog/labs/net/webchannel:basetestchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/labs/net/webchannel:channel",
        "//closure/goog/labs/net/webchannel:channelrequest",
        "//closure/goog/labs/net/webchannel:requeststats",
        "//closure/goog/labs/net/webchannel:webchanneldebug",
    ],
)

closure_js_library(
    name = "channel",
    srcs = ["//closure/goog/labs/net/webchannel:channel.js"],
    lenient = True,
)

closure_js_library(
    name = "channelrequest",
    srcs = ["//closure/goog/labs/net/webchannel:channelrequest.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:throttle",
        "//closure/goog/events:eventhandler",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/labs/net/webchannel:channel",
        "//closure/goog/labs/net/webchannel:environment",
        "//closure/goog/labs/net/webchannel:requeststats",
        "//closure/goog/labs/net/webchannel:webchanneldebug",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "connectionstate",
    srcs = ["//closure/goog/labs/net/webchannel:connectionstate.js"],
    lenient = True,
)

closure_js_library(
    name = "environment",
    srcs = ["//closure/goog/labs/net/webchannel:environment.js"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

closure_js_library(
    name = "forwardchannelrequestpool",
    srcs = ["//closure/goog/labs/net/webchannel:forwardchannelrequestpool.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/labs/net/webchannel:channelrequest",
        "//closure/goog/labs/net/webchannel:wire",
        "//closure/goog/string",
        "//closure/goog/structs:set",
    ],
)

closure_js_library(
    name = "netutils",
    srcs = ["//closure/goog/labs/net/webchannel:netutils.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/net/webchannel:webchanneldebug",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "requeststats",
    srcs = ["//closure/goog/labs/net/webchannel:requeststats.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "webchannelbase",
    srcs = ["//closure/goog/labs/net/webchannel:webchannelbase.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/async:run",
        "//closure/goog/debug:formatter",
        "//closure/goog/json",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/labs/net/webchannel:basetestchannel",
        "//closure/goog/labs/net/webchannel:channel",
        "//closure/goog/labs/net/webchannel:channelrequest",
        "//closure/goog/labs/net/webchannel:connectionstate",
        "//closure/goog/labs/net/webchannel:forwardchannelrequestpool",
        "//closure/goog/labs/net/webchannel:netutils",
        "//closure/goog/labs/net/webchannel:requeststats",
        "//closure/goog/labs/net/webchannel:webchanneldebug",
        "//closure/goog/labs/net/webchannel:wire",
        "//closure/goog/labs/net/webchannel:wirev8",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttpfactory",
        "//closure/goog/net/rpc:httpcors",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "webchannelbasetransport",
    srcs = ["//closure/goog/labs/net/webchannel:webchannelbasetransport.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/labs/net:webchanneltransport",
        "//closure/goog/labs/net/webchannel:channelrequest",
        "//closure/goog/labs/net/webchannel:webchannelbase",
        "//closure/goog/labs/net/webchannel:wire",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:path",
    ],
)

closure_js_library(
    name = "webchanneldebug",
    srcs = ["//closure/goog/labs/net/webchannel:webchanneldebug.js"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "wire",
    srcs = ["//closure/goog/labs/net/webchannel:wire.js"],
    lenient = True,
)

closure_js_library(
    name = "wirev8",
    srcs = ["//closure/goog/labs/net/webchannel:wirev8.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/json",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/labs/net/webchannel:wire",
        "//closure/goog/structs",
    ],
)
