package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    ],
)

closure_js_library(
    name = "abstractchannel",
    srcs = ["//closure/goog/messaging:abstractchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/messaging:messagechannel",
    ],
)

closure_js_library(
    name = "bufferedchannel",
    srcs = ["//closure/goog/messaging:bufferedchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/log",
        "//closure/goog/messaging:messagechannel",
        "//closure/goog/messaging:multichannel",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "deferredchannel",
    srcs = ["//closure/goog/messaging:deferredchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/messaging:messagechannel",
    ],
)

closure_js_library(
    name = "loggerclient",
    srcs = ["//closure/goog/messaging:loggerclient.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug",
        "//closure/goog/debug:logger",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "loggerserver",
    srcs = ["//closure/goog/messaging:loggerserver.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "messagechannel",
    srcs = ["//closure/goog/messaging:messagechannel.js"],
    lenient = True,
)

closure_js_library(
    name = "messaging",
    srcs = ["//closure/goog/messaging:messaging.js"],
    lenient = True,
)

closure_js_library(
    name = "multichannel",
    srcs = ["//closure/goog/messaging:multichannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/messaging:messagechannel",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "portcaller",
    srcs = ["//closure/goog/messaging:portcaller.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/messaging:deferredchannel",
        "//closure/goog/messaging:portchannel",
        "//closure/goog/messaging:portnetwork",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "portchannel",
    srcs = ["//closure/goog/messaging:portchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/messaging:abstractchannel",
        "//closure/goog/messaging:deferredchannel",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "portnetwork",
    srcs = ["//closure/goog/messaging:portnetwork.js"],
    lenient = True,
)

closure_js_library(
    name = "portoperator",
    srcs = ["//closure/goog/messaging:portoperator.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/messaging:portchannel",
        "//closure/goog/messaging:portnetwork",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "respondingchannel",
    srcs = ["//closure/goog/messaging:respondingchannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/messaging:multichannel",
        "//closure/goog/promise",
    ],
)
