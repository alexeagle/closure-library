load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":eventobserver",
        ":events",
        ":matchers",
        ":onlinehandler",
    ],
)

closure_js_library(
    name = "eventobserver",
    srcs = ["eventobserver.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "events",
    srcs = ["events.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom:nodetype",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:browserfeature",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/object",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "matchers",
    srcs = ["matchers.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:event",
        "//closure/goog/testing:mockmatchers",
    ],
)

closure_js_library(
    name = "onlinehandler",
    srcs = ["onlinehandler.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/net:networkstatusmonitor",
    ],
)
