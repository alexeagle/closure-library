package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":errorcode",
        ":errorhandlingmechanism",
        ":html5localstorage",
        ":html5sessionstorage",
        ":html5webstorage",
        ":ieuserdata",
        ":iterablemechanism",
        ":mechanism",
        ":mechanismfactory",
        ":prefixedmechanism",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["//closure/goog/storage/mechanism:errorcode.js"],
    lenient = True,
)

closure_js_library(
    name = "errorhandlingmechanism",
    srcs = ["//closure/goog/storage/mechanism:errorhandlingmechanism.js"],
    lenient = True,
    deps = ["//closure/goog/storage/mechanism"],
)

closure_js_library(
    name = "html5localstorage",
    srcs = ["//closure/goog/storage/mechanism:html5localstorage.js"],
    lenient = True,
    deps = ["//closure/goog/storage/mechanism:html5webstorage"],
)

closure_js_library(
    name = "html5sessionstorage",
    srcs = ["//closure/goog/storage/mechanism:html5sessionstorage.js"],
    lenient = True,
    deps = ["//closure/goog/storage/mechanism:html5webstorage"],
)

closure_js_library(
    name = "html5webstorage",
    srcs = ["//closure/goog/storage/mechanism:html5webstorage.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:errorcode",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)

closure_js_library(
    name = "ieuserdata",
    srcs = ["//closure/goog/storage/mechanism:ieuserdata.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:errorcode",
        "//closure/goog/storage/mechanism:iterablemechanism",
        "//closure/goog/structs:map",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "iterablemechanism",
    srcs = ["//closure/goog/storage/mechanism:iterablemechanism.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism",
    ],
)

closure_js_library(
    name = "iterablemechanismtester",
    testonly = True,
    srcs = ["//closure/goog/storage/mechanism:iterablemechanismtester.js"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanism",
    srcs = ["//closure/goog/storage/mechanism:mechanism.js"],
    lenient = True,
)

closure_js_library(
    name = "mechanismfactory",
    srcs = ["//closure/goog/storage/mechanism:mechanismfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/storage/mechanism:html5localstorage",
        "//closure/goog/storage/mechanism:html5sessionstorage",
        "//closure/goog/storage/mechanism:ieuserdata",
        "//closure/goog/storage/mechanism:prefixedmechanism",
    ],
)

closure_js_library(
    name = "mechanismseparationtester",
    testonly = True,
    srcs = ["//closure/goog/storage/mechanism:mechanismseparationtester.js"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:mechanismtestdefinition",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanismsharingtester",
    testonly = True,
    srcs = ["//closure/goog/storage/mechanism:mechanismsharingtester.js"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:mechanismtestdefinition",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanismtestdefinition",
    testonly = True,
    srcs = ["//closure/goog/storage/mechanism:mechanismtestdefinition.js"],
    lenient = True,
)

closure_js_library(
    name = "mechanismtester",
    testonly = True,
    srcs = ["//closure/goog/storage/mechanism:mechanismtester.js"],
    lenient = True,
    deps = [
        "//closure/goog/storage/mechanism:errorcode",
        "//closure/goog/testing:asserts",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)

closure_js_library(
    name = "prefixedmechanism",
    srcs = ["//closure/goog/storage/mechanism:prefixedmechanism.js"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)
