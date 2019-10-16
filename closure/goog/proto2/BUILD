package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":descriptor",
        ":fielddescriptor",
        ":lazydeserializer",
        ":message",
        ":objectserializer",
        ":pbliteserializer",
        ":serializer",
        ":textformatserializer",
        ":util",
    ],
)

closure_js_library(
    name = "descriptor",
    srcs = ["//closure/goog/proto2:descriptor.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "fielddescriptor",
    srcs = ["//closure/goog/proto2:fielddescriptor.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "lazydeserializer",
    srcs = ["//closure/goog/proto2:lazydeserializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/proto2:message",
        "//closure/goog/proto2:serializer",
    ],
)

closure_js_library(
    name = "message",
    srcs = ["//closure/goog/proto2:message.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/proto2:descriptor",
        "//closure/goog/proto2:fielddescriptor",
    ],
)

closure_js_library(
    name = "objectserializer",
    srcs = ["//closure/goog/proto2:objectserializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/proto2:fielddescriptor",
        "//closure/goog/proto2:serializer",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "pbliteserializer",
    srcs = ["//closure/goog/proto2:pbliteserializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/proto2:fielddescriptor",
        "//closure/goog/proto2:lazydeserializer",
        "//closure/goog/proto2:serializer",
    ],
)

closure_js_library(
    name = "serializer",
    srcs = ["//closure/goog/proto2:serializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/proto2:fielddescriptor",
        "//closure/goog/proto2:message",
    ],
)

closure_js_library(
    name = "test.pb",
    testonly = True,
    srcs = ["//closure/goog/proto2:test.pb.js"],
    lenient = True,
    deps = ["//closure/goog/proto2:message"],
)

closure_js_library(
    name = "textformatserializer",
    srcs = ["//closure/goog/proto2:textformatserializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/object",
        "//closure/goog/proto2:fielddescriptor",
        "//closure/goog/proto2:message",
        "//closure/goog/proto2:serializer",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "util",
    srcs = ["//closure/goog/proto2:util.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)
