load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["console.js"],
    lenient = True,
    deps = [
        ":formatter",
        ":logger",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "debug",
    srcs = ["debug.js"],
    lenient = True,
    deps = [
        ":errorcontext",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "debugwindow",
    srcs = ["debugwindow.js"],
    lenient = True,
    deps = [
        ":formatter",
        ":logger",
        "//closure/goog:base",
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
    srcs = ["divconsole.js"],
    lenient = True,
    deps = [
        ":formatter",
        ":logger",
        "//closure/goog:base",
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
    srcs = ["entrypointregistry.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "error",
    srcs = ["error.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "errorcontext",
    srcs = ["errorcontext.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "errorhandler",
    srcs = ["errorhandler.js"],
    lenient = True,
    deps = [
        ":debug",
        ":entrypointregistry",
        ":error",
        ":tracer",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "errorhandlerweakdep",
    srcs = ["errorhandlerweakdep.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "errorreporter",
    srcs = ["errorreporter.js"],
    lenient = True,
    deps = [
        ":debug",
        ":entrypointregistry",
        ":error",
        ":errorcontext",
        ":errorhandler",
        "//closure/goog:base",
        "//closure/goog/asserts",
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
    srcs = ["fancywindow.js"],
    lenient = True,
    deps = [
        ":debugwindow",
        ":logger",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
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
    srcs = ["formatter.js"],
    lenient = True,
    deps = [
        ":debug",
        ":logger",
        ":relativetimeprovider",
        "//closure/goog:base",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "fpsdisplay",
    srcs = ["fpsdisplay.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/async:animationdelay",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "logbuffer",
    srcs = ["logbuffer.js"],
    lenient = True,
    deps = [
        ":logrecord",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "logger",
    srcs = ["logger.js"],
    lenient = True,
    deps = [
        ":debug",
        ":logbuffer",
        ":logrecord",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "logrecord",
    srcs = ["logrecord.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "logrecordserializer",
    srcs = ["logrecordserializer.js"],
    lenient = True,
    deps = [
        ":logger",
        ":logrecord",
        "//closure/goog:base",
        "//closure/goog/json",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "relativetimeprovider",
    srcs = ["relativetimeprovider.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "tracer",
    srcs = ["tracer.js"],
    lenient = True,
    deps = [
        ":logger",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/structs:map",
        "//closure/goog/structs:simplepool",
    ],
)
