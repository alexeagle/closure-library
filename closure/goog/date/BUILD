package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":date",
        ":datelike",
        ":daterange",
        ":duration",
        ":relative",
        ":utcdatetime",
    ],
)

closure_js_library(
    name = "date",
    srcs = ["//closure/goog/date:date.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/date:datelike",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "datelike",
    srcs = ["//closure/goog/date:datelike.js"],
    lenient = True,
)

closure_js_library(
    name = "daterange",
    srcs = ["//closure/goog/date:daterange.js"],
    lenient = True,
    deps = [
        "//closure/goog/date",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "duration",
    srcs = ["//closure/goog/date:duration.js"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:messageformat",
    ],
)

closure_js_library(
    name = "relative",
    srcs = ["//closure/goog/date:relative.js"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:relativedatetimeformat",
    ],
)

closure_js_library(
    name = "utcdatetime",
    srcs = ["//closure/goog/date:utcdatetime.js"],
    lenient = True,
    deps = ["//closure/goog/date"],
)
