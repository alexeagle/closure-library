load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
        "//closure/goog/net/xpc:all_js",
    ],
)

closure_js_library(
    name = "browserchannel",
    srcs = ["browserchannel.js"],
    lenient = True,
    deps = [
        ":browsertestchannel",
        ":channeldebug",
        ":channelrequest",
        ":tmpnetwork",
        ":xhrio",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:formatter",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "browsertestchannel",
    srcs = ["browsertestchannel.js"],
    lenient = True,
    deps = [
        ":channelrequest",
        ":tmpnetwork",
        "//closure/goog:base",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/string:parser",
    ],
)

closure_js_library(
    name = "bulkloader",
    srcs = ["bulkloader.js"],
    lenient = True,
    deps = [
        ":bulkloaderhelper",
        ":eventtype",
        ":xhrio",
        "//closure/goog:base",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "bulkloaderhelper",
    srcs = ["bulkloaderhelper.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "channeldebug",
    srcs = ["channeldebug.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "channelrequest",
    srcs = ["channelrequest.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":xmlhttp",
        "//closure/goog:base",
        "//closure/goog/async:throttle",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "cookies",
    srcs = ["cookies.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "corsxmlhttpfactory",
    srcs = ["corsxmlhttpfactory.js"],
    lenient = True,
    deps = [
        ":httpstatus",
        ":xhrlike",
        ":xmlhttp",
        ":xmlhttpfactory",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "crossdomainrpc",
    srcs = ["crossdomainrpc.js"],
    lenient = True,
    deps = [
        ":eventtype",
        ":httpstatus",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["errorcode.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "eventtype",
    srcs = ["eventtype.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "fetchxmlhttpfactory",
    srcs = ["fetchxmlhttpfactory.js"],
    lenient = True,
    deps = [
        ":xhrlike",
        ":xmlhttpfactory",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "filedownloader",
    srcs = ["filedownloader.js"],
    lenient = True,
    deps = [
        ":eventtype",
        ":xhrio",
        ":xhriopool",
        "//closure/goog/fs",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/crypt:hash32",
        "//closure/goog/debug:error",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/object",
        "//third_party/closure/goog/fs:entry",
        "//third_party/closure/goog/fs:error",
        "//third_party/closure/goog/fs:filesaver",
    ],
)

closure_js_library(
    name = "httpstatus",
    srcs = ["httpstatus.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "httpstatusname",
    srcs = ["httpstatusname.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "iframeio",
    srcs = ["iframeio.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        "//closure/goog/reflect",
        "//closure/goog:base",
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
        "//closure/goog/html:legacyconversions",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/json",
        "//closure/goog/log",
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
    srcs = ["iframeloadmonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imageloader",
    srcs = ["imageloader.js"],
    lenient = True,
    deps = [
        ":eventtype",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "ipaddress",
    srcs = ["ipaddress.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/math:integer",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsloader",
    srcs = ["jsloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/debug:error",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "jsonp",
    srcs = ["jsonp.js"],
    lenient = True,
    deps = [
        ":jsloader",
        "//closure/goog:base",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mockiframeio",
    srcs = ["mockiframeio.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":iframeio",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "multiiframeloadmonitor",
    srcs = ["multiiframeloadmonitor.js"],
    lenient = True,
    deps = [
        ":iframeloadmonitor",
        "//closure/goog:base",
        "//closure/goog/events",
    ],
)

closure_js_library(
    name = "networkstatusmonitor",
    srcs = ["networkstatusmonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:listenable",
    ],
)

closure_js_library(
    name = "networktester",
    srcs = ["networktester.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom:safe",
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "tmpnetwork",
    srcs = ["tmpnetwork.js"],
    lenient = True,
    deps = [
        ":channeldebug",
        "//closure/goog:base",
        "//closure/goog/dom:safe",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "websocket",
    srcs = ["websocket.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["wrapperxmlhttpfactory.js"],
    lenient = True,
    deps = [
        ":xhrlike",
        ":xmlhttpfactory",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "xhrio",
    srcs = ["xhrio.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":httpstatus",
        ":xmlhttp",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json:hybrid",
        "//closure/goog/log",
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
    srcs = ["xhriopool.js"],
    lenient = True,
    deps = [
        ":xhrio",
        "//closure/goog:base",
        "//closure/goog/structs:prioritypool",
    ],
)

closure_js_library(
    name = "xhrlike",
    srcs = ["xhrlike.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "xhrmanager",
    srcs = ["xhrmanager.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":xhrio",
        ":xhriopool",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "xmlhttp",
    srcs = ["xmlhttp.js"],
    lenient = True,
    deps = [
        ":wrapperxmlhttpfactory",
        ":xmlhttpfactory",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "xmlhttpfactory",
    srcs = ["xmlhttpfactory.js"],
    lenient = True,
    deps = [
        ":xhrlike",
        "//closure/goog:base",
    ],
)
