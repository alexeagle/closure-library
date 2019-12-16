load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["emailaddress.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "format",
    srcs = ["format.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/i18n:graphemebreak",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "htmlprettyprinter",
    srcs = ["htmlprettyprinter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string:stringbuffer",
    ],
)

closure_js_library(
    name = "internationalizedemailaddress",
    srcs = ["internationalizedemailaddress.js"],
    lenient = True,
    deps = [
        ":emailaddress",
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsonprettyprinter",
    srcs = ["jsonprettyprinter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/html:safehtml",
        "//closure/goog/json",
        "//closure/goog/string",
        "//closure/goog/string:stringformat",
    ],
)
