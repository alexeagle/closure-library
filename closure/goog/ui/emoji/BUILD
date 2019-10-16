package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/ui/emoji:emoji.js"],
    lenient = True,
)

closure_js_library(
    name = "emojipalette",
    srcs = ["//closure/goog/ui/emoji:emojipalette.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtype",
        "//closure/goog/net:imageloader",
        "//closure/goog/ui:palette",
        "//closure/goog/ui/emoji",
        "//closure/goog/ui/emoji:emojipaletterenderer",
    ],
)

closure_js_library(
    name = "emojipaletterenderer",
    srcs = ["//closure/goog/ui/emoji:emojipaletterenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:paletterenderer",
        "//closure/goog/ui/emoji",
    ],
)

closure_js_library(
    name = "emojipicker",
    srcs = ["//closure/goog/ui/emoji:emojipicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:tabpane",
        "//closure/goog/ui/emoji",
        "//closure/goog/ui/emoji:emojipalette",
        "//closure/goog/ui/emoji:emojipaletterenderer",
        "//closure/goog/ui/emoji:progressiveemojipaletterenderer",
    ],
)

closure_js_library(
    name = "popupemojipicker",
    srcs = ["//closure/goog/ui/emoji:popupemojipicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popup",
        "//closure/goog/ui/emoji:emojipicker",
    ],
)

closure_js_library(
    name = "progressiveemojipaletterenderer",
    srcs = ["//closure/goog/ui/emoji:progressiveemojipaletterenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui/emoji:emojipaletterenderer",
    ],
)

closure_js_library(
    name = "spriteinfo",
    srcs = ["//closure/goog/ui/emoji:spriteinfo.js"],
    lenient = True,
)
