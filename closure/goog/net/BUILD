package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":browserchannel",
        ":browsertestchannel",
        ":bulkloader",
        ":bulkloaderhelper",
        ":channeldebug",
        ":channelrequest",
        ":cookies",
        ":corsxmlhttpfactory",
        ":crossdomainrpc",
        ":errorcode",
        ":eventtype",
        ":fetchxmlhttpfactory",
        ":filedownloader",
        ":httpstatus",
        ":httpstatusname",
        ":iframeio",
        ":iframeloadmonitor",
        ":imageloader",
        ":ipaddress",
        ":jsloader",
        ":jsonp",
        ":mockiframeio",
        ":multiiframeloadmonitor",
        ":networkstatusmonitor",
        ":networktester",
        ":tmpnetwork",
        ":websocket",
        ":wrapperxmlhttpfactory",
        ":xhrio",
        ":xhriopool",
        ":xhrlike",
        ":xhrmanager",
        ":xmlhttp",
        ":xmlhttpfactory",
        "//closure/goog/net/rpc:all_js",
        "//closure/goog/net/streams:all_js",
        "//closure/goog/net/xpc:all_js",
    ],
)

closure_js_library(
    name = "browserchannel",
    srcs = ["//closure/goog/net:browserchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:formatter",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/log",
        "//closure/goog/net:browsertestchannel",
        "//closure/goog/net:channeldebug",
        "//closure/goog/net:channelrequest",
        "//closure/goog/net:tmpnetwork",
        "//closure/goog/net:xhrio",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "browsertestchannel",
    srcs = ["//closure/goog/net:browsertestchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/net:channelrequest",
        "//closure/goog/net:tmpnetwork",
        "//closure/goog/string:parser",
    ],
)

closure_js_library(
    name = "bulkloader",
    srcs = ["//closure/goog/net:bulkloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/net:bulkloaderhelper",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
    ],
)

closure_js_library(
    name = "bulkloaderhelper",
    srcs = ["//closure/goog/net:bulkloaderhelper.js"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "channeldebug",
    srcs = ["//closure/goog/net:channeldebug.js"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "channelrequest",
    srcs = ["//closure/goog/net:channelrequest.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:throttle",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "cookies",
    srcs = ["//closure/goog/net:cookies.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "corsxmlhttpfactory",
    srcs = ["//closure/goog/net:corsxmlhttpfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xhrlike",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

closure_js_library(
    name = "crossdomainrpc",
    srcs = ["//closure/goog/net:crossdomainrpc.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:httpstatus",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["//closure/goog/net:errorcode.js"],
    lenient = True,
)

closure_js_library(
    name = "eventtype",
    srcs = ["//closure/goog/net:eventtype.js"],
    lenient = True,
)

closure_js_library(
    name = "fetchxmlhttpfactory",
    srcs = ["//closure/goog/net:fetchxmlhttpfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
        "//closure/goog/log",
        "//closure/goog/net:xhrlike",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

closure_js_library(
    name = "filedownloader",
    srcs = ["//closure/goog/net:filedownloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt:hash32",
        "//closure/goog/debug:error",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/fs",
        "//closure/goog/fs:entry",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filesaver",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xhriopool",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "httpstatus",
    srcs = ["//closure/goog/net:httpstatus.js"],
    lenient = True,
)

closure_js_library(
    name = "httpstatusname",
    srcs = ["//closure/goog/net:httpstatusname.js"],
    lenient = True,
)

closure_js_library(
    name = "iframeio",
    srcs = ["//closure/goog/net:iframeio.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:formatter",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/reflect",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/structs",
        "//closure/goog/timer",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "iframeloadmonitor",
    srcs = ["//closure/goog/net:iframeloadmonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imageloader",
    srcs = ["//closure/goog/net:imageloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/net:eventtype",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "ipaddress",
    srcs = ["//closure/goog/net:ipaddress.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math:integer",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsloader",
    srcs = ["//closure/goog/net:jsloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug:error",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "jsonp",
    srcs = ["//closure/goog/net:jsonp.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/net:jsloader",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mockiframeio",
    srcs = ["//closure/goog/net:mockiframeio.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:iframeio",
    ],
)

closure_js_library(
    name = "multiiframeloadmonitor",
    srcs = ["//closure/goog/net:multiiframeloadmonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/net:iframeloadmonitor",
    ],
)

closure_js_library(
    name = "networkstatusmonitor",
    srcs = ["//closure/goog/net:networkstatusmonitor.js"],
    lenient = True,
    deps = ["//closure/goog/events:listenable"],
)

closure_js_library(
    name = "networktester",
    srcs = ["//closure/goog/net:networktester.js"],
    lenient = True,
    deps = [
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "tmpnetwork",
    srcs = ["//closure/goog/net:tmpnetwork.js"],
    lenient = True,
    deps = [
        "//closure/goog/net:channeldebug",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "websocket",
    srcs = ["//closure/goog/net:websocket.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "wrapperxmlhttpfactory",
    srcs = ["//closure/goog/net:wrapperxmlhttpfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/net:xhrlike",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

closure_js_library(
    name = "xhrio",
    srcs = ["//closure/goog/net:xhrio.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json:hybrid",
        "//closure/goog/log",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
        "//closure/goog/timer",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "xhriopool",
    srcs = ["//closure/goog/net:xhriopool.js"],
    lenient = True,
    deps = [
        "//closure/goog/net:xhrio",
        "//closure/goog/structs:prioritypool",
    ],
)

closure_js_library(
    name = "xhrlike",
    srcs = ["//closure/goog/net:xhrlike.js"],
    lenient = True,
)

closure_js_library(
    name = "xhrmanager",
    srcs = ["//closure/goog/net:xhrmanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xhriopool",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "xmlhttp",
    srcs = ["//closure/goog/net:xmlhttp.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/net:wrapperxmlhttpfactory",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

closure_js_library(
    name = "xmlhttpfactory",
    srcs = ["//closure/goog/net:xmlhttpfactory.js"],
    lenient = True,
    deps = ["//closure/goog/net:xhrlike"],
)
