package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":flashobject",
        ":flickr",
        ":googlevideo",
        ":media",
        ":mediamodel",
        ":mp3",
        ":photo",
        ":picasa",
        ":vimeo",
        ":youtube",
    ],
)

closure_js_library(
    name = "flashobject",
    srcs = ["//closure/goog/ui/media:flashobject.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:flash",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/structs:map",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
        "//closure/goog/useragent:flash",
    ],
)

closure_js_library(
    name = "flickr",
    srcs = ["//closure/goog/ui/media:flickr.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
        "//closure/goog/ui/media:mediamodel",
    ],
)

closure_js_library(
    name = "googlevideo",
    srcs = ["//closure/goog/ui/media:googlevideo.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
        "//closure/goog/ui/media:mediamodel",
    ],
)

closure_js_library(
    name = "media",
    srcs = ["//closure/goog/ui/media:media.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "mediamodel",
    srcs = ["//closure/goog/ui/media:mediamodel.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/html:trustedresourceurl",
    ],
)

closure_js_library(
    name = "mp3",
    srcs = ["//closure/goog/ui/media:mp3.js"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
    ],
)

closure_js_library(
    name = "photo",
    srcs = ["//closure/goog/ui/media:photo.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/ui/media",
    ],
)

closure_js_library(
    name = "picasa",
    srcs = ["//closure/goog/ui/media:picasa.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
        "//closure/goog/ui/media:mediamodel",
    ],
)

closure_js_library(
    name = "vimeo",
    srcs = ["//closure/goog/ui/media:vimeo.js"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
        "//closure/goog/ui/media:mediamodel",
    ],
)

closure_js_library(
    name = "youtube",
    srcs = ["//closure/goog/ui/media:youtube.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/ui:component",
        "//closure/goog/ui/media",
        "//closure/goog/ui/media:flashobject",
        "//closure/goog/ui/media:mediamodel",
    ],
)
