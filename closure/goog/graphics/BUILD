package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractgraphics",
        ":affinetransform",
        ":canvaselement",
        ":canvasgraphics",
        ":element",
        ":ellipseelement",
        ":fill",
        ":font",
        ":graphics",
        ":groupelement",
        ":imageelement",
        ":lineargradient",
        ":path",
        ":pathelement",
        ":paths",
        ":rectelement",
        ":solidfill",
        ":stroke",
        ":strokeandfillelement",
        ":svgelement",
        ":svggraphics",
        ":textelement",
        ":vmlelement",
        ":vmlgraphics",
        "//closure/goog/graphics/ext:all_js",
    ],
)

closure_js_library(
    name = "abstractgraphics",
    srcs = ["//closure/goog/graphics:abstractgraphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/graphics:element",
        "//closure/goog/graphics:ellipseelement",
        "//closure/goog/graphics:fill",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:groupelement",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:pathelement",
        "//closure/goog/graphics:rectelement",
        "//closure/goog/graphics:stroke",
        "//closure/goog/graphics:strokeandfillelement",
        "//closure/goog/graphics:textelement",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "affinetransform",
    srcs = ["//closure/goog/graphics:affinetransform.js"],
    lenient = True,
)

closure_js_library(
    name = "canvaselement",
    srcs = ["//closure/goog/graphics:canvaselement.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/graphics:ellipseelement",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:groupelement",
        "//closure/goog/graphics:imageelement",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:pathelement",
        "//closure/goog/graphics:rectelement",
        "//closure/goog/graphics:textelement",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "canvasgraphics",
    srcs = ["//closure/goog/graphics:canvasgraphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/graphics:abstractgraphics",
        "//closure/goog/graphics:canvaselement",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "element",
    srcs = ["//closure/goog/graphics:element.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:listenable",
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "ellipseelement",
    srcs = ["//closure/goog/graphics:ellipseelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:strokeandfillelement"],
)

closure_js_library(
    name = "fill",
    srcs = ["//closure/goog/graphics:fill.js"],
    lenient = True,
)

closure_js_library(
    name = "font",
    srcs = ["//closure/goog/graphics:font.js"],
    lenient = True,
)

closure_js_library(
    name = "graphics",
    srcs = ["//closure/goog/graphics:graphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/graphics:canvasgraphics",
        "//closure/goog/graphics:svggraphics",
        "//closure/goog/graphics:vmlgraphics",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "groupelement",
    srcs = ["//closure/goog/graphics:groupelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:element"],
)

closure_js_library(
    name = "imageelement",
    srcs = ["//closure/goog/graphics:imageelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:element"],
)

closure_js_library(
    name = "lineargradient",
    srcs = ["//closure/goog/graphics:lineargradient.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/graphics:fill",
    ],
)

closure_js_library(
    name = "path",
    srcs = ["//closure/goog/graphics:path.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "pathelement",
    srcs = ["//closure/goog/graphics:pathelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:strokeandfillelement"],
)

closure_js_library(
    name = "paths",
    srcs = ["//closure/goog/graphics:paths.js"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:path",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "rectelement",
    srcs = ["//closure/goog/graphics:rectelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:strokeandfillelement"],
)

closure_js_library(
    name = "solidfill",
    srcs = ["//closure/goog/graphics:solidfill.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:fill"],
)

closure_js_library(
    name = "stroke",
    srcs = ["//closure/goog/graphics:stroke.js"],
    lenient = True,
)

closure_js_library(
    name = "strokeandfillelement",
    srcs = ["//closure/goog/graphics:strokeandfillelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:element"],
)

closure_js_library(
    name = "svgelement",
    srcs = ["//closure/goog/graphics:svgelement.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/graphics:ellipseelement",
        "//closure/goog/graphics:groupelement",
        "//closure/goog/graphics:imageelement",
        "//closure/goog/graphics:pathelement",
        "//closure/goog/graphics:rectelement",
        "//closure/goog/graphics:textelement",
    ],
)

closure_js_library(
    name = "svggraphics",
    srcs = ["//closure/goog/graphics:svggraphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/graphics:abstractgraphics",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:lineargradient",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
        "//closure/goog/graphics:svgelement",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "textelement",
    srcs = ["//closure/goog/graphics:textelement.js"],
    lenient = True,
    deps = ["//closure/goog/graphics:strokeandfillelement"],
)

closure_js_library(
    name = "vmlelement",
    srcs = ["//closure/goog/graphics:vmlelement.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/graphics:ellipseelement",
        "//closure/goog/graphics:groupelement",
        "//closure/goog/graphics:imageelement",
        "//closure/goog/graphics:pathelement",
        "//closure/goog/graphics:rectelement",
        "//closure/goog/graphics:textelement",
    ],
)

closure_js_library(
    name = "vmlgraphics",
    srcs = ["//closure/goog/graphics:vmlgraphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/graphics:abstractgraphics",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:lineargradient",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:vmlelement",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/reflect",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)
