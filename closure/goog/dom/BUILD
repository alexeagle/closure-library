load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":abstractmultirange",
        ":abstractrange",
        ":annotate",
        ":asserts",
        ":attr",
        ":browserfeature",
        ":bufferedviewportsizemonitor",
        ":classes",
        ":classlist",
        ":controlrange",
        ":dataset",
        ":dom",
        ":element",
        ":fontsizemonitor",
        ":forms",
        ":fullscreen",
        ":htmlelement",
        ":iframe",
        ":inputtype",
        ":iter",
        ":multirange",
        ":nodeiterator",
        ":nodeoffset",
        ":nodetype",
        ":range",
        ":rangeendpoint",
        ":safe",
        ":savedcaretrange",
        ":savedrange",
        ":selection",
        ":tagiterator",
        ":tagname",
        ":tags",
        ":textassert",
        ":textrange",
        ":textrangeiterator",
        ":uri",
        ":vendor",
        ":viewportsizemonitor",
        ":xml",
        "//closure/goog/dom/animationframe:all_js",
        "//closure/goog/dom/browserrange:all_js",
        "//closure/goog/dom/pattern:all_js",
        "//closure/goog/dom/pattern/callback:all_js",
    ],
)

closure_js_library(
    name = "abstractmultirange",
    srcs = ["abstractmultirange.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        ":dom",
        ":textrange",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "abstractrange",
    srcs = ["abstractrange.js"],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":savedcaretrange",
        ":tagiterator",
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "annotate",
    srcs = ["annotate.js"],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":safe",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "asserts",
    srcs = ["asserts.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "attr",
    srcs = ["attr.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "browserfeature",
    srcs = ["browserfeature.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "bufferedviewportsizemonitor",
    srcs = ["bufferedviewportsizemonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/async:delay",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "classes",
    srcs = ["classes.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "classlist",
    srcs = ["classlist.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "controlrange",
    srcs = ["controlrange.js"],
    lenient = True,
    deps = [
        ":abstractmultirange",
        ":abstractrange",
        ":dom",
        ":savedrange",
        ":tagiterator",
        ":textrange",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/iter",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "dataset",
    srcs = ["dataset.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/string",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["dom.js"],
    lenient = True,
    deps = [
        ":browserfeature",
        ":nodetype",
        ":safe",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "element",
    srcs = ["element.js"],
    lenient = True,
    deps = [
        ":nodetype",
        ":tagname",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "fontsizemonitor",
    srcs = ["fontsizemonitor.js"],
    lenient = True,
    deps = [
        ":dom",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "forms",
    srcs = ["forms.js"],
    lenient = True,
    deps = [
        ":inputtype",
        ":safe",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/structs:map",
        "//closure/goog/window",
    ],
)

closure_js_library(
    name = "fullscreen",
    srcs = ["fullscreen.js"],
    lenient = True,
    deps = [
        ":dom",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "htmlelement",
    srcs = ["htmlelement.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "iframe",
    srcs = ["iframe.js"],
    lenient = True,
    deps = [
        ":dom",
        ":safe",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "inputtype",
    srcs = ["inputtype.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "iter",
    srcs = ["iter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "multirange",
    srcs = ["multirange.js"],
    lenient = True,
    deps = [
        ":abstractmultirange",
        ":abstractrange",
        ":dom",
        ":savedrange",
        ":textrange",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/iter",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "nodeiterator",
    srcs = ["nodeiterator.js"],
    lenient = True,
    deps = [
        ":tagiterator",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "nodeoffset",
    srcs = ["nodeoffset.js"],
    lenient = True,
    deps = [
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "nodetype",
    srcs = ["nodetype.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "range",
    srcs = ["range.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        ":browserfeature",
        ":controlrange",
        ":dom",
        ":multirange",
        ":nodetype",
        ":textrange",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "rangeendpoint",
    srcs = ["rangeendpoint.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "safe",
    srcs = ["safe.js"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "savedcaretrange",
    srcs = ["savedcaretrange.js"],
    lenient = True,
    deps = [
        ":dom",
        ":savedrange",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "savedrange",
    srcs = ["savedrange.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "selection",
    srcs = ["selection.js"],
    lenient = True,
    deps = [
        ":inputtype",
        "//closure/goog:base",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagiterator",
    srcs = ["tagiterator.js"],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        "//closure/goog:base",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "tagname",
    srcs = ["tagname.js"],
    lenient = True,
    deps = [
        ":htmlelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "tags",
    srcs = ["tags.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "textassert",
    srcs = ["textassert.js"],
    lenient = True,
    deps = [
        ":dom",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "textrange",
    srcs = ["textrange.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        ":dom",
        ":savedrange",
        ":tagname",
        ":textrangeiterator",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom/browserrange",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "textrangeiterator",
    srcs = ["textrangeiterator.js"],
    lenient = True,
    deps = [
        ":abstractrange",
        ":dom",
        ":nodetype",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "uri",
    srcs = ["uri.js"],
    lenient = True,
    deps = [
        ":dom",
        ":safe",
        ":tagname",
        "//closure/goog:base",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "vendor",
    srcs = ["vendor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "viewportsizemonitor",
    srcs = ["viewportsizemonitor.js"],
    lenient = True,
    deps = [
        ":dom",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "xml",
    srcs = ["xml.js"],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":safe",
        "//closure/goog:base",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/useragent",
    ],
)
