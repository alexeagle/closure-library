load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["abstractbubbleplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["abstractdialogplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["abstracttabhandler.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/editor:plugin",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "basictextformatter",
    srcs = ["basictextformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["blockquote.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["emoticons.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["enterhandler.js"],
    lenient = True,
    deps = [
        ":blockquote",
        "//closure/goog:base",
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
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "firststrong",
    srcs = ["firststrong.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["headerformatter.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/editor:command",
        "//closure/goog/editor:plugin",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "linkbubble",
    srcs = ["linkbubble.js"],
    lenient = True,
    deps = [
        ":abstractbubbleplugin",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
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
    srcs = ["linkdialogplugin.js"],
    lenient = True,
    deps = [
        ":abstractdialogplugin",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/editor:command",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/ui/editor:abstractdialog",
        "//closure/goog/ui/editor:linkdialog",
        "//closure/goog/uri:utils",
    ],
)

closure_js_library(
    name = "linkshortcutplugin",
    srcs = ["linkshortcutplugin.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/editor:command",
        "//closure/goog/editor:plugin",
    ],
)

closure_js_library(
    name = "listtabhandler",
    srcs = ["listtabhandler.js"],
    lenient = True,
    deps = [
        ":abstracttabhandler",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "loremipsum",
    srcs = ["loremipsum.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["removeformatting.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["spacestabhandler.js"],
    lenient = True,
    deps = [
        ":abstracttabhandler",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:range",
    ],
)

closure_js_library(
    name = "tableeditor",
    srcs = ["tableeditor.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
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
    srcs = ["tagonenterhandler.js"],
    lenient = True,
    deps = [
        ":enterhandler",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:node",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "undoredo",
    srcs = ["undoredo.js"],
    lenient = True,
    deps = [
        ":undoredomanager",
        ":undoredostate",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:nodeoffset",
        "//closure/goog/dom:range",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "undoredomanager",
    srcs = ["undoredomanager.js"],
    lenient = True,
    deps = [
        ":undoredostate",
        "//closure/goog:base",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "undoredostate",
    srcs = ["undoredostate.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/events:eventtarget",
    ],
)
