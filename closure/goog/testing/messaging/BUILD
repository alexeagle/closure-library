package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "mockmessagechannel",
    testonly = True,
    srcs = ["//closure/goog/testing/messaging:mockmessagechannel.js"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:abstractchannel",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:mockcontrol",
    ],
)

closure_js_library(
    name = "mockmessageevent",
    testonly = True,
    srcs = ["//closure/goog/testing/messaging:mockmessageevent.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/testing/events",
    ],
)

closure_js_library(
    name = "mockmessageport",
    testonly = True,
    srcs = ["//closure/goog/testing/messaging:mockmessageport.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/testing:mockcontrol",
    ],
)

closure_js_library(
    name = "mockportnetwork",
    testonly = True,
    srcs = ["//closure/goog/testing/messaging:mockportnetwork.js"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:portnetwork",
        "//closure/goog/testing/messaging:mockmessagechannel",
    ],
)
