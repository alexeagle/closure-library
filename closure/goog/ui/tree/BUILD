load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":basenode",
        ":treecontrol",
        ":treenode",
        ":typeahead",
    ],
)

closure_js_library(
    name = "basenode",
    srcs = ["basenode.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["treecontrol.js"],
    lenient = True,
    deps = [
        ":basenode",
        ":treenode",
        ":typeahead",
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/events:keyhandler",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "treenode",
    srcs = ["treenode.js"],
    lenient = True,
    deps = [
        ":basenode",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "typeahead",
    srcs = ["typeahead.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/events:keycodes",
        "//closure/goog/string",
        "//closure/goog/structs:trie",
    ],
)
