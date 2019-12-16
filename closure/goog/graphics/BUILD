load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["abstractgraphics.js"],
    lenient = True,
    deps = [
        ":affinetransform",
        ":element",
        ":ellipseelement",
        ":fill",
        ":font",
        ":groupelement",
        ":path",
        ":pathelement",
        ":rectelement",
        ":stroke",
        ":strokeandfillelement",
        ":textelement",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "affinetransform",
    srcs = ["affinetransform.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "canvaselement",
    srcs = ["canvaselement.js"],
    lenient = True,
    deps = [
        ":ellipseelement",
        ":font",
        ":groupelement",
        ":imageelement",
        ":path",
        ":pathelement",
        ":rectelement",
        ":textelement",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "canvasgraphics",
    srcs = ["canvasgraphics.js"],
    lenient = True,
    deps = [
        ":abstractgraphics",
        ":canvaselement",
        ":font",
        ":solidfill",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "element",
    srcs = ["element.js"],
    lenient = True,
    deps = [
        ":affinetransform",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:listenable",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "ellipseelement",
    srcs = ["ellipseelement.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "fill",
    srcs = ["fill.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "font",
    srcs = ["font.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "graphics",
    srcs = ["graphics.js"],
    lenient = True,
    deps = [
        ":canvasgraphics",
        ":svggraphics",
        ":vmlgraphics",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "groupelement",
    srcs = ["groupelement.js"],
    lenient = True,
    deps = [
        ":element",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "imageelement",
    srcs = ["imageelement.js"],
    lenient = True,
    deps = [
        ":element",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "lineargradient",
    srcs = ["lineargradient.js"],
    lenient = True,
    deps = [
        ":fill",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "path",
    srcs = ["path.js"],
    lenient = True,
    deps = [
        ":affinetransform",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "pathelement",
    srcs = ["pathelement.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "paths",
    srcs = ["paths.js"],
    lenient = True,
    deps = [
        ":path",
        "//closure/goog:base",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "rectelement",
    srcs = ["rectelement.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "solidfill",
    srcs = ["solidfill.js"],
    lenient = True,
    deps = [
        ":fill",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "stroke",
    srcs = ["stroke.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
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

closure_js_library(
    name = "svgelement",
    srcs = ["svgelement.js"],
    lenient = True,
    deps = [
        ":ellipseelement",
        ":groupelement",
        ":imageelement",
        ":pathelement",
        ":rectelement",
        ":textelement",
        "//closure/goog:base",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "svggraphics",
    srcs = ["svggraphics.js"],
    lenient = True,
    deps = [
        ":abstractgraphics",
        ":font",
        ":lineargradient",
        ":path",
        ":solidfill",
        ":stroke",
        ":svgelement",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "textelement",
    srcs = ["textelement.js"],
    lenient = True,
    deps = [
        ":strokeandfillelement",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "vmlelement",
    srcs = ["vmlelement.js"],
    lenient = True,
    deps = [
        ":ellipseelement",
        ":groupelement",
        ":imageelement",
        ":pathelement",
        ":rectelement",
        ":textelement",
        "//closure/goog:base",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "vmlgraphics",
    srcs = ["vmlgraphics.js"],
    lenient = True,
    deps = [
        ":abstractgraphics",
        ":font",
        ":lineargradient",
        ":path",
        ":solidfill",
        ":vmlelement",
        "//closure/goog/reflect",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)
