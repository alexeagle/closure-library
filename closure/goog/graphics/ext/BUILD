package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":coordinates",
        ":element",
        ":ellipse",
        ":ext",
        ":graphics",
        ":group",
        ":image",
        ":path",
        ":rectangle",
        ":shape",
        ":strokeandfillelement",
    ],
)

closure_js_library(
    name = "coordinates",
    srcs = ["//closure/goog/graphics/ext:coordinates.js"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "element",
    srcs = ["//closure/goog/graphics/ext:element.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
        "//closure/goog/graphics/ext:coordinates",
    ],
)

closure_js_library(
    name = "ellipse",
    srcs = ["//closure/goog/graphics/ext:ellipse.js"],
    lenient = True,
    deps = ["//closure/goog/graphics/ext:strokeandfillelement"],
)

closure_js_library(
    name = "ext",
    srcs = ["//closure/goog/graphics/ext:ext.js"],
    lenient = True,
    deps = [
        "//closure/goog/graphics/ext:coordinates",
        "//closure/goog/graphics/ext:ellipse",
        "//closure/goog/graphics/ext:graphics",
        "//closure/goog/graphics/ext:group",
        "//closure/goog/graphics/ext:image",
        "//closure/goog/graphics/ext:rectangle",
        "//closure/goog/graphics/ext:shape",
    ],
)

closure_js_library(
    name = "graphics",
    srcs = ["//closure/goog/graphics/ext:graphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/graphics",
        "//closure/goog/graphics/ext:group",
    ],
)

closure_js_library(
    name = "group",
    srcs = ["//closure/goog/graphics/ext:group.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/graphics/ext:element",
    ],
)

closure_js_library(
    name = "image",
    srcs = ["//closure/goog/graphics/ext:image.js"],
    lenient = True,
    deps = ["//closure/goog/graphics/ext:element"],
)

closure_js_library(
    name = "path",
    srcs = ["//closure/goog/graphics/ext:path.js"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/graphics:path",
        "//closure/goog/math:rect",
    ],
)

closure_js_library(
    name = "rectangle",
    srcs = ["//closure/goog/graphics/ext:rectangle.js"],
    lenient = True,
    deps = ["//closure/goog/graphics/ext:strokeandfillelement"],
)

closure_js_library(
    name = "shape",
    srcs = ["//closure/goog/graphics/ext:shape.js"],
    lenient = True,
    deps = ["//closure/goog/graphics/ext:strokeandfillelement"],
)

closure_js_library(
    name = "strokeandfillelement",
    srcs = ["//closure/goog/graphics/ext:strokeandfillelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics/ext:element"],
)
