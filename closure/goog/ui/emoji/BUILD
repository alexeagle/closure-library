load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":emoji",
        ":emojipalette",
        ":emojipaletterenderer",
        ":emojipicker",
        ":popupemojipicker",
        ":progressiveemojipaletterenderer",
        ":spriteinfo",
    ],
)

closure_js_library(
    name = "emoji",
    srcs = ["emoji.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "emojipalette",
    srcs = ["emojipalette.js"],
    lenient = True,
    deps = [
        ":emoji",
        ":emojipaletterenderer",
        "//closure/goog:base",
        "//closure/goog/events:eventtype",
        "//closure/goog/net:imageloader",
        "//closure/goog/ui:palette",
    ],
)

closure_js_library(
    name = "emojipaletterenderer",
    srcs = ["emojipaletterenderer.js"],
    lenient = True,
    deps = [
        ":emoji",
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:paletterenderer",
    ],
)

closure_js_library(
    name = "emojipicker",
    srcs = ["emojipicker.js"],
    lenient = True,
    deps = [
        ":emoji",
        ":emojipalette",
        ":emojipaletterenderer",
        ":progressiveemojipaletterenderer",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:tabpane",
    ],
)

closure_js_library(
    name = "popupemojipicker",
    srcs = ["popupemojipicker.js"],
    lenient = True,
    deps = [
        ":emojipicker",
        "//closure/goog:base",
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popup",
    ],
)

closure_js_library(
    name = "progressiveemojipaletterenderer",
    srcs = ["progressiveemojipaletterenderer.js"],
    lenient = True,
    deps = [
        ":emojipaletterenderer",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "spriteinfo",
    srcs = ["spriteinfo.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
