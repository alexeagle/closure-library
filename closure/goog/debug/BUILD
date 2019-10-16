package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":console",
        ":debug",
        ":debugwindow",
        ":divconsole",
        ":entrypointregistry",
        ":error",
        ":errorcontext",
        ":errorhandler",
        ":errorhandlerweakdep",
        ":errorreporter",
        ":fancywindow",
        ":formatter",
        ":fpsdisplay",
        ":logbuffer",
        ":logger",
        ":logrecord",
        ":logrecordserializer",
        ":relativetimeprovider",
        ":tracer",
        "//closure/goog/debug/devcss:all_js",
    ],
)

closure_js_library(
    name = "console",
    srcs = ["//closure/goog/debug:console.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:formatter",
        "//closure/goog/debug:logger",
    ],
)

closure_js_library(
    name = "debug",
    srcs = ["//closure/goog/debug:debug.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug:errorcontext",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "debugwindow",
    srcs = ["//closure/goog/debug:debugwindow.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:formatter",
        "//closure/goog/debug:logger",
        "//closure/goog/dom:safe",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/string:const",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "divconsole",
    srcs = ["//closure/goog/debug:divconsole.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:formatter",
        "//closure/goog/debug:logger",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/string:const",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "entrypointregistry",
    srcs = ["//closure/goog/debug:entrypointregistry.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "error",
    srcs = ["//closure/goog/debug:error.js"],
    lenient = True,
)

closure_js_library(
    name = "errorcontext",
    srcs = ["//closure/goog/debug:errorcontext.js"],
    lenient = True,
)

closure_js_library(
    name = "errorhandler",
    srcs = ["//closure/goog/debug:errorhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/debug:error",
        "//closure/goog/debug:tracer",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "errorhandlerweakdep",
    srcs = ["//closure/goog/debug:errorhandlerweakdep.js"],
    lenient = True,
)

closure_js_library(
    name = "errorreporter",
    srcs = ["//closure/goog/debug:errorreporter.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/debug:error",
        "//closure/goog/debug:errorcontext",
        "//closure/goog/debug:errorhandler",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "fancywindow",
    srcs = ["//closure/goog/debug:fancywindow.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:debugwindow",
        "//closure/goog/debug:logger",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "formatter",
    srcs = ["//closure/goog/debug:formatter.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug",
        "//closure/goog/debug:logger",
        "//closure/goog/debug:relativetimeprovider",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "fpsdisplay",
    srcs = ["//closure/goog/debug:fpsdisplay.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:animationdelay",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "logbuffer",
    srcs = ["//closure/goog/debug:logbuffer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:logrecord",
    ],
)

closure_js_library(
    name = "logger",
    srcs = ["//closure/goog/debug:logger.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:logbuffer",
        "//closure/goog/debug:logrecord",
    ],
)

closure_js_library(
    name = "logrecord",
    srcs = ["//closure/goog/debug:logrecord.js"],
    lenient = True,
)

closure_js_library(
    name = "logrecordserializer",
    srcs = ["//closure/goog/debug:logrecordserializer.js"],
    lenient = True,
    deps = [
        "//closure/goog/debug:logger",
        "//closure/goog/debug:logrecord",
        "//closure/goog/json",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "relativetimeprovider",
    srcs = ["//closure/goog/debug:relativetimeprovider.js"],
    lenient = True,
)

closure_js_library(
    name = "tracer",
    srcs = ["//closure/goog/debug:tracer.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:logger",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/structs:map",
        "//closure/goog/structs:simplepool",
    ],
)
