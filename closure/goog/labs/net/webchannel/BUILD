load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

package_group(
    name = "internal",
    packages = [
        "//closure/goog",
        "//closure/goog/bin/sizetests/...",
        "//closure/goog/labs/net/webchannel/...",
    ],
)

package_group(
    name = "legacy_users",
    packages =
        [
            "//corp/contactcenter/speakeasy/webchannel",
            "//net/webchannel/client/examples/whiteboard",
        ],
)

closure_js_library(
    name = "webchannel",
    srcs = [],
    lenient = True,
    exports = [
        ":basetestchannel",
        ":webchannelbase",
        ":webchannelbasetransport",
    ],
)

closure_js_library(
    name = "basetestchannel",
    srcs = ["basetestchannel.js"],
    lenient = True,
    deps = [
        ":channel",
        ":channelrequest",
        ":requeststats",
        ":webchanneldebug",
        "//closure/goog:base",
        "//closure/goog/labs/net:webchannel",
    ],
)

closure_js_library(
    name = "channel",
    srcs = ["channel.js"],
    lenient = True,
    visibility = [":internal"],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "channelrequest",
    srcs = ["channelrequest.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        ":channel",
        ":environment",
        ":requeststats",
        ":webchanneldebug",
        "//closure/goog:base",
        "//closure/goog/async:throttle",
        "//closure/goog/events:eventhandler",
        "//closure/goog/labs/net:webchannel",
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
    srcs = ["connectionstate.js"],
    lenient = True,
    visibility = [":internal"],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "environment",
    srcs = ["environment.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "forwardchannelrequestpool",
    srcs = ["forwardchannelrequestpool.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        ":channelrequest",
        ":wire",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "netutils",
    srcs = ["netutils.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        ":webchanneldebug",
        "//closure/goog:base",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "requeststats",
    srcs = ["requeststats.js"],
    lenient = True,
    visibility = [
        ":internal",
        ":legacy_users",
    ],
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "webchannelbase",
    srcs = ["webchannelbase.js"],
    lenient = True,
    deps = [
        ":basetestchannel",
        ":channel",
        ":channelrequest",
        ":connectionstate",
        ":forwardchannelrequestpool",
        ":netutils",
        ":requeststats",
        ":webchanneldebug",
        ":wire",
        ":wirev8",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/async:run",
        "//closure/goog/json",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttpfactory",
        "//closure/goog/net/rpc:httpcors",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "webchannelbasetransport",
    srcs = ["webchannelbasetransport.js"],
    lenient = True,
    deps = [
        ":channelrequest",
        ":webchannelbase",
        ":wire",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/labs/net:webchanneltransport",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:path",
    ],
)

closure_js_library(
    name = "webchanneldebug",
    srcs = ["webchanneldebug.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        "//closure/goog:base",
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "wire",
    srcs = ["wire.js"],
    lenient = True,
    visibility = [
        "//closure/goog:__pkg__",
        "//closure/goog/bin/sizetests:__pkg__",
    ],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "wirev8",
    srcs = ["wirev8.js"],
    lenient = True,
    visibility = [":internal"],
    deps = [
        ":wire",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/json",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/structs",
    ],
)
