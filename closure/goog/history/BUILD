load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":event",
        ":eventtype",
        ":history",
        ":html5history",
    ],
)

closure_js_library(
    name = "event",
    srcs = ["event.js"],
    lenient = True,
    deps = [
        ":eventtype",
        "//closure/goog:base",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "eventtype",
    srcs = ["eventtype.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "history",
    srcs = ["history.js"],
    lenient = True,
    deps = [
        ":event",
        ":eventtype",
        "//closure/goog/memoize",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/labs/useragent:device",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "html5history",
    srcs = ["html5history.js"],
    lenient = True,
    deps = [
        ":event",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)
