load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":ac",
        ":arraymatcher",
        ":autocomplete",
        ":cachingmatcher",
        ":inputhandler",
        ":remote",
        ":remotearraymatcher",
        ":renderer",
        ":renderoptions",
        ":richinputhandler",
        ":richremote",
        ":richremotearraymatcher",
    ],
)

closure_js_library(
    name = "ac",
    srcs = ["ac.js"],
    lenient = True,
    deps = [
        ":arraymatcher",
        ":autocomplete",
        ":inputhandler",
        ":renderer",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "arraymatcher",
    srcs = ["arraymatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "autocomplete",
    srcs = ["autocomplete.js"],
    lenient = True,
    deps = [
        ":renderoptions",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "cachingmatcher",
    srcs = ["cachingmatcher.js"],
    lenient = True,
    deps = [
        ":arraymatcher",
        ":renderoptions",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/async:throttle",
    ],
)

closure_js_library(
    name = "inputhandler",
    srcs = ["inputhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:selection",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "remote",
    srcs = ["remote.js"],
    lenient = True,
    deps = [
        ":autocomplete",
        ":inputhandler",
        ":remotearraymatcher",
        ":renderer",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "remotearraymatcher",
    srcs = ["remotearraymatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "renderer",
    srcs = ["renderer.js"],
    lenient = True,
    deps = [
        ":autocomplete",
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/fx:dom",
        "//closure/goog/positioning",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:idgenerator",
    ],
)

closure_js_library(
    name = "renderoptions",
    srcs = ["renderoptions.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "richinputhandler",
    srcs = ["richinputhandler.js"],
    lenient = True,
    deps = [
        ":inputhandler",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "richremote",
    srcs = ["richremote.js"],
    lenient = True,
    deps = [
        ":autocomplete",
        ":remote",
        ":renderer",
        ":richinputhandler",
        ":richremotearraymatcher",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "richremotearraymatcher",
    srcs = ["richremotearraymatcher.js"],
    lenient = True,
    deps = [
        ":remotearraymatcher",
        "//closure/goog:base",
        "//closure/goog/dom",
    ],
)
