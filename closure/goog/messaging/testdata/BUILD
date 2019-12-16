load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":portchannel_worker",
        ":portnetwork_worker1",
        ":portnetwork_worker2",
    ],
)

closure_js_library(
    name = "portchannel_worker",
    srcs = ["portchannel_worker.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/messaging:portchannel",
    ],
)

closure_js_library(
    name = "portnetwork_worker1",
    srcs = ["portnetwork_worker1.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)

closure_js_library(
    name = "portnetwork_worker2",
    srcs = ["portnetwork_worker2.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)
