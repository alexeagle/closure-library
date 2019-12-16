load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":blob",
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
    name = "blob",
    srcs = ["blob.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//javascript/externs:browser_symbols_lib",
    ],
)

closure_js_library(
    name = "entry",
    srcs = ["entry.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "entryimpl",
    srcs = ["entryimpl.js"],
    lenient = True,
    deps = [
        ":entry",
        ":error",
        ":filewriter",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/functions",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "error",
    srcs = ["error.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "filereader",
    srcs = ["filereader.js"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "filesaver",
    srcs = ["filesaver.js"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "filesystem",
    srcs = ["filesystem.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "filesystemimpl",
    srcs = ["filesystemimpl.js"],
    lenient = True,
    deps = [
        ":entryimpl",
        ":filesystem",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "filewriter",
    srcs = ["filewriter.js"],
    lenient = True,
    deps = [
        ":error",
        ":filesaver",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "fs",
    srcs = ["fs.js"],
    lenient = True,
    deps = [
        ":blob",
        ":error",
        ":filereader",
        ":filesystemimpl",
        ":url",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/useragent",
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

closure_js_library(
    name = "url",
    srcs = ["url.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
