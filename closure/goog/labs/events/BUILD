package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":nondisposableeventtarget",
        ":touch",
    ],
)

closure_js_library(
    name = "nondisposableeventtarget",
    srcs = ["//closure/goog/labs/events:nondisposableeventtarget.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:event",
        "//closure/goog/events:listenable",
        "//closure/goog/events:listenermap",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "touch",
    srcs = ["//closure/goog/labs/events:touch.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtype",
        "//closure/goog/string",
    ],
)
