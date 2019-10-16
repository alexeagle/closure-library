package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractmoduleloader",
        ":basemodule",
        ":loader",
        ":module",
        ":moduleinfo",
        ":moduleloadcallback",
        ":moduleloader",
        ":modulemanager",
    ],
)

closure_js_library(
    name = "abstractmoduleloader",
    srcs = ["//closure/goog/module:abstractmoduleloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/module",
        "//closure/goog/module:moduleinfo",
    ],
)

closure_js_library(
    name = "basemodule",
    srcs = ["//closure/goog/module:basemodule.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/module",
    ],
)

closure_js_library(
    name = "loader",
    srcs = ["//closure/goog/module:loader.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/module",
        "//closure/goog/object",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "module",
    srcs = ["//closure/goog/module:module.js"],
    lenient = True,
)

closure_js_library(
    name = "moduleinfo",
    srcs = ["//closure/goog/module:moduleinfo.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:nexttick",
        "//closure/goog/disposable",
        "//closure/goog/functions",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/module",
        "//closure/goog/module:basemodule",
        "//closure/goog/module:moduleloadcallback",
    ],
)

closure_js_library(
    name = "moduleloadcallback",
    srcs = ["//closure/goog/module:moduleloadcallback.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/module",
    ],
)

closure_js_library(
    name = "moduleloader",
    srcs = ["//closure/goog/module:moduleloader.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventid",
        "//closure/goog/events:eventtarget",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/log",
        "//closure/goog/module:abstractmoduleloader",
        "//closure/goog/net:bulkloader",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:jsloader",
        "//closure/goog/timer",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "modulemanager",
    srcs = ["//closure/goog/module:modulemanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:tracer",
        "//closure/goog/disposable",
        "//closure/goog/disposable:idisposable",
        "//closure/goog/loader:abstractmodulemanager",
        "//closure/goog/loader:activemodulemanager",
        "//closure/goog/log",
        "//closure/goog/module",
        "//closure/goog/module:moduleinfo",
        "//closure/goog/module:moduleloadcallback",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)
