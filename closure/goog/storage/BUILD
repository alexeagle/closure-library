load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["collectablestorage.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":expiringstorage",
        ":richstorage",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "collectablestoragetester",
    testonly = 1,
    srcs = ["collectablestoragetester.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "encryptedstorage",
    srcs = ["encryptedstorage.js"],
    lenient = True,
    deps = [
        ":collectablestorage",
        ":errorcode",
        ":richstorage",
        "//closure/goog:base",
        "//closure/goog/crypt",
        "//closure/goog/crypt:arc4",
        "//closure/goog/crypt:base64",
        "//closure/goog/crypt:sha1",
        "//closure/goog/json",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["errorcode.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "expiringstorage",
    srcs = ["expiringstorage.js"],
    lenient = True,
    deps = [
        ":richstorage",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "richstorage",
    srcs = ["richstorage.js"],
    lenient = True,
    deps = [
        ":errorcode",
        ":storage",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "storage",
    srcs = ["storage.js"],
    lenient = True,
    deps = [
        ":errorcode",
        "//closure/goog:base",
        "//closure/goog/json",
    ],
)

closure_js_library(
    name = "storagetester",
    testonly = 1,
    srcs = ["storagetester.js"],
    lenient = True,
    deps = [
        ":storage",
        "//closure/goog:base",
        "//closure/goog/structs:map",
        "//closure/goog/testing:asserts",
    ],
)
