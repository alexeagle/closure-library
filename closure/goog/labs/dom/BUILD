load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "pagevisibilitymonitor",
    srcs = ["pagevisibilitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/memoize",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:vendor",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)
