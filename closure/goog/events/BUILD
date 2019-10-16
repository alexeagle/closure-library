package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":actioneventwrapper",
        ":actionhandler",
        ":browserevent",
        ":browserfeature",
        ":event",
        ":eventhandler",
        ":eventid",
        ":events",
        ":eventtarget",
        ":eventtype",
        ":eventwrapper",
        ":filedrophandler",
        ":focushandler",
        ":imehandler",
        ":inputhandler",
        ":keycodes",
        ":keyhandler",
        ":keynames",
        ":keys",
        ":listenable",
        ":listener",
        ":listenermap",
        ":mousewheelhandler",
        ":onlinehandler",
        ":pastehandler",
        ":wheelevent",
        ":wheelhandler",
    ],
)

closure_js_library(
    name = "actioneventwrapper",
    srcs = ["//closure/goog/events:actioneventwrapper.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:eventwrapper",
        "//closure/goog/events:keycodes",
    ],
)

closure_js_library(
    name = "actionhandler",
    srcs = ["//closure/goog/events:actionhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserevent",
    srcs = ["//closure/goog/events:browserevent.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug",
        "//closure/goog/events:browserfeature",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/reflect",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserfeature",
    srcs = ["//closure/goog/events:browserfeature.js"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

closure_js_library(
    name = "event",
    srcs = ["//closure/goog/events:event.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events:eventid",
    ],
)

closure_js_library(
    name = "eventhandler",
    srcs = ["//closure/goog/events:eventhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "eventid",
    srcs = ["//closure/goog/events:eventid.js"],
    lenient = True,
)

closure_js_library(
    name = "events",
    srcs = ["//closure/goog/events:events.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:browserfeature",
        "//closure/goog/events:listenable",
        "//closure/goog/events:listenermap",
    ],
)

closure_js_library(
    name = "eventtarget",
    srcs = ["//closure/goog/events:eventtarget.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:listenable",
        "//closure/goog/events:listenermap",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "eventtargettester",
    testonly = True,
    srcs = ["//closure/goog/events:eventtargettester.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:recordfunction",
    ],
)

closure_js_library(
    name = "eventtype",
    srcs = ["//closure/goog/events:eventtype.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:browserfeature",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "eventwrapper",
    srcs = ["//closure/goog/events:eventwrapper.js"],
    lenient = True,
)

closure_js_library(
    name = "filedrophandler",
    srcs = ["//closure/goog/events:filedrophandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "focushandler",
    srcs = ["//closure/goog/events:focushandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imehandler",
    srcs = ["//closure/goog/events:imehandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "inputhandler",
    srcs = ["//closure/goog/events:inputhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:keycodes",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keycodes",
    srcs = ["//closure/goog/events:keycodes.js"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

closure_js_library(
    name = "keyhandler",
    srcs = ["//closure/goog/events:keyhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keynames",
    srcs = ["//closure/goog/events:keynames.js"],
    lenient = True,
)

closure_js_library(
    name = "keys",
    srcs = ["//closure/goog/events:keys.js"],
    lenient = True,
)

closure_js_library(
    name = "listenable",
    srcs = ["//closure/goog/events:listenable.js"],
    lenient = True,
    deps = ["//closure/goog/events:eventid"],
)

closure_js_library(
    name = "listener",
    srcs = ["//closure/goog/events:listener.js"],
    lenient = True,
    deps = ["//closure/goog/events:listenable"],
)

closure_js_library(
    name = "listenermap",
    srcs = ["//closure/goog/events:listenermap.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:listener",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mousewheelhandler",
    srcs = ["//closure/goog/events:mousewheelhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/math",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "onlinehandler",
    srcs = ["//closure/goog/events:onlinehandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:browserfeature",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/net:networkstatusmonitor",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "pastehandler",
    srcs = ["//closure/goog/events:pastehandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:conditionaldelay",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "wheelevent",
    srcs = ["//closure/goog/events:wheelevent.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:browserevent",
    ],
)

closure_js_library(
    name = "wheelhandler",
    srcs = ["//closure/goog/events:wheelhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:wheelevent",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)
