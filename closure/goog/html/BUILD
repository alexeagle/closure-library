load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

CLOSURE_STRICT_FLAGS = [
    "--jscomp_error=missingProvide",
    "--coding_convention=CLOSURE_OPEN_SOURCE",
    "--jscomp_error=checkTypes",
    "--jscomp_error=visibility",
    "--jscomp_error=deprecated",
    "--jscomp_error=missingProperties",
    "--report_missing_override=ERROR",
]

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
        ":uncheckedconversions",
        ":utils",
        "//closure/goog/html/sanitizer:all_js",
    ],
)

closure_js_library(
    name = "cssspecificity",
    srcs = ["cssspecificity.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "flash",
    srcs = ["flash.js"],
    lenient = True,
    deps = [
        ":safehtml",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "legacyconversions",
    srcs = ["legacyconversions.js"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "safehtml",
    srcs = ["safehtml.js"],
    lenient = True,
    deps = [
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        ":trustedtypes",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:tags",
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
    srcs = ["safehtmlformatter.js"],
    lenient = True,
    deps = [
        ":safehtml",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom:tags",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "safescript",
    srcs = ["safescript.js"],
    lenient = True,
    deps = [
        ":trustedtypes",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestyle",
    srcs = ["safestyle.js"],
    lenient = True,
    deps = [
        ":safeurl",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestylesheet",
    srcs = ["safestylesheet.js"],
    lenient = True,
    deps = [
        ":safestyle",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safeurl",
    srcs = ["safeurl.js"],
    lenient = True,
    deps = [
        ":trustedresourceurl",
        "//closure/goog/fs:url",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/i18n:bidi",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safeurl_test_vectors",
    testonly = 1,
    srcs = ["safeurl_test_vectors.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "silverlight",
    srcs = ["silverlight.js"],
    lenient = True,
    deps = [
        ":flash",
        ":safehtml",
        ":trustedresourceurl",
        "//closure/goog:base",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "testing",
    testonly = 1,
    srcs = ["testing.js"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        "//closure/goog:base",
        "//closure/goog/testing:mockmatchers",
    ],
)

closure_js_library(
    name = "textextractor",
    srcs = ["textextractor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom:tagname",
        "//closure/goog/html/sanitizer:htmlsanitizer",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "trustedresourceurl",
    srcs = ["trustedresourceurl.js"],
    lenient = True,
    deps = [
        ":trustedtypes",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/i18n:bidi",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "trustedtypes",
    srcs = ["trustedtypes.js"],
    lenient = True,
    visibility = ["//closure/goog:__pkg__"],
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "uncheckedconversions",
    srcs = ["uncheckedconversions.js"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "utils",
    srcs = ["utils.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)
