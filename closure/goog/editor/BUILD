package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":browserfeature",
        ":clicktoeditwrapper",
        ":command",
        ":contenteditablefield",
        ":defines",
        ":field",
        ":focus",
        ":icontent",
        ":link",
        ":node",
        ":plugin",
        ":plugin_impl",
        ":range",
        ":seamlessfield",
        ":style",
        ":table",
        "//closure/goog/editor/plugins:all_js",
    ],
)

closure_js_library(
    name = "browserfeature",
    srcs = ["//closure/goog/editor:browserfeature.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor:defines",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)

closure_js_library(
    name = "clicktoeditwrapper",
    srcs = ["//closure/goog/editor:clicktoeditwrapper.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:range",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "command",
    srcs = ["//closure/goog/editor:command.js"],
    lenient = True,
)

closure_js_library(
    name = "contenteditablefield",
    srcs = ["//closure/goog/editor:contenteditablefield.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/editor:field",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "defines",
    srcs = ["//closure/goog/editor:defines.js"],
    lenient = True,
)

closure_js_library(
    name = "field",
    srcs = ["//closure/goog/editor:field.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/async:delay",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:range",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:icontent",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin_impl",
        "//closure/goog/editor:range",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "focus",
    srcs = ["//closure/goog/editor:focus.js"],
    lenient = True,
    deps = ["//closure/goog/dom:selection"],
)

closure_js_library(
    name = "icontent",
    srcs = ["//closure/goog/editor:icontent.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "link",
    srcs = ["//closure/goog/editor:link.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:range",
        "//closure/goog/string",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "node",
    srcs = ["//closure/goog/editor:node.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:iter",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/iter",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "plugin",
    srcs = ["//closure/goog/editor:plugin.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor:field",
        "//closure/goog/editor:plugin_impl",
    ],
)

closure_js_library(
    name = "plugin_impl",
    srcs = ["//closure/goog/editor:plugin_impl.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/reflect",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "range",
    srcs = ["//closure/goog/editor:range.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:rangeendpoint",
        "//closure/goog/dom:savedcaretrange",
        "//closure/goog/editor:node",
        "//closure/goog/editor:style",
        "//closure/goog/iter",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "seamlessfield",
    srcs = ["//closure/goog/editor:seamlessfield.js"],
    lenient = True,
    deps = [
        "//closure/goog/cssom/iframe:style",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:field",
        "//closure/goog/editor:icontent",
        "//closure/goog/editor:node",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "style",
    srcs = ["//closure/goog/editor:style.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/object",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "table",
    srcs = ["//closure/goog/editor:table.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)
