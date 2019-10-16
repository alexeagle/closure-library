package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "blob",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:blob.js"],
    lenient = True,
    deps = [
        "//closure/goog/crypt",
        "//closure/goog/crypt:base64",
    ],
)

closure_js_library(
    name = "entry",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:entry.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/fs:entry",
        "//closure/goog/fs:entryimpl",
        "//closure/goog/fs:error",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/testing/fs:file",
        "//closure/goog/testing/fs:filewriter",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "file",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:file.js"],
    lenient = True,
    deps = ["//closure/goog/testing/fs:blob"],
)

closure_js_library(
    name = "filereader",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:filereader.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filereader",
        "//closure/goog/testing/fs:blob",
        "//closure/goog/testing/fs:progressevent",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "filesystem",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:filesystem.js"],
    lenient = True,
    deps = [
        "//closure/goog/fs:filesystem",
        "//closure/goog/testing/fs:entry",
    ],
)

closure_js_library(
    name = "filewriter",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:filewriter.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filesaver",
        "//closure/goog/string",
        "//closure/goog/testing/fs:blob",
        "//closure/goog/testing/fs:file",
        "//closure/goog/testing/fs:progressevent",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "fs",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:fs.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/fs",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing/fs:blob",
        "//closure/goog/testing/fs:filesystem",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "progressevent",
    testonly = True,
    srcs = ["//closure/goog/testing/fs:progressevent.js"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)
