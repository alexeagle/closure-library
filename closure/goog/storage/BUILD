package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":collectablestorage",
        ":encryptedstorage",
        ":errorcode",
        ":expiringstorage",
        ":richstorage",
        ":storage",
        "//closure/goog/storage/mechanism:all_js",
    ],
)

closure_js_library(
    name = "collectablestorage",
    srcs = ["//closure/goog/storage:collectablestorage.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/iter",
        "//closure/goog/storage:errorcode",
        "//closure/goog/storage:expiringstorage",
        "//closure/goog/storage:richstorage",
    ],
)

closure_js_library(
    name = "collectablestoragetester",
    testonly = True,
    srcs = ["//closure/goog/storage:collectablestoragetester.js"],
    lenient = True,
    deps = ["//closure/goog/testing:asserts"],
)

closure_js_library(
    name = "encryptedstorage",
    srcs = ["//closure/goog/storage:encryptedstorage.js"],
    lenient = True,
    deps = [
        "//closure/goog/crypt",
        "//closure/goog/crypt:arc4",
        "//closure/goog/crypt:base64",
        "//closure/goog/crypt:sha1",
        "//closure/goog/json",
        "//closure/goog/storage:collectablestorage",
        "//closure/goog/storage:errorcode",
        "//closure/goog/storage:richstorage",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["//closure/goog/storage:errorcode.js"],
    lenient = True,
)

closure_js_library(
    name = "expiringstorage",
    srcs = ["//closure/goog/storage:expiringstorage.js"],
    lenient = True,
    deps = ["//closure/goog/storage:richstorage"],
)

closure_js_library(
    name = "richstorage",
    srcs = ["//closure/goog/storage:richstorage.js"],
    lenient = True,
    deps = [
        "//closure/goog/storage",
        "//closure/goog/storage:errorcode",
    ],
)

closure_js_library(
    name = "storage",
    srcs = ["//closure/goog/storage:storage.js"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/storage:errorcode",
    ],
)

closure_js_library(
    name = "storagetester",
    testonly = True,
    srcs = ["//closure/goog/storage:storagetester.js"],
    lenient = True,
    deps = [
        "//closure/goog/storage",
        "//closure/goog/structs:map",
        "//closure/goog/testing:asserts",
    ],
)
