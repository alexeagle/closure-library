package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/result:deferredadaptor.js"],
    lenient = True,
    deps = [
        "//closure/goog/result:result_interface",
        "//closure/goog/result:resultutil",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "dependentresult",
    srcs = ["//closure/goog/result:dependentresult.js"],
    lenient = True,
    deps = ["//closure/goog/result:result_interface"],
)

closure_js_library(
    name = "result_interface",
    srcs = ["//closure/goog/result:result_interface.js"],
    lenient = True,
    deps = ["//closure/goog/promise:thenable"],
)

closure_js_library(
    name = "resultutil",
    srcs = ["//closure/goog/result:resultutil.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/result:dependentresult",
        "//closure/goog/result:result_interface",
        "//closure/goog/result:simpleresult",
    ],
)

closure_js_library(
    name = "simpleresult",
    srcs = ["//closure/goog/result:simpleresult.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:error",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
        "//closure/goog/result:result_interface",
    ],
)
