load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["descriptor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "fielddescriptor",
    srcs = ["fielddescriptor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "lazydeserializer",
    srcs = ["lazydeserializer.js"],
    lenient = True,
    deps = [
        ":message",
        ":serializer",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "message",
    srcs = ["message.js"],
    lenient = True,
    deps = [
        ":descriptor",
        ":fielddescriptor",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "objectserializer",
    srcs = ["objectserializer.js"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":serializer",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "package_test.pb",
    testonly = 1,
    srcs = ["package_test.pb.js"],
    lenient = True,
    deps = [
        ":message",
        ":test.pb",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "pbliteserializer",
    srcs = ["pbliteserializer.js"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":lazydeserializer",
        ":serializer",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "serializer",
    srcs = ["serializer.js"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":message",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "test.pb",
    testonly = 1,
    srcs = ["test.pb.js"],
    lenient = True,
    deps = [
        ":message",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "textformatserializer",
    srcs = ["textformatserializer.js"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":message",
        ":serializer",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "util",
    srcs = ["util.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

proto_library(
    name = "test_proto",
    srcs = ["test.proto"],
)

proto_library(
    name = "package_test_proto",
    srcs = ["package_test.proto"],
    deps = [":test_proto"],
)
