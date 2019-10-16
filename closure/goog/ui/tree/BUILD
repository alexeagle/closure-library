package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":basenode",
        ":treecontrol",
        ":treenode",
        ":typeahead",
    ],
)

closure_js_library(
    name = "basenode",
    srcs = ["//closure/goog/ui/tree:basenode.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom:safe",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/string",
        "//closure/goog/string:stringbuffer",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "treecontrol",
    srcs = ["//closure/goog/ui/tree:treecontrol.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/events:keyhandler",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/ui/tree:basenode",
        "//closure/goog/ui/tree:treenode",
        "//closure/goog/ui/tree:typeahead",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "treenode",
    srcs = ["//closure/goog/ui/tree:treenode.js"],
    lenient = True,
    deps = ["//closure/goog/ui/tree:basenode"],
)

closure_js_library(
    name = "typeahead",
    srcs = ["//closure/goog/ui/tree:typeahead.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:keycodes",
        "//closure/goog/string",
        "//closure/goog/structs:trie",
    ],
)
