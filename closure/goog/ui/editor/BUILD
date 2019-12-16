load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":abstractdialog",
        ":bubble",
        ":defaulttoolbar",
        ":linkdialog",
        ":messages",
        ":tabpane",
        ":toolbarcontroller",
        ":toolbarfactory",
    ],
)

closure_js_library(
    name = "abstractdialog",
    srcs = ["abstractdialog.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:eventtarget",
        "//closure/goog/string",
        "//closure/goog/ui:dialog",
        "//closure/goog/ui:popupbase",
    ],
)

closure_js_library(
    name = "bubble",
    srcs = ["bubble.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:viewportsizemonitor",
        "//closure/goog/editor:style",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
        "//closure/goog/log",
        "//closure/goog/math:box",
        "//closure/goog/object",
        "//closure/goog/positioning",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popupbase",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "defaulttoolbar",
    srcs = ["defaulttoolbar.js"],
    lenient = True,
    deps = [
        ":messages",
        ":toolbarfactory",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "linkdialog",
    srcs = ["linkdialog.js"],
    lenient = True,
    deps = [
        ":abstractdialog",
        ":messages",
        ":tabpane",
        "//closure/goog:base",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:focus",
        "//closure/goog/editor:link",
        "//closure/goog/editor:node",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:inputhandler",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safehtmlformatter",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:button",
        "//closure/goog/ui:component",
        "//closure/goog/ui:linkbuttonrenderer",
        "//closure/goog/useragent",
        "//closure/goog/window",
    ],
)

closure_js_library(
    name = "messages",
    srcs = ["messages.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/html:safehtmlformatter",
    ],
)

closure_js_library(
    name = "tabpane",
    srcs = ["tabpane.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:tab",
        "//closure/goog/ui:tabbar",
    ],
)

closure_js_library(
    name = "toolbarcontroller",
    srcs = ["toolbarcontroller.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/editor:field",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "toolbarfactory",
    srcs = ["toolbarfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:container",
        "//closure/goog/ui:option",
        "//closure/goog/ui:toolbar",
        "//closure/goog/ui:toolbarbutton",
        "//closure/goog/ui:toolbarcolormenubutton",
        "//closure/goog/ui:toolbarmenubutton",
        "//closure/goog/ui:toolbarrenderer",
        "//closure/goog/ui:toolbarselect",
        "//closure/goog/useragent",
    ],
)
