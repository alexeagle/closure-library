package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/ui/ac:ac.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui/ac:arraymatcher",
        "//closure/goog/ui/ac:autocomplete",
        "//closure/goog/ui/ac:inputhandler",
        "//closure/goog/ui/ac:renderer",
    ],
)

closure_js_library(
    name = "arraymatcher",
    srcs = ["//closure/goog/ui/ac:arraymatcher.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "autocomplete",
    srcs = ["//closure/goog/ui/ac:autocomplete.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/object",
        "//closure/goog/ui/ac:renderoptions",
    ],
)

closure_js_library(
    name = "cachingmatcher",
    srcs = ["//closure/goog/ui/ac:cachingmatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/async:throttle",
        "//closure/goog/ui/ac:arraymatcher",
        "//closure/goog/ui/ac:renderoptions",
    ],
)

closure_js_library(
    name = "inputhandler",
    srcs = ["//closure/goog/ui/ac:inputhandler.js"],
    lenient = True,
    deps = [
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
    srcs = ["//closure/goog/ui/ac:remote.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui/ac:autocomplete",
        "//closure/goog/ui/ac:inputhandler",
        "//closure/goog/ui/ac:remotearraymatcher",
        "//closure/goog/ui/ac:renderer",
    ],
)

closure_js_library(
    name = "remotearraymatcher",
    srcs = ["//closure/goog/ui/ac:remotearraymatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "renderer",
    srcs = ["//closure/goog/ui/ac:renderer.js"],
    lenient = True,
    deps = [
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
        "//closure/goog/ui/ac:autocomplete",
    ],
)

closure_js_library(
    name = "renderoptions",
    srcs = ["//closure/goog/ui/ac:renderoptions.js"],
    lenient = True,
)

closure_js_library(
    name = "richinputhandler",
    srcs = ["//closure/goog/ui/ac:richinputhandler.js"],
    lenient = True,
    deps = ["//closure/goog/ui/ac:inputhandler"],
)

closure_js_library(
    name = "richremote",
    srcs = ["//closure/goog/ui/ac:richremote.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui/ac:autocomplete",
        "//closure/goog/ui/ac:remote",
        "//closure/goog/ui/ac:renderer",
        "//closure/goog/ui/ac:richinputhandler",
        "//closure/goog/ui/ac:richremotearraymatcher",
    ],
)

closure_js_library(
    name = "richremotearraymatcher",
    srcs = ["//closure/goog/ui/ac:richremotearraymatcher.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/ui/ac:remotearraymatcher",
    ],
)
