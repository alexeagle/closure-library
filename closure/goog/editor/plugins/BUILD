package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractbubbleplugin",
        ":abstractdialogplugin",
        ":abstracttabhandler",
        ":basictextformatter",
        ":blockquote",
        ":emoticons",
        ":enterhandler",
        ":firststrong",
        ":headerformatter",
        ":linkbubble",
        ":linkdialogplugin",
        ":linkshortcutplugin",
        ":listtabhandler",
        ":loremipsum",
        ":removeformatting",
        ":spacestabhandler",
        ":tableeditor",
        ":tagonenterhandler",
        ":undoredo",
        ":undoredomanager",
        ":undoredostate",
    ],
)

closure_js_library(
    name = "abstractbubbleplugin",
    srcs = ["//closure/goog/editor/plugins:abstractbubbleplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:style",
        "//closure/goog/events",
        "//closure/goog/events:actioneventwrapper",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/ui/editor:bubble",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "abstractdialogplugin",
    srcs = ["//closure/goog/editor/plugins:abstractdialogplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/editor:field",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/events",
        "//closure/goog/ui/editor:abstractdialog",
    ],
)

closure_js_library(
    name = "abstracttabhandler",
    srcs = ["//closure/goog/editor/plugins:abstracttabhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor:plugin",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "basictextformatter",
    srcs = ["//closure/goog/editor/plugins:basictextformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui/editor:messages",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "blockquote",
    srcs = ["//closure/goog/editor/plugins:blockquote.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/functions",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "emoticons",
    srcs = ["//closure/goog/editor/plugins:emoticons.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/functions",
        "//closure/goog/ui/emoji",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "enterhandler",
    srcs = ["//closure/goog/editor/plugins:enterhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodeoffset",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/editor/plugins:blockquote",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "firststrong",
    srcs = ["//closure/goog/editor/plugins:firststrong.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/i18n:bidi",
        "//closure/goog/i18n:uchar",
        "//closure/goog/iter",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "headerformatter",
    srcs = ["//closure/goog/editor/plugins:headerformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor:command",
        "//closure/goog/editor:plugin",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "linkbubble",
    srcs = ["//closure/goog/editor/plugins:linkbubble.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/editor/plugins:abstractbubbleplugin",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui/editor:messages",
        "//closure/goog/uri:utils",
        "//closure/goog/window",
    ],
)

closure_js_library(
    name = "linkdialogplugin",
    srcs = ["//closure/goog/editor/plugins:linkdialogplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/editor:command",
        "//closure/goog/editor/plugins:abstractdialogplugin",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/ui/editor:abstractdialog",
        "//closure/goog/ui/editor:linkdialog",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "linkshortcutplugin",
    srcs = ["//closure/goog/editor/plugins:linkshortcutplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor:command",
        "//closure/goog/editor:plugin",
    ],
)

closure_js_library(
    name = "listtabhandler",
    srcs = ["//closure/goog/editor/plugins:listtabhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor/plugins:abstracttabhandler",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "loremipsum",
    srcs = ["//closure/goog/editor/plugins:loremipsum.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "removeformatting",
    srcs = ["//closure/goog/editor/plugins:removeformatting.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "spacestabhandler",
    srcs = ["//closure/goog/editor/plugins:spacestabhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:range",
        "//closure/goog/editor/plugins:abstracttabhandler",
    ],
)

closure_js_library(
    name = "tableeditor",
    srcs = ["//closure/goog/editor/plugins:tableeditor.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:table",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagonenterhandler",
    srcs = ["//closure/goog/editor/plugins:tagonenterhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:node",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/editor/plugins:enterhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "undoredo",
    srcs = ["//closure/goog/editor/plugins:undoredo.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:nodeoffset",
        "//closure/goog/dom:range",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor/plugins:undoredomanager",
        "//closure/goog/editor/plugins:undoredostate",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "undoredomanager",
    srcs = ["//closure/goog/editor/plugins:undoredomanager.js"],
    lenient = True,
    deps = [
        "//closure/goog/editor/plugins:undoredostate",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "undoredostate",
    srcs = ["//closure/goog/editor/plugins:undoredostate.js"],
    lenient = True,
    deps = ["//closure/goog/events:eventtarget"],
)
