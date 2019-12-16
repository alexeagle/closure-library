load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["date.js"],
    lenient = True,
    deps = [
        ":datelike",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "datelike",
    srcs = ["datelike.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "daterange",
    srcs = ["daterange.js"],
    lenient = True,
    deps = [
        ":date",
        "//closure/goog:base",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "duration",
    srcs = ["duration.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:messageformat",
    ],
)

closure_js_library(
    name = "relative",
    srcs = ["relative.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:relativedatetimeformat",
    ],
)

closure_js_library(
    name = "relativecommontests",
    testonly = 1,
    srcs = ["relativecommontests.js"],
    lenient = True,
    deps = [
        ":date",
        ":relative",
        "//closure/goog:base",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/i18n:numberformatsymbols",
        "//closure/goog/i18n:relativedatetimesymbols",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:propertyreplacer",
    ],
)

closure_js_library(
    name = "utcdatetime",
    srcs = ["utcdatetime.js"],
    lenient = True,
    deps = [
        ":date",
        "//closure/goog:base",
    ],
)
