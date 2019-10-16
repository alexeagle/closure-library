package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/db:cursor.js"],
    lenient = True,
    deps = [
        "//closure/goog/db:error",
        "//closure/goog/db:keyrange",
        "//closure/goog/debug",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "db",
    srcs = ["//closure/goog/db:db.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/db:error",
        "//closure/goog/db:indexeddb",
        "//closure/goog/db:transaction",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "error",
    srcs = ["//closure/goog/db:error.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
    ],
)

closure_js_library(
    name = "index",
    srcs = ["//closure/goog/db:index.js"],
    lenient = True,
    deps = [
        "//closure/goog/db:cursor",
        "//closure/goog/db:error",
        "//closure/goog/db:keyrange",
        "//closure/goog/debug",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "indexeddb",
    srcs = ["//closure/goog/db:indexeddb.js"],
    lenient = True,
    deps = [
        "//closure/goog/db:error",
        "//closure/goog/db:objectstore",
        "//closure/goog/db:transaction",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "keyrange",
    srcs = ["//closure/goog/db:keyrange.js"],
    lenient = True,
)

closure_js_library(
    name = "objectstore",
    srcs = ["//closure/goog/db:objectstore.js"],
    lenient = True,
    deps = [
        "//closure/goog/db:cursor",
        "//closure/goog/db:error",
        "//closure/goog/db:index",
        "//closure/goog/db:keyrange",
        "//closure/goog/debug",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "transaction",
    srcs = ["//closure/goog/db:transaction.js"],
    lenient = True,
    deps = [
        "//closure/goog/db:error",
        "//closure/goog/db:objectstore",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)
