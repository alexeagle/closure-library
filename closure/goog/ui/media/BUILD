load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["flashobject.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["flickr.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        ":mediamodel",
        "//closure/goog:base",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "googlevideo",
    srcs = ["googlevideo.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        ":mediamodel",
        "//closure/goog:base",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "media",
    srcs = ["media.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["mediamodel.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/html:trustedresourceurl",
    ],
)

closure_js_library(
    name = "mp3",
    srcs = ["mp3.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "photo",
    srcs = ["photo.js"],
    lenient = True,
    deps = [
        ":media",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "picasa",
    srcs = ["picasa.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        ":mediamodel",
        "//closure/goog:base",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "vimeo",
    srcs = ["vimeo.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        ":mediamodel",
        "//closure/goog:base",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "youtube",
    srcs = ["youtube.js"],
    lenient = True,
    deps = [
        ":flashobject",
        ":media",
        ":mediamodel",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/ui:component",
    ],
)
