package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":cssspecificity",
        ":flash",
        ":legacyconversions",
        ":safehtml",
        ":safehtmlformatter",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":silverlight",
        ":textextractor",
        ":trustedresourceurl",
        ":trustedtypes",
        ":uncheckedconversions",
        ":utils",
        "//closure/goog/html/sanitizer:all_js",
    ],
)

closure_js_library(
    name = "cssspecificity",
    srcs = ["//closure/goog/html:cssspecificity.js"],
    lenient = True,
    deps = [
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "flash",
    srcs = ["//closure/goog/html:flash.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
    ],
)

closure_js_library(
    name = "legacyconversions",
    srcs = ["//closure/goog/html:legacyconversions.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
    ],
)

closure_js_library(
    name = "safehtml",
    srcs = ["//closure/goog/html:safehtml.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:tags",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:trustedtypes",
        "//closure/goog/i18n:bidi",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safehtmlformatter",
    srcs = ["//closure/goog/html:safehtmlformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:tags",
        "//closure/goog/html:safehtml",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "safescript",
    srcs = ["//closure/goog/html:safescript.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:trustedtypes",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestyle",
    srcs = ["//closure/goog/html:safestyle.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/html:safeurl",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestylesheet",
    srcs = ["//closure/goog/html:safestylesheet.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/html:safestyle",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safeurl",
    srcs = ["//closure/goog/html:safeurl.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/fs:url",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:trustedtypes",
        "//closure/goog/i18n:bidi",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "silverlight",
    srcs = ["//closure/goog/html:silverlight.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:flash",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "testing",
    testonly = True,
    srcs = ["//closure/goog/html:testing.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/testing:mockmatchers",
    ],
)

closure_js_library(
    name = "textextractor",
    srcs = ["//closure/goog/html:textextractor.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom:tagname",
        "//closure/goog/html/sanitizer:htmlsanitizer",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "trustedresourceurl",
    srcs = ["//closure/goog/html:trustedresourceurl.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:trustedtypes",
        "//closure/goog/i18n:bidi",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "trustedtypes",
    srcs = ["//closure/goog/html:trustedtypes.js"],
    lenient = True,
)

closure_js_library(
    name = "uncheckedconversions",
    srcs = ["//closure/goog/html:uncheckedconversions.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "utils",
    srcs = ["//closure/goog/html:utils.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)
