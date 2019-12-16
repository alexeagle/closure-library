load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

exports_files([
    "datetimeformat.js",
    "numberformatsymbols.js",
    "timezone.js",
])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
        ":localefeature",
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
    srcs = ["bidi.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "bidiformatter",
    srcs = ["bidiformatter.js"],
    lenient = True,
    deps = [
        ":bidi",
        "//closure/goog:base",
        "//closure/goog/html:safehtml",
    ],
)

closure_js_library(
    name = "charlistdecompressor",
    srcs = ["charlistdecompressor.js"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "charpickerdata",
    srcs = ["charpickerdata.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "collation",
    srcs = ["collation.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "compactnumberformatsymbols",
    srcs = ["compactnumberformatsymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "compactnumberformatsymbolsext",
    srcs = ["compactnumberformatsymbolsext.js"],
    lenient = True,
    deps = [
        ":compactnumberformatsymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "currency",
    srcs = ["currency.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "currencycodemap",
    srcs = ["currencycodemap.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "dateintervalformat",
    srcs = ["dateintervalformat.js"],
    lenient = True,
    deps = [
        ":dateintervalsymbols",
        ":datetimeformat",
        ":datetimesymbols",
        ":timezone",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:datelike",
        "//closure/goog/date:daterange",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "dateintervalpatterns",
    srcs = ["dateintervalpatterns.js"],
    lenient = True,
    deps = [
        ":dateintervalsymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dateintervalpatternsext",
    srcs = ["dateintervalpatternsext.js"],
    lenient = True,
    deps = [
        ":dateintervalpatterns",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dateintervalsymbols",
    srcs = ["dateintervalsymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "dateintervalsymbolsext",
    srcs = ["dateintervalsymbolsext.js"],
    lenient = True,
    deps = [
        ":dateintervalsymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "datetimeformat",
    srcs = ["datetimeformat.js"],
    lenient = True,
    deps = [
        ":datetimesymbols",
        ":timezone",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "datetimeparse",
    srcs = ["datetimeparse.js"],
    lenient = True,
    deps = [
        ":datetimeformat",
        ":datetimesymbols",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/date",
    ],
)

closure_js_library(
    name = "datetimepatterns",
    srcs = ["datetimepatterns.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "datetimepatternsext",
    srcs = ["datetimepatternsext.js"],
    lenient = True,
    deps = [
        ":datetimepatterns",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "datetimesymbols",
    srcs = ["datetimesymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "datetimesymbolsext",
    srcs = ["datetimesymbolsext.js"],
    lenient = True,
    deps = [
        ":datetimesymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "graphemebreak",
    srcs = ["graphemebreak.js"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/structs:inversionmap",
    ],
)

closure_js_library(
    name = "localefeature",
    srcs = ["localefeature.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "messageformat",
    srcs = ["messageformat.js"],
    lenient = True,
    deps = [
        ":compactnumberformatsymbols",
        ":numberformat",
        ":numberformatsymbols",
        ":ordinalrules",
        ":pluralrules",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "mime",
    srcs = ["mime.js"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "numberformat",
    srcs = ["numberformat.js"],
    lenient = True,
    deps = [
        ":compactnumberformatsymbols",
        ":currency",
        ":numberformatsymbols",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "numberformatsymbols",
    srcs = ["numberformatsymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "numberformatsymbolsext",
    srcs = ["numberformatsymbolsext.js"],
    lenient = True,
    deps = [
        ":numberformatsymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "ordinalrules",
    srcs = ["ordinalrules.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "pluralrules",
    srcs = ["pluralrules.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "relativedatetimeformat",
    srcs = ["relativedatetimeformat.js"],
    lenient = True,
    deps = [
        ":localefeature",
        ":messageformat",
        ":relativedatetimesymbols",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "relativedatetimesymbols",
    srcs = ["relativedatetimesymbols.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "relativedatetimesymbolsext",
    srcs = ["relativedatetimesymbolsext.js"],
    lenient = True,
    deps = [
        ":relativedatetimesymbols",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "timezone",
    srcs = ["timezone.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/date:datelike",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "uchar",
    srcs = ["uchar.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "ucharnames",
    srcs = ["ucharnames.js"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog:base",
    ],
)
