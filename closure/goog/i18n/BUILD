package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":bidi",
        ":bidiformatter",
        ":charlistdecompressor",
        ":charpickerdata",
        ":collation",
        ":compactnumberformatsymbols",
        ":compactnumberformatsymbolsext",
        ":currency",
        ":currencycodemap",
        ":dateintervalformat",
        ":dateintervalpatterns",
        ":dateintervalpatternsext",
        ":dateintervalsymbols",
        ":dateintervalsymbolsext",
        ":datetimeformat",
        ":datetimeparse",
        ":datetimepatterns",
        ":datetimepatternsext",
        ":datetimesymbols",
        ":datetimesymbolsext",
        ":graphemebreak",
        ":messageformat",
        ":mime",
        ":numberformat",
        ":numberformatsymbols",
        ":numberformatsymbolsext",
        ":ordinalrules",
        ":pluralrules",
        ":relativedatetimeformat",
        ":relativedatetimesymbols",
        ":relativedatetimesymbolsext",
        ":timezone",
        ":uchar",
        ":ucharnames",
        "//closure/goog/i18n/uchar:all_js",
    ],
)

closure_js_library(
    name = "bidi",
    srcs = ["//closure/goog/i18n:bidi.js"],
    lenient = True,
)

closure_js_library(
    name = "bidiformatter",
    srcs = ["//closure/goog/i18n:bidiformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/i18n:bidi",
    ],
)

closure_js_library(
    name = "charlistdecompressor",
    srcs = ["//closure/goog/i18n:charlistdecompressor.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/i18n:uchar",
    ],
)

closure_js_library(
    name = "charpickerdata",
    srcs = ["//closure/goog/i18n:charpickerdata.js"],
    lenient = True,
)

closure_js_library(
    name = "collation",
    srcs = ["//closure/goog/i18n:collation.js"],
    lenient = True,
)

closure_js_library(
    name = "compactnumberformatsymbols",
    srcs = ["//closure/goog/i18n:compactnumberformatsymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "compactnumberformatsymbolsext",
    srcs = ["//closure/goog/i18n:compactnumberformatsymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:compactnumberformatsymbols"],
)

closure_js_library(
    name = "currency",
    srcs = ["//closure/goog/i18n:currency.js"],
    lenient = True,
)

closure_js_library(
    name = "currencycodemap",
    srcs = ["//closure/goog/i18n:currencycodemap.js"],
    lenient = True,
)

closure_js_library(
    name = "dateintervalformat",
    srcs = ["//closure/goog/i18n:dateintervalformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:datelike",
        "//closure/goog/date:daterange",
        "//closure/goog/i18n:dateintervalsymbols",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/i18n:timezone",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "dateintervalpatterns",
    srcs = ["//closure/goog/i18n:dateintervalpatterns.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:dateintervalsymbols"],
)

closure_js_library(
    name = "dateintervalpatternsext",
    srcs = ["//closure/goog/i18n:dateintervalpatternsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:dateintervalpatterns"],
)

closure_js_library(
    name = "dateintervalsymbols",
    srcs = ["//closure/goog/i18n:dateintervalsymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "dateintervalsymbolsext",
    srcs = ["//closure/goog/i18n:dateintervalsymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:dateintervalsymbols"],
)

closure_js_library(
    name = "datetimeformat",
    srcs = ["//closure/goog/i18n:datetimeformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/i18n:timezone",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "datetimeparse",
    srcs = ["//closure/goog/i18n:datetimeparse.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimesymbols",
    ],
)

closure_js_library(
    name = "datetimepatterns",
    srcs = ["//closure/goog/i18n:datetimepatterns.js"],
    lenient = True,
)

closure_js_library(
    name = "datetimepatternsext",
    srcs = ["//closure/goog/i18n:datetimepatternsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:datetimepatterns"],
)

closure_js_library(
    name = "datetimesymbols",
    srcs = ["//closure/goog/i18n:datetimesymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "datetimesymbolsext",
    srcs = ["//closure/goog/i18n:datetimesymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:datetimesymbols"],
)

closure_js_library(
    name = "graphemebreak",
    srcs = ["//closure/goog/i18n:graphemebreak.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/i18n:uchar",
        "//closure/goog/structs:inversionmap",
    ],
)

closure_js_library(
    name = "messageformat",
    srcs = ["//closure/goog/i18n:messageformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/i18n:compactnumberformatsymbols",
        "//closure/goog/i18n:numberformat",
        "//closure/goog/i18n:numberformatsymbols",
        "//closure/goog/i18n:ordinalrules",
        "//closure/goog/i18n:pluralrules",
    ],
)

closure_js_library(
    name = "mime",
    srcs = ["//closure/goog/i18n:mime.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/i18n:uchar",
    ],
)

closure_js_library(
    name = "numberformat",
    srcs = ["//closure/goog/i18n:numberformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/i18n:compactnumberformatsymbols",
        "//closure/goog/i18n:currency",
        "//closure/goog/i18n:numberformatsymbols",
        "//closure/goog/math",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "numberformatsymbols",
    srcs = ["//closure/goog/i18n:numberformatsymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "numberformatsymbolsext",
    srcs = ["//closure/goog/i18n:numberformatsymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:numberformatsymbols"],
)

closure_js_library(
    name = "ordinalrules",
    srcs = ["//closure/goog/i18n:ordinalrules.js"],
    lenient = True,
)

closure_js_library(
    name = "pluralrules",
    srcs = ["//closure/goog/i18n:pluralrules.js"],
    lenient = True,
)

closure_js_library(
    name = "relativedatetimeformat",
    srcs = ["//closure/goog/i18n:relativedatetimeformat.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/i18n:messageformat",
        "//closure/goog/i18n:relativedatetimesymbols",
    ],
)

closure_js_library(
    name = "relativedatetimesymbols",
    srcs = ["//closure/goog/i18n:relativedatetimesymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "relativedatetimesymbolsext",
    srcs = ["//closure/goog/i18n:relativedatetimesymbolsext.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:relativedatetimesymbols"],
)

closure_js_library(
    name = "timezone",
    srcs = ["//closure/goog/i18n:timezone.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/date:datelike",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "uchar",
    srcs = ["//closure/goog/i18n:uchar.js"],
    lenient = True,
)

closure_js_library(
    name = "ucharnames",
    srcs = ["//closure/goog/i18n:ucharnames.js"],
    lenient = True,
    deps = ["//closure/goog/i18n:uchar"],
)
