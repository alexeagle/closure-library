load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":abstractchannel",
        ":bufferedchannel",
        ":deferredchannel",
        ":loggerclient",
        ":loggerserver",
        ":messagechannel",
        ":messaging",
        ":multichannel",
        ":portcaller",
        ":portchannel",
        ":portnetwork",
        ":portoperator",
        ":respondingchannel",
        "//closure/goog/messaging/testdata:all_js",
    ],
)

closure_js_library(
    name = "abstractchannel",
    srcs = ["abstractchannel.js"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "bufferedchannel",
    srcs = ["bufferedchannel.js"],
    lenient = True,
    deps = [
        ":messagechannel",
        ":multichannel",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/log",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "deferredchannel",
    srcs = ["deferredchannel.js"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "loggerclient",
    srcs = ["loggerclient.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/debug",
        "//closure/goog/debug:logger",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "loggerserver",
    srcs = ["loggerserver.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "messagechannel",
    srcs = ["messagechannel.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "messaging",
    srcs = ["messaging.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "multichannel",
    srcs = ["multichannel.js"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "portcaller",
    srcs = ["portcaller.js"],
    lenient = True,
    deps = [
        ":deferredchannel",
        ":portchannel",
        ":portnetwork",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "portchannel",
    srcs = ["portchannel.js"],
    lenient = True,
    deps = [
        ":abstractchannel",
        ":deferredchannel",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/debug",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "portnetwork",
    srcs = ["portnetwork.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "portoperator",
    srcs = ["portoperator.js"],
    lenient = True,
    deps = [
        ":portchannel",
        ":portnetwork",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "respondingchannel",
    srcs = ["respondingchannel.js"],
    lenient = True,
    deps = [
        ":multichannel",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/promise",
    ],
)
