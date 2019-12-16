load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")
load("//closure/goog/html/sanitizer:approved_configs.bzl", "create_approved_for_config_package_groups")
load("//webutil/html/types/codegen:html_test_vectors.bzl", "html_test_vectors")

package(default_visibility = ["//visibility:public"])

package_group(
    name = "internal",
    packages = [
        "//closure/goog",
        "//closure/goog/bin/sizetests/...",
        "//closure/goog/html/sanitizer/...",
    ],
)

package_group(
    name = "external",
    packages = [
        "//corp/talent/perf6_frontend/...",
        "//javascript/apps/gmail/...",
    ],
)

create_approved_for_config_package_groups()

html_test_vectors(
    name = "html_test_vectors",
    out = "html_test_vectors.gen.js",
    sanitizer_behavior = "js_closure",
    template = "html_test_vectors.js.tpl",
)

closure_js_library(
    name = "html_test_vectors_js",
    srcs = ["html_test_vectors.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":attributewhitelist",
        ":csspropertysanitizer",
        ":csssanitizer",
        ":elementweakmap",
        ":htmlsanitizer",
        ":noclobber",
        ":tagblacklist",
        ":tagwhitelist",
    ],
)

closure_js_library(
    name = "attributewhitelist",
    srcs = ["attributewhitelist.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "csspropertysanitizer",
    srcs = ["csspropertysanitizer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/html:safeurl",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "csssanitizer",
    srcs = ["csssanitizer.js"],
    lenient = True,
    deps = [
        ":csspropertysanitizer",
        ":noclobber",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:cssspecificity",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "elementweakmap",
    srcs = ["elementweakmap.js"],
    lenient = True,
    deps = [
        ":noclobber",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "htmlsanitizer",
    srcs = ["htmlsanitizer.js"],
    lenient = True,
    deps = [
        ":attributewhitelist",
        ":csssanitizer",
        ":noclobber",
        ":safedomtreeprocessor",
        ":tagblacklist",
        ":tagwhitelist",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "noclobber",
    srcs = ["noclobber.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "safedomtreeprocessor",
    srcs = ["safedomtreeprocessor.js"],
    lenient = True,
    visibility = [
        ":external",
        ":internal",
    ],
    deps = [
        ":elementweakmap",
        ":noclobber",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/log",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagblacklist",
    srcs = ["tagblacklist.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "tagwhitelist",
    srcs = ["tagwhitelist.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "unsafe",
    srcs = ["unsafe.js"],
    lenient = True,
    visibility = ["//closure/goog/html/sanitizer:approved_for_unsafe_config"],
    deps = [
        ":htmlsanitizer",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)
