load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":countries",
        ":defaultlocalenameconstants",
        ":genericfontnames",
        ":genericfontnamesdata",
        ":locale",
        ":nativenameconstants",
        ":scriptToLanguages",
        ":timezonedetection",
        ":timezonefingerprint",
        ":timezonelist",
    ],
)

closure_js_library(
    name = "countries",
    srcs = ["countries.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "defaultlocalenameconstants",
    srcs = ["defaultlocalenameconstants.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "genericfontnames",
    srcs = ["genericfontnames.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "genericfontnamesdata",
    srcs = ["genericfontnamesdata.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "locale",
    srcs = ["locale.js"],
    lenient = True,
    deps = [
        ":nativenameconstants",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "nativenameconstants",
    srcs = ["nativenameconstants.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "scriptToLanguages",
    srcs = ["scriptToLanguages.js"],
    lenient = True,
    deps = [
        ":locale",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "timezonedetection",
    srcs = ["timezonedetection.js"],
    lenient = True,
    deps = [
        ":timezonefingerprint",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "timezonefingerprint",
    srcs = ["timezonefingerprint.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "timezonelist",
    srcs = ["timezonelist.js"],
    lenient = True,
    deps = [
        ":locale",
        "//closure/goog:base",
    ],
)
