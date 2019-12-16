load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files([
    "event.js",
    "eventtarget.js",
])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
        ":mousewheelhandler",
        ":onlinehandler",
        ":pastehandler",
        ":wheelevent",
        ":wheelhandler",
    ],
)

closure_js_library(
    name = "actioneventwrapper",
    srcs = ["actioneventwrapper.js"],
    lenient = True,
    deps = [
        ":eventhandler",
        ":events",
        ":eventtype",
        ":eventwrapper",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "actionhandler",
    srcs = ["actionhandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserevent",
    srcs = ["browserevent.js"],
    lenient = True,
    deps = [
        ":browserfeature",
        ":event",
        ":eventtype",
        "//closure/goog/reflect",
        "//closure/goog:base",
        "//closure/goog/debug",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserfeature",
    srcs = ["browserfeature.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "event",
    srcs = ["event.js"],
    lenient = True,
    deps = [
        ":eventid",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "eventhandler",
    srcs = ["eventhandler.js"],
    lenient = True,
    deps = [
        ":events",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "eventid",
    srcs = ["eventid.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "events",
    srcs = ["events.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":browserfeature",
        ":listenable",
        ":listenermap",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
    ],
)

closure_js_library(
    name = "eventtarget",
    srcs = ["eventtarget.js"],
    lenient = True,
    deps = [
        ":event",
        ":events",
        ":listenable",
        ":listenermap",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "eventtargettester",
    testonly = 1,
    srcs = ["eventtargettester.js"],
    lenient = True,
    deps = [
        ":event",
        ":eventtarget",
        ":listenable",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:recordfunction",
    ],
)

closure_js_library(
    name = "eventtype",
    srcs = ["eventtype.js"],
    lenient = True,
    deps = [
        ":browserfeature",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "eventwrapper",
    srcs = ["eventwrapper.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "filedrophandler",
    srcs = ["filedrophandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "focushandler",
    srcs = ["focushandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imehandler",
    srcs = ["imehandler.js"],
    lenient = True,
    deps = [
        ":event",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "inputhandler",
    srcs = ["inputhandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":eventtarget",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keycodes",
    srcs = ["keycodes.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keyhandler",
    srcs = ["keyhandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keynames",
    srcs = ["keynames.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "keys",
    srcs = ["keys.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "listenable",
    srcs = ["listenable.js"],
    lenient = True,
    deps = [
        ":eventid",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "listener",
    srcs = ["listener.js"],
    lenient = True,
    deps = [
        ":listenable",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "listenermap",
    srcs = ["listenermap.js"],
    lenient = True,
    visibility = [
        "//closure/goog:__pkg__",
        "//closure/goog/bin/sizetests:__pkg__",
        "//closure/goog/labs/events:__pkg__",
    ],
    deps = [
        ":listener",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mousewheelhandler",
    srcs = ["mousewheelhandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/math",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "onlinehandler",
    srcs = ["onlinehandler.js"],
    lenient = True,
    deps = [
        ":browserfeature",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        "//closure/goog:base",
        "//closure/goog/net:networkstatusmonitor",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "pastehandler",
    srcs = ["pastehandler.js"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog:base",
        "//closure/goog/async:conditionaldelay",
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "wheelevent",
    srcs = ["wheelevent.js"],
    lenient = True,
    deps = [
        ":browserevent",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "wheelhandler",
    srcs = ["wheelhandler.js"],
    lenient = True,
    deps = [
        ":events",
        ":eventtarget",
        ":wheelevent",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)
