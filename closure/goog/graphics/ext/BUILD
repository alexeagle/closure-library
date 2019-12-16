load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["coordinates.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "element",
    srcs = ["element.js"],
    lenient = True,
    deps = [
        ":coordinates",
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "ellipse",
    srcs = ["ellipse.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "ext",
    srcs = ["ext.js"],
    lenient = True,
    deps = [
        ":coordinates",
        ":ellipse",
        ":graphics",
        ":group",
        ":image",
        ":rectangle",
        ":shape",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "graphics",
    srcs = ["graphics.js"],
    lenient = True,
    deps = [
        ":group",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/graphics",
    ],
)

closure_js_library(
    name = "group",
    srcs = ["group.js"],
    lenient = True,
    deps = [
        ":element",
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "image",
    srcs = ["image.js"],
    lenient = True,
    deps = [
        ":element",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "path",
    srcs = ["path.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/graphics:path",
        "//closure/goog/math:rect",
    ],
)

closure_js_library(
    name = "rectangle",
    srcs = ["rectangle.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "shape",
    srcs = ["shape.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "strokeandfillelement",
    srcs = ["strokeandfillelement.js"],
    lenient = True,
    deps = [
        ":element",
        "//closure/goog:base",
    ],
)
