load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(
    default_visibility = ["//visibility:public"],
)

closure_js_library(
    name = "result",
    srcs = [],
    lenient = True,
    exports = [
        ":deferredadaptor",
        ":dependentresult",
        ":result_interface",
        ":resultutil",
        ":simpleresult",
    ],
)

closure_js_library(
    name = "deferredadaptor",
    srcs = ["deferredadaptor.js"],
    lenient = True,
    deps = [
        ":result_interface",
        ":resultutil",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dependentresult",
    srcs = ["dependentresult.js"],
    lenient = True,
    deps = [
        ":result_interface",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "result_interface",
    srcs = ["result_interface.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/promise:thenable",
    ],
)

closure_js_library(
    name = "resultutil",
    srcs = ["resultutil.js"],
    lenient = True,
    deps = [
        ":dependentresult",
        ":result_interface",
        ":simpleresult",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "simpleresult",
    srcs = ["simpleresult.js"],
    lenient = True,
    deps = [
        ":result_interface",
        "//closure/goog:base",
        "//closure/goog/debug:error",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
    ],
)
