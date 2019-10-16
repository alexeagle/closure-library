package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":entry",
        ":entryimpl",
        ":error",
        ":filereader",
        ":filesaver",
        ":filesystem",
        ":filesystemimpl",
        ":filewriter",
        ":fs",
        ":progressevent",
        ":url",
    ],
)

closure_js_library(
    name = "entry",
    srcs = ["//closure/goog/fs:entry.js"],
    lenient = True,
)

closure_js_library(
    name = "entryimpl",
    srcs = ["//closure/goog/fs:entryimpl.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/fs:entry",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filewriter",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "error",
    srcs = ["//closure/goog/fs:error.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "filereader",
    srcs = ["//closure/goog/fs:filereader.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:error",
        "//closure/goog/fs:progressevent",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "filesaver",
    srcs = ["//closure/goog/fs:filesaver.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:error",
        "//closure/goog/fs:progressevent",
    ],
)

closure_js_library(
    name = "filesystem",
    srcs = ["//closure/goog/fs:filesystem.js"],
    lenient = True,
)

closure_js_library(
    name = "filesystemimpl",
    srcs = ["//closure/goog/fs:filesystemimpl.js"],
    lenient = True,
    deps = [
        "//closure/goog/fs:entryimpl",
        "//closure/goog/fs:filesystem",
    ],
)

closure_js_library(
    name = "filewriter",
    srcs = ["//closure/goog/fs:filewriter.js"],
    lenient = True,
    deps = [
        "//closure/goog/fs:error",
        "//closure/goog/fs:filesaver",
    ],
)

closure_js_library(
    name = "fs",
    srcs = ["//closure/goog/fs:fs.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filereader",
        "//closure/goog/fs:filesystemimpl",
        "//closure/goog/fs:url",
        "//closure/goog/useragent",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "progressevent",
    srcs = ["//closure/goog/fs:progressevent.js"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

closure_js_library(
    name = "url",
    srcs = ["//closure/goog/fs:url.js"],
    lenient = True,
)
