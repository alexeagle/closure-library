package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":emailaddress",
        ":format",
        ":htmlprettyprinter",
        ":internationalizedemailaddress",
        ":jsonprettyprinter",
    ],
)

closure_js_library(
    name = "emailaddress",
    srcs = ["//closure/goog/format:emailaddress.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "format",
    srcs = ["//closure/goog/format:format.js"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:graphemebreak",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "htmlprettyprinter",
    srcs = ["//closure/goog/format:htmlprettyprinter.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string:stringbuffer",
    ],
)

closure_js_library(
    name = "internationalizedemailaddress",
    srcs = ["//closure/goog/format:internationalizedemailaddress.js"],
    lenient = True,
    deps = [
        "//closure/goog/format:emailaddress",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsonprettyprinter",
    srcs = ["//closure/goog/format:jsonprettyprinter.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/json",
        "//closure/goog/string",
        "//closure/goog/string:stringformat",
    ],
)
