package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":event",
        ":eventtype",
        ":history",
        ":html5history",
    ],
)

closure_js_library(
    name = "event",
    srcs = ["//closure/goog/history:event.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/history:eventtype",
    ],
)

closure_js_library(
    name = "eventtype",
    srcs = ["//closure/goog/history:eventtype.js"],
    lenient = True,
)

closure_js_library(
    name = "history",
    srcs = ["//closure/goog/history:history.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/history:event",
        "//closure/goog/history:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/labs/useragent:device",
        "//closure/goog/memoize",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "html5history",
    srcs = ["//closure/goog/history:html5history.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/history:event",
    ],
)
