package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    ],
)

closure_js_library(
    name = "abstractmultirange",
    srcs = ["//closure/goog/dom:abstractmultirange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:textrange",
    ],
)

closure_js_library(
    name = "abstractrange",
    srcs = ["//closure/goog/dom:abstractrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:savedcaretrange",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "annotate",
    srcs = ["//closure/goog/dom:annotate.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "asserts",
    srcs = ["//closure/goog/dom:asserts.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "attr",
    srcs = ["//closure/goog/dom:attr.js"],
    lenient = True,
)

closure_js_library(
    name = "browserfeature",
    srcs = ["//closure/goog/dom:browserfeature.js"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

closure_js_library(
    name = "bufferedviewportsizemonitor",
    srcs = ["//closure/goog/dom:bufferedviewportsizemonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:delay",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "classes",
    srcs = ["//closure/goog/dom:classes.js"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

closure_js_library(
    name = "classlist",
    srcs = ["//closure/goog/dom:classlist.js"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

closure_js_library(
    name = "controlrange",
    srcs = ["//closure/goog/dom:controlrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractmultirange",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:savedrange",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom:textrange",
        "//closure/goog/iter",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "dataset",
    srcs = ["//closure/goog/dom:dataset.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/string",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["//closure/goog/dom:dom.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:browserfeature",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
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
    name = "fontsizemonitor",
    srcs = ["//closure/goog/dom:fontsizemonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "forms",
    srcs = ["//closure/goog/dom:forms.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/structs:map",
        "//closure/goog/window",
    ],
)

closure_js_library(
    name = "fullscreen",
    srcs = ["//closure/goog/dom:fullscreen.js"],
    lenient = True,
    deps = ["//closure/goog/dom"],
)

closure_js_library(
    name = "htmlelement",
    srcs = ["//closure/goog/dom:htmlelement.js"],
    lenient = True,
)

closure_js_library(
    name = "iframe",
    srcs = ["//closure/goog/dom:iframe.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "inputtype",
    srcs = ["//closure/goog/dom:inputtype.js"],
    lenient = True,
)

closure_js_library(
    name = "iter",
    srcs = ["//closure/goog/dom:iter.js"],
    lenient = True,
    deps = ["//closure/goog/iter"],
)

closure_js_library(
    name = "multirange",
    srcs = ["//closure/goog/dom:multirange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractmultirange",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:savedrange",
        "//closure/goog/dom:textrange",
        "//closure/goog/iter",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "nodeiterator",
    srcs = ["//closure/goog/dom:nodeiterator.js"],
    lenient = True,
    deps = ["//closure/goog/dom:tagiterator"],
)

closure_js_library(
    name = "nodeoffset",
    srcs = ["//closure/goog/dom:nodeoffset.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "nodetype",
    srcs = ["//closure/goog/dom:nodetype.js"],
    lenient = True,
)

closure_js_library(
    name = "range",
    srcs = ["//closure/goog/dom:range.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:browserfeature",
        "//closure/goog/dom:controlrange",
        "//closure/goog/dom:multirange",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:textrange",
    ],
)

closure_js_library(
    name = "rangeendpoint",
    srcs = ["//closure/goog/dom:rangeendpoint.js"],
    lenient = True,
)

closure_js_library(
    name = "safe",
    srcs = ["//closure/goog/dom:safe.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:asserts",
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
    srcs = ["//closure/goog/dom:savedcaretrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:savedrange",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "savedrange",
    srcs = ["//closure/goog/dom:savedrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "selection",
    srcs = ["//closure/goog/dom:selection.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:inputtype",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagiterator",
    srcs = ["//closure/goog/dom:tagiterator.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "tagname",
    srcs = ["//closure/goog/dom:tagname.js"],
    lenient = True,
    deps = ["//closure/goog/dom:htmlelement"],
)

closure_js_library(
    name = "tags",
    srcs = ["//closure/goog/dom:tags.js"],
    lenient = True,
    deps = ["//closure/goog/object"],
)

closure_js_library(
    name = "textassert",
    srcs = ["//closure/goog/dom:textassert.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "textrange",
    srcs = ["//closure/goog/dom:textrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:savedrange",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:textrangeiterator",
        "//closure/goog/dom/browserrange",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "textrangeiterator",
    srcs = ["//closure/goog/dom:textrangeiterator.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "uri",
    srcs = ["//closure/goog/dom:uri.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "vendor",
    srcs = ["//closure/goog/dom:vendor.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "viewportsizemonitor",
    srcs = ["//closure/goog/dom:viewportsizemonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "xml",
    srcs = ["//closure/goog/dom:xml.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent",
    ],
)
