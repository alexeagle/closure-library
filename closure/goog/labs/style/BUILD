load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "pixeldensitymonitor",
    srcs = ["pixeldensitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)
