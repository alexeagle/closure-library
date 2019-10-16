package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":abstractspellchecker",
        ":activitymonitor",
        ":advancedtooltip",
        ":animatedzippy",
        ":attachablemenu",
        ":bidiinput",
        ":bubble",
        ":button",
        ":buttonrenderer",
        ":buttonside",
        ":charcounter",
        ":charpicker",
        ":checkbox",
        ":checkboxmenuitem",
        ":checkboxrenderer",
        ":colormenubutton",
        ":colormenubuttonrenderer",
        ":colorpalette",
        ":colorpicker",
        ":combobox",
        ":component",
        ":componentutil",
        ":container",
        ":containerrenderer",
        ":containerscroller",
        ":control",
        ":controlcontent",
        ":controlrenderer",
        ":cookieeditor",
        ":css3buttonrenderer",
        ":css3menubuttonrenderer",
        ":cssnames",
        ":custombutton",
        ":custombuttonrenderer",
        ":customcolorpalette",
        ":datepicker",
        ":datepickerrenderer",
        ":decorate",
        ":defaultdatepickerrenderer",
        ":dialog",
        ":dimensionpicker",
        ":dimensionpickerrenderer",
        ":dragdropdetector",
        ":drilldownrow",
        ":filteredmenu",
        ":filterobservingmenuitem",
        ":filterobservingmenuitemrenderer",
        ":flatbuttonrenderer",
        ":flatmenubuttonrenderer",
        ":formpost",
        ":gauge",
        ":gaugetheme",
        ":hovercard",
        ":hsvapalette",
        ":hsvpalette",
        ":idgenerator",
        ":idletimer",
        ":iframemask",
        ":imagelessbuttonrenderer",
        ":imagelessmenubuttonrenderer",
        ":inputdatepicker",
        ":itemevent",
        ":keyboardeventdata",
        ":keyboardshortcuthandler",
        ":labelinput",
        ":linkbuttonrenderer",
        ":menu",
        ":menubar",
        ":menubardecorator",
        ":menubarrenderer",
        ":menubase",
        ":menubutton",
        ":menubuttonrenderer",
        ":menuheader",
        ":menuheaderrenderer",
        ":menuitem",
        ":menuitemrenderer",
        ":menurenderer",
        ":menuseparator",
        ":menuseparatorrenderer",
        ":mockactivitymonitor",
        ":modalariavisibilityhelper",
        ":modalpopup",
        ":nativebuttonrenderer",
        ":option",
        ":palette",
        ":paletterenderer",
        ":plaintextspellchecker",
        ":popup",
        ":popupbase",
        ":popupcolorpicker",
        ":popupdatepicker",
        ":popupmenu",
        ":progressbar",
        ":prompt",
        ":rangemodel",
        ":ratings",
        ":registry",
        ":richtextspellchecker",
        ":roundedpanel",
        ":roundedtabrenderer",
        ":scrollfloater",
        ":select",
        ":selectionmenubutton",
        ":selectionmodel",
        ":separator",
        ":serverchart",
        ":slider",
        ":sliderbase",
        ":splitpane",
        ":submenu",
        ":submenurenderer",
        ":synthetickeyboardevent",
        ":tab",
        ":tabbar",
        ":tabbarrenderer",
        ":tablesorter",
        ":tabpane",
        ":tabrenderer",
        ":textarea",
        ":textarearenderer",
        ":togglebutton",
        ":toolbar",
        ":toolbarbutton",
        ":toolbarbuttonrenderer",
        ":toolbarcolormenubutton",
        ":toolbarcolormenubuttonrenderer",
        ":toolbarmenubutton",
        ":toolbarmenubuttonrenderer",
        ":toolbarrenderer",
        ":toolbarselect",
        ":toolbarseparator",
        ":toolbarseparatorrenderer",
        ":toolbartogglebutton",
        ":tooltip",
        ":tristatemenuitem",
        ":tristatemenuitemrenderer",
        ":twothumbslider",
        ":zippy",
        "//closure/goog/ui/ac:all_js",
        "//closure/goog/ui/editor:all_js",
        "//closure/goog/ui/emoji:all_js",
        "//closure/goog/ui/media:all_js",
        "//closure/goog/ui/style/app:all_js",
        "//closure/goog/ui/tree:all_js",
    ],
)

closure_js_library(
    name = "abstractspellchecker",
    srcs = ["//closure/goog/ui:abstractspellchecker.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:selection",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/structs:set",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:menuseparator",
        "//closure/goog/ui:popupmenu",
    ],
)

closure_js_library(
    name = "activitymonitor",
    srcs = ["//closure/goog/ui:activitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "advancedtooltip",
    srcs = ["//closure/goog/ui:advancedtooltip.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/ui:tooltip",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "animatedzippy",
    srcs = ["//closure/goog/ui:animatedzippy.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:easing",
        "//closure/goog/fx:transition",
        "//closure/goog/ui:zippy",
    ],
)

closure_js_library(
    name = "attachablemenu",
    srcs = ["//closure/goog/ui:attachablemenu.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:itemevent",
        "//closure/goog/ui:menubase",
        "//closure/goog/ui:popupbase",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "bidiinput",
    srcs = ["//closure/goog/ui:bidiinput.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:inputhandler",
        "//closure/goog/i18n:bidi",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "bubble",
    srcs = ["//closure/goog/ui:bubble.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:safe",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:absoluteposition",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popup",
    ],
)

closure_js_library(
    name = "button",
    srcs = ["//closure/goog/ui:button.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/ui:buttonrenderer",
        "//closure/goog/ui:buttonside",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:nativebuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "buttonrenderer",
    srcs = ["//closure/goog/ui:buttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/ui:buttonside",
        "//closure/goog/ui:component",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "buttonside",
    srcs = ["//closure/goog/ui:buttonside.js"],
    lenient = True,
)

closure_js_library(
    name = "charcounter",
    srcs = ["//closure/goog/ui:charcounter.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:inputhandler",
    ],
)

closure_js_library(
    name = "charpicker",
    srcs = ["//closure/goog/ui:charpicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/i18n:charlistdecompressor",
        "//closure/goog/i18n:charpickerdata",
        "//closure/goog/i18n:uchar",
        "//closure/goog/i18n/uchar:namefetcher",
        "//closure/goog/structs:set",
        "//closure/goog/style",
        "//closure/goog/ui:button",
        "//closure/goog/ui:component",
        "//closure/goog/ui:containerscroller",
        "//closure/goog/ui:flatbuttonrenderer",
        "//closure/goog/ui:hovercard",
        "//closure/goog/ui:labelinput",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:tooltip",
    ],
)

closure_js_library(
    name = "checkbox",
    srcs = ["//closure/goog/ui:checkbox.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/string",
        "//closure/goog/ui:checkboxrenderer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "checkboxmenuitem",
    srcs = ["//closure/goog/ui:checkboxmenuitem.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "checkboxrenderer",
    srcs = ["//closure/goog/ui:checkboxrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "colormenubutton",
    srcs = ["//closure/goog/ui:colormenubutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
        "//closure/goog/ui:colormenubuttonrenderer",
        "//closure/goog/ui:colorpalette",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "colormenubuttonrenderer",
    srcs = ["//closure/goog/ui:colormenubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/color",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:menubuttonrenderer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "colorpalette",
    srcs = ["//closure/goog/ui:colorpalette.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/color",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:palette",
        "//closure/goog/ui:paletterenderer",
    ],
)

closure_js_library(
    name = "colorpicker",
    srcs = ["//closure/goog/ui:colorpicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:colorpalette",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "combobox",
    srcs = ["//closure/goog/ui:combobox.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/log",
        "//closure/goog/positioning",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:itemevent",
        "//closure/goog/ui:labelinput",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:menuseparator",
        "//closure/goog/ui:registry",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "component",
    srcs = ["//closure/goog/ui:component.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/object",
        "//closure/goog/style",
        "//closure/goog/ui:idgenerator",
    ],
)

closure_js_library(
    name = "componentutil",
    srcs = ["//closure/goog/ui:componentutil.js"],
    lenient = True,
    deps = ["//closure/goog/events:eventtype"],
)

closure_js_library(
    name = "container",
    srcs = ["//closure/goog/ui:container.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/object",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:componentutil",
        "//closure/goog/ui:containerrenderer",
        "//closure/goog/ui:control",
    ],
)

closure_js_library(
    name = "containerrenderer",
    srcs = ["//closure/goog/ui:containerrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:registry",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "containerscroller",
    srcs = ["//closure/goog/ui:containerscroller.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events:eventhandler",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:container",
    ],
)

closure_js_library(
    name = "control",
    srcs = ["//closure/goog/ui:control.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/ui:componentutil",
        "//closure/goog/ui:controlcontent",
        "//closure/goog/ui:controlrenderer",
        "//closure/goog/ui:registry",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "controlcontent",
    srcs = ["//closure/goog/ui:controlcontent.js"],
    lenient = True,
)

closure_js_library(
    name = "controlrenderer",
    srcs = ["//closure/goog/ui:controlrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:controlcontent",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "cookieeditor",
    srcs = ["//closure/goog/ui:cookieeditor.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/net:cookies",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "css3buttonrenderer",
    srcs = ["//closure/goog/ui:css3buttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:button",
        "//closure/goog/ui:buttonrenderer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "css3menubuttonrenderer",
    srcs = ["//closure/goog/ui:css3menubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menubuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "cssnames",
    srcs = ["//closure/goog/ui:cssnames.js"],
    lenient = True,
)

closure_js_library(
    name = "custombutton",
    srcs = ["//closure/goog/ui:custombutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:button",
        "//closure/goog/ui:custombuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "custombuttonrenderer",
    srcs = ["//closure/goog/ui:custombuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
        "//closure/goog/ui:buttonrenderer",
        "//closure/goog/ui:cssnames",
    ],
)

closure_js_library(
    name = "customcolorpalette",
    srcs = ["//closure/goog/ui:customcolorpalette.js"],
    lenient = True,
    deps = [
        "//closure/goog/color",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:colorpalette",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "datepicker",
    srcs = ["//closure/goog/ui:datepicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:daterange",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keyhandler",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:defaultdatepickerrenderer",
        "//closure/goog/ui:idgenerator",
    ],
)

closure_js_library(
    name = "datepickerrenderer",
    srcs = ["//closure/goog/ui:datepickerrenderer.js"],
    lenient = True,
)

closure_js_library(
    name = "decorate",
    srcs = ["//closure/goog/ui:decorate.js"],
    lenient = True,
    deps = ["//closure/goog/ui:registry"],
)

closure_js_library(
    name = "defaultdatepickerrenderer",
    srcs = ["//closure/goog/ui:defaultdatepickerrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:datepickerrenderer",
    ],
)

closure_js_library(
    name = "dialog",
    srcs = ["//closure/goog/ui:dialog.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keys",
        "//closure/goog/fx:dragger",
        "//closure/goog/html:safehtml",
        "//closure/goog/math:rect",
        "//closure/goog/string",
        "//closure/goog/structs:map",
        "//closure/goog/style",
        "//closure/goog/ui:modalpopup",
    ],
)

closure_js_library(
    name = "dimensionpicker",
    srcs = ["//closure/goog/ui:dimensionpicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/math:size",
        "//closure/goog/ui:component",
        "//closure/goog/ui:componentutil",
        "//closure/goog/ui:control",
        "//closure/goog/ui:dimensionpickerrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "dimensionpickerrenderer",
    srcs = ["//closure/goog/ui:dimensionpickerrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:announcer",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/i18n:bidi",
        "//closure/goog/style",
        "//closure/goog/ui:controlrenderer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "dragdropdetector",
    srcs = ["//closure/goog/ui:dragdropdetector.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "drilldownrow",
    srcs = ["//closure/goog/ui:drilldownrow.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/string",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "filteredmenu",
    srcs = ["//closure/goog/ui:filteredmenu.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:filterobservingmenuitem",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menuitem",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "filterobservingmenuitem",
    srcs = ["//closure/goog/ui:filterobservingmenuitem.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:filterobservingmenuitemrenderer",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "filterobservingmenuitemrenderer",
    srcs = ["//closure/goog/ui:filterobservingmenuitemrenderer.js"],
    lenient = True,
    deps = ["//closure/goog/ui:menuitemrenderer"],
)

closure_js_library(
    name = "flatbuttonrenderer",
    srcs = ["//closure/goog/ui:flatbuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:button",
        "//closure/goog/ui:buttonrenderer",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "flatmenubuttonrenderer",
    srcs = ["//closure/goog/ui:flatmenubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:flatbuttonrenderer",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menurenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "formpost",
    srcs = ["//closure/goog/ui:formpost.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "gauge",
    srcs = ["//closure/goog/ui:gauge.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:easing",
        "//closure/goog/fx:transition",
        "//closure/goog/graphics",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/math",
        "//closure/goog/ui:component",
        "//closure/goog/ui:gaugetheme",
    ],
)

closure_js_library(
    name = "gaugetheme",
    srcs = ["//closure/goog/ui:gaugetheme.js"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:lineargradient",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
    ],
)

closure_js_library(
    name = "hovercard",
    srcs = ["//closure/goog/ui:hovercard.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:advancedtooltip",
        "//closure/goog/ui:popupbase",
        "//closure/goog/ui:tooltip",
    ],
)

closure_js_library(
    name = "hsvapalette",
    srcs = ["//closure/goog/ui:hsvapalette.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/color:alpha",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:hsvpalette",
    ],
)

closure_js_library(
    name = "hsvpalette",
    srcs = ["//closure/goog/ui:hsvpalette.js"],
    lenient = True,
    deps = [
        "//closure/goog/color",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "idgenerator",
    srcs = ["//closure/goog/ui:idgenerator.js"],
    lenient = True,
)

closure_js_library(
    name = "idletimer",
    srcs = ["//closure/goog/ui:idletimer.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:set",
        "//closure/goog/timer",
        "//closure/goog/ui:activitymonitor",
    ],
)

closure_js_library(
    name = "iframemask",
    srcs = ["//closure/goog/ui:iframemask.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:iframe",
        "//closure/goog/events:eventhandler",
        "//closure/goog/structs:pool",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "imagelessbuttonrenderer",
    srcs = ["//closure/goog/ui:imagelessbuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:button",
        "//closure/goog/ui:component",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:custombuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "imagelessmenubuttonrenderer",
    srcs = ["//closure/goog/ui:imagelessmenubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menubuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "inputdatepicker",
    srcs = ["//closure/goog/ui:inputdatepicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/date",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/i18n:datetimeparse",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/ui:datepicker",
        "//closure/goog/ui:labelinput",
        "//closure/goog/ui:popupbase",
        "//closure/goog/ui:popupdatepicker",
    ],
)

closure_js_library(
    name = "itemevent",
    srcs = ["//closure/goog/ui:itemevent.js"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

closure_js_library(
    name = "keyboardeventdata",
    srcs = ["//closure/goog/ui:keyboardeventdata.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:browserevent",
    ],
)

closure_js_library(
    name = "keyboardshortcuthandler",
    srcs = ["//closure/goog/ui:keyboardshortcuthandler.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keynames",
        "//closure/goog/events:keys",
        "//closure/goog/object",
        "//closure/goog/ui:keyboardeventdata",
        "//closure/goog/ui:synthetickeyboardevent",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "labelinput",
    srcs = ["//closure/goog/ui:labelinput.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "linkbuttonrenderer",
    srcs = ["//closure/goog/ui:linkbuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:button",
        "//closure/goog/ui:flatbuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "menu",
    srcs = ["//closure/goog/ui:menu.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:container",
        "//closure/goog/ui:menuheader",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:menurenderer",
        "//closure/goog/ui:menuseparator",
    ],
)

closure_js_library(
    name = "menubar",
    srcs = ["//closure/goog/ui:menubar.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:container",
        "//closure/goog/ui:menubarrenderer",
    ],
)

closure_js_library(
    name = "menubardecorator",
    srcs = ["//closure/goog/ui:menubardecorator.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:menubar",
        "//closure/goog/ui:menubarrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "menubarrenderer",
    srcs = ["//closure/goog/ui:menubarrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/ui:container",
        "//closure/goog/ui:containerrenderer",
    ],
)

closure_js_library(
    name = "menubase",
    srcs = ["//closure/goog/ui:menubase.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keyhandler",
        "//closure/goog/ui:popup",
    ],
)

closure_js_library(
    name = "menubutton",
    srcs = ["//closure/goog/ui:menubutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/math:box",
        "//closure/goog/math:rect",
        "//closure/goog/positioning",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:button",
        "//closure/goog/ui:component",
        "//closure/goog/ui:idgenerator",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menubuttonrenderer",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:menurenderer",
        "//closure/goog/ui:registry",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "menubuttonrenderer",
    srcs = ["//closure/goog/ui:menubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:custombuttonrenderer",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menurenderer",
    ],
)

closure_js_library(
    name = "menuheader",
    srcs = ["//closure/goog/ui:menuheader.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:menuheaderrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "menuheaderrenderer",
    srcs = ["//closure/goog/ui:menuheaderrenderer.js"],
    lenient = True,
    deps = ["//closure/goog/ui:controlrenderer"],
)

closure_js_library(
    name = "menuitem",
    srcs = ["//closure/goog/ui:menuitem.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:menuitemrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "menuitemrenderer",
    srcs = ["//closure/goog/ui:menuitemrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:component",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "menurenderer",
    srcs = ["//closure/goog/ui:menurenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:containerrenderer",
        "//closure/goog/ui:separator",
    ],
)

closure_js_library(
    name = "menuseparator",
    srcs = ["//closure/goog/ui:menuseparator.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:menuseparatorrenderer",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:separator",
    ],
)

closure_js_library(
    name = "menuseparatorrenderer",
    srcs = ["//closure/goog/ui:menuseparatorrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "mockactivitymonitor",
    srcs = ["//closure/goog/ui:mockactivitymonitor.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:activitymonitor",
    ],
)

closure_js_library(
    name = "modalariavisibilityhelper",
    srcs = ["//closure/goog/ui:modalariavisibilityhelper.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
    ],
)

closure_js_library(
    name = "modalpopup",
    srcs = ["//closure/goog/ui:modalpopup.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:iframe",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom/animationframe",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/fx:transition",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:modalariavisibilityhelper",
        "//closure/goog/ui:popupbase",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "nativebuttonrenderer",
    srcs = ["//closure/goog/ui:nativebuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:buttonrenderer",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "option",
    srcs = ["//closure/goog/ui:option.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:component",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "palette",
    srcs = ["//closure/goog/ui:palette.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/math:size",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:paletterenderer",
        "//closure/goog/ui:selectionmodel",
    ],
)

closure_js_library(
    name = "paletterenderer",
    srcs = ["//closure/goog/ui:paletterenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:dataset",
        "//closure/goog/dom:nodeiterator",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/iter",
        "//closure/goog/style",
        "//closure/goog/ui:controlrenderer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "plaintextspellchecker",
    srcs = ["//closure/goog/ui:plaintextspellchecker.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:abstractspellchecker",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "popup",
    srcs = ["//closure/goog/ui:popup.js"],
    lenient = True,
    deps = [
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/style",
        "//closure/goog/ui:popupbase",
    ],
)

closure_js_library(
    name = "popupbase",
    srcs = ["//closure/goog/ui:popupbase.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/fx:transition",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "popupcolorpicker",
    srcs = ["//closure/goog/ui:popupcolorpicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/ui:colorpicker",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popup",
    ],
)

closure_js_library(
    name = "popupdatepicker",
    srcs = ["//closure/goog/ui:popupdatepicker.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:datepicker",
        "//closure/goog/ui:popup",
        "//closure/goog/ui:popupbase",
    ],
)

closure_js_library(
    name = "popupmenu",
    srcs = ["//closure/goog/ui:popupmenu.js"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredviewportposition",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/positioning:viewportclientposition",
        "//closure/goog/structs:map",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:popupbase",
    ],
)

closure_js_library(
    name = "progressbar",
    srcs = ["//closure/goog/ui:progressbar.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:component",
        "//closure/goog/ui:rangemodel",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "prompt",
    srcs = ["//closure/goog/ui:prompt.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:dialog",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "rangemodel",
    srcs = ["//closure/goog/ui:rangemodel.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "ratings",
    srcs = ["//closure/goog/ui:ratings.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "registry",
    srcs = ["//closure/goog/ui:registry.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
    ],
)

closure_js_library(
    name = "richtextspellchecker",
    srcs = ["//closure/goog/ui:richtextspellchecker.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/math:coordinate",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/string:stringbuffer",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:abstractspellchecker",
        "//closure/goog/ui:component",
        "//closure/goog/ui:popupmenu",
    ],
)

closure_js_library(
    name = "roundedpanel",
    srcs = ["//closure/goog/ui:roundedpanel.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/graphics",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "roundedtabrenderer",
    srcs = ["//closure/goog/ui:roundedtabrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:tab",
        "//closure/goog/ui:tabbar",
        "//closure/goog/ui:tabrenderer",
    ],
)

closure_js_library(
    name = "scrollfloater",
    srcs = ["//closure/goog/ui:scrollfloater.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "select",
    srcs = ["//closure/goog/ui:select.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/events:eventtype",
        "//closure/goog/ui:component",
        "//closure/goog/ui:idgenerator",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:menurenderer",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:selectionmodel",
    ],
)

closure_js_library(
    name = "selectionmenubutton",
    srcs = ["//closure/goog/ui:selectionmenubutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "selectionmodel",
    srcs = ["//closure/goog/ui:selectionmodel.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "separator",
    srcs = ["//closure/goog/ui:separator.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:menuseparatorrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "serverchart",
    srcs = ["//closure/goog/ui:serverchart.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "slider",
    srcs = ["//closure/goog/ui:slider.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:sliderbase",
    ],
)

closure_js_library(
    name = "sliderbase",
    srcs = ["//closure/goog/ui:sliderbase.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/events:mousewheelhandler",
        "//closure/goog/functions",
        "//closure/goog/fx:animationqueue",
        "//closure/goog/fx:dom",
        "//closure/goog/fx:dragger",
        "//closure/goog/fx:transition",
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:rangemodel",
    ],
)

closure_js_library(
    name = "splitpane",
    srcs = ["//closure/goog/ui:splitpane.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/fx:dragger",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "submenu",
    srcs = ["//closure/goog/ui:submenu.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:keycodes",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredviewportposition",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:submenurenderer",
    ],
)

closure_js_library(
    name = "submenurenderer",
    srcs = ["//closure/goog/ui:submenurenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
        "//closure/goog/ui:menu",
        "//closure/goog/ui:menuitemrenderer",
    ],
)

closure_js_library(
    name = "synthetickeyboardevent",
    srcs = ["//closure/goog/ui:synthetickeyboardevent.js"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/ui:keyboardeventdata",
    ],
)

closure_js_library(
    name = "tab",
    srcs = ["//closure/goog/ui:tab.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:tabrenderer",
    ],
)

closure_js_library(
    name = "tabbar",
    srcs = ["//closure/goog/ui:tabbar.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:component",
        "//closure/goog/ui:container",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:tab",
        "//closure/goog/ui:tabbarrenderer",
    ],
)

closure_js_library(
    name = "tabbarrenderer",
    srcs = ["//closure/goog/ui:tabbarrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/object",
        "//closure/goog/ui:containerrenderer",
    ],
)

closure_js_library(
    name = "tablesorter",
    srcs = ["//closure/goog/ui:tablesorter.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
        "//closure/goog/ui:component",
    ],
)

closure_js_library(
    name = "tabpane",
    srcs = ["//closure/goog/ui:tabpane.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "tabrenderer",
    srcs = ["//closure/goog/ui:tabrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/ui:component",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "textarea",
    srcs = ["//closure/goog/ui:textarea.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
        "//closure/goog/ui:control",
        "//closure/goog/ui:textarearenderer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "textarearenderer",
    srcs = ["//closure/goog/ui:textarearenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:component",
        "//closure/goog/ui:controlrenderer",
    ],
)

closure_js_library(
    name = "togglebutton",
    srcs = ["//closure/goog/ui:togglebutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:button",
        "//closure/goog/ui:component",
        "//closure/goog/ui:custombuttonrenderer",
        "//closure/goog/ui:registry",
    ],
)

closure_js_library(
    name = "toolbar",
    srcs = ["//closure/goog/ui:toolbar.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:container",
        "//closure/goog/ui:toolbarrenderer",
    ],
)

closure_js_library(
    name = "toolbarbutton",
    srcs = ["//closure/goog/ui:toolbarbutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:button",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:toolbarbuttonrenderer",
    ],
)

closure_js_library(
    name = "toolbarbuttonrenderer",
    srcs = ["//closure/goog/ui:toolbarbuttonrenderer.js"],
    lenient = True,
    deps = ["//closure/goog/ui:custombuttonrenderer"],
)

closure_js_library(
    name = "toolbarcolormenubutton",
    srcs = ["//closure/goog/ui:toolbarcolormenubutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:colormenubutton",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:toolbarcolormenubuttonrenderer",
    ],
)

closure_js_library(
    name = "toolbarcolormenubuttonrenderer",
    srcs = ["//closure/goog/ui:toolbarcolormenubuttonrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/ui:colormenubuttonrenderer",
        "//closure/goog/ui:menubuttonrenderer",
        "//closure/goog/ui:toolbarmenubuttonrenderer",
    ],
)

closure_js_library(
    name = "toolbarmenubutton",
    srcs = ["//closure/goog/ui:toolbarmenubutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:menubutton",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:toolbarmenubuttonrenderer",
    ],
)

closure_js_library(
    name = "toolbarmenubuttonrenderer",
    srcs = ["//closure/goog/ui:toolbarmenubuttonrenderer.js"],
    lenient = True,
    deps = ["//closure/goog/ui:menubuttonrenderer"],
)

closure_js_library(
    name = "toolbarrenderer",
    srcs = ["//closure/goog/ui:toolbarrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:container",
        "//closure/goog/ui:containerrenderer",
        "//closure/goog/ui:separator",
        "//closure/goog/ui:toolbarseparatorrenderer",
    ],
)

closure_js_library(
    name = "toolbarselect",
    srcs = ["//closure/goog/ui:toolbarselect.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:registry",
        "//closure/goog/ui:select",
        "//closure/goog/ui:toolbarmenubuttonrenderer",
    ],
)

closure_js_library(
    name = "toolbarseparator",
    srcs = ["//closure/goog/ui:toolbarseparator.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:registry",
        "//closure/goog/ui:separator",
        "//closure/goog/ui:toolbarseparatorrenderer",
    ],
)

closure_js_library(
    name = "toolbarseparatorrenderer",
    srcs = ["//closure/goog/ui:toolbarseparatorrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:cssnames",
        "//closure/goog/ui:menuseparatorrenderer",
    ],
)

closure_js_library(
    name = "toolbartogglebutton",
    srcs = ["//closure/goog/ui:toolbartogglebutton.js"],
    lenient = True,
    deps = [
        "//closure/goog/ui:registry",
        "//closure/goog/ui:togglebutton",
        "//closure/goog/ui:toolbarbuttonrenderer",
    ],
)

closure_js_library(
    name = "tooltip",
    srcs = ["//closure/goog/ui:tooltip.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/positioning:viewportposition",
        "//closure/goog/structs:set",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:popup",
        "//closure/goog/ui:popupbase",
    ],
)

closure_js_library(
    name = "tristatemenuitem",
    srcs = ["//closure/goog/ui:tristatemenuitem.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:classlist",
        "//closure/goog/ui:component",
        "//closure/goog/ui:menuitem",
        "//closure/goog/ui:registry",
        "//closure/goog/ui:tristatemenuitemrenderer",
    ],
)

closure_js_library(
    name = "tristatemenuitemrenderer",
    srcs = ["//closure/goog/ui:tristatemenuitemrenderer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/ui:menuitemrenderer",
    ],
)

closure_js_library(
    name = "twothumbslider",
    srcs = ["//closure/goog/ui:twothumbslider.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/ui:sliderbase",
    ],
)

closure_js_library(
    name = "zippy",
    srcs = ["//closure/goog/ui:zippy.js"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/style",
    ],
)
