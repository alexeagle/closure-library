load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":cursor",
        ":db",
        ":error",
        ":index",
        ":indexeddb",
        ":keyrange",
        ":objectstore",
        ":transaction",
    ],
)

closure_js_library(
    name = "cursor",
    srcs = ["cursor.js"],
    lenient = True,
    deps = [
        ":error",
        ":keyrange",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/debug",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "db",
    srcs = ["db.js"],
    lenient = True,
    deps = [
        ":error",
        ":indexeddb",
        ":transaction",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "error",
    srcs = ["error.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
    ],
)

closure_js_library(
    name = "index",
    srcs = ["index.js"],
    lenient = True,
    deps = [
        ":cursor",
        ":error",
        ":keyrange",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/debug",
    ],
)

closure_js_library(
    name = "indexeddb",
    srcs = ["indexeddb.js"],
    lenient = True,
    deps = [
        ":error",
        ":objectstore",
        ":transaction",
        "//closure/goog:base",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "keyrange",
    srcs = ["keyrange.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "objectstore",
    srcs = ["objectstore.js"],
    lenient = True,
    deps = [
        ":cursor",
        ":error",
        ":index",
        ":keyrange",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/debug",
    ],
)

closure_js_library(
    name = "transaction",
    srcs = ["transaction.js"],
    lenient = True,
    deps = [
        ":error",
        ":objectstore",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)
