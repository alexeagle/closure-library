load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":blob",
        ":entry",
        ":file",
        ":filereader",
        ":filesystem",
        ":filewriter",
        ":fs",
        ":progressevent",
    ],
)

closure_js_library(
    name = "blob",
    srcs = ["blob.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/crypt",
        "//closure/goog/crypt:base64",
    ],
)

closure_js_library(
    name = "entry",
    srcs = ["entry.js"],
    lenient = True,
    deps = [
        ":file",
        ":filewriter",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//third_party/closure/goog/fs:entry",
        "//third_party/closure/goog/fs:entryimpl",
        "//third_party/closure/goog/fs:error",
    ],
)

closure_js_library(
    name = "file",
    srcs = ["file.js"],
    lenient = True,
    deps = [
        ":blob",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "filereader",
    srcs = ["filereader.js"],
    lenient = True,
    deps = [
        ":blob",
        ":progressevent",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/timer",
        "//third_party/closure/goog/fs:error",
        "//third_party/closure/goog/fs:filereader",
    ],
)

closure_js_library(
    name = "filesystem",
    srcs = ["filesystem.js"],
    lenient = True,
    deps = [
        ":entry",
        "//closure/goog:base",
        "//third_party/closure/goog/fs:filesystem",
    ],
)

closure_js_library(
    name = "filewriter",
    srcs = ["filewriter.js"],
    lenient = True,
    deps = [
        ":blob",
        ":file",
        ":progressevent",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//third_party/closure/goog/fs:error",
        "//third_party/closure/goog/fs:filesaver",
    ],
)

closure_js_library(
    name = "fs",
    srcs = ["fs.js"],
    lenient = True,
    deps = [
        ":blob",
        ":filesystem",
        "//closure/goog/fs",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "progressevent",
    srcs = ["progressevent.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:event",
    ],
)
