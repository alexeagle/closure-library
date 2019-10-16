package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/locale:countries.js"],
    lenient = True,
)

closure_js_library(
    name = "defaultlocalenameconstants",
    srcs = ["//closure/goog/locale:defaultlocalenameconstants.js"],
    lenient = True,
)

closure_js_library(
    name = "genericfontnames",
    srcs = ["//closure/goog/locale:genericfontnames.js"],
    lenient = True,
)

closure_js_library(
    name = "genericfontnamesdata",
    srcs = ["//closure/goog/locale:genericfontnamesdata.js"],
    lenient = True,
)

closure_js_library(
    name = "locale",
    srcs = ["//closure/goog/locale:locale.js"],
    lenient = True,
    deps = ["//closure/goog/locale:nativenameconstants"],
)

closure_js_library(
    name = "nativenameconstants",
    srcs = ["//closure/goog/locale:nativenameconstants.js"],
    lenient = True,
)

closure_js_library(
    name = "scriptToLanguages",
    srcs = ["//closure/goog/locale:scriptToLanguages.js"],
    lenient = True,
    deps = ["//closure/goog/locale"],
)

closure_js_library(
    name = "timezonedetection",
    srcs = ["//closure/goog/locale:timezonedetection.js"],
    lenient = True,
    deps = ["//closure/goog/locale:timezonefingerprint"],
)

closure_js_library(
    name = "timezonefingerprint",
    srcs = ["//closure/goog/locale:timezonefingerprint.js"],
    lenient = True,
)

closure_js_library(
    name = "timezonelist",
    srcs = ["//closure/goog/locale:timezonelist.js"],
    lenient = True,
    deps = ["//closure/goog/locale"],
)
