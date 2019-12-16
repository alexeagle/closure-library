load("//tools/build_defs/js/extractors:full_tc_extractor.bzl", "full_tc_extractor")

package(default_visibility = ["//visibility:public"])

exports_files(glob([
    "*.css",
    "*.gif",
    "*.png",
]))

css_library(
    name = "autocomplete",
    srcs = ["autocomplete.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "bubble",
    srcs = ["bubble.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "button",
    srcs = ["button.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [
        ":custombutton",
        ":flatbutton",
    ],
)

css_library(
    name = "charpicker",
    srcs = ["charpicker.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "checkbox",
    srcs = ["checkbox.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "combobox",
    srcs = ["combobox.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [
        ":menu",
        ":menuitem",
        ":menuseparator",
    ],
)

css_library(
    name = "custombutton",
    srcs = ["custombutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "dimensionpicker",
    srcs = ["dimensionpicker.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "flatbutton",
    srcs = ["flatbutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "colormenubutton",
    srcs = ["colormenubutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [
        ":colorpalette",
        ":common",
        ":menubutton",
    ],
)

css_library(
    name = "colorpalette",
    srcs = ["colorpalette.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":palette"],
)

css_library(
    name = "common",
    srcs = ["common.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

full_tc_extractor(
    name = "common_gss_full_tc",
    targets = [":common"],
)

css_library(
    name = "datepicker",
    srcs = ["datepicker.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "dialog",
    srcs = ["dialog.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "editortoolbar",
    srcs = ["editortoolbar.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "filteredmenu",
    srcs = ["filteredmenu.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "filterobservingmenuitem",
    srcs = ["filterobservingmenuitem.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "flatmenubutton",
    srcs = ["flatmenubutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "imagelessbutton",
    srcs = ["imagelessbutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "css3button",
    srcs = ["css3button.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "hovercard",
    srcs = ["hovercard.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "inputdatepicker",
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":popupdatepicker"],
)

css_library(
    name = "linkbutton",
    srcs = ["linkbutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "menubutton",
    srcs = ["menubutton.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "menu",
    srcs = ["menu.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "menubar",
    srcs = ["menubar.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "menuitem",
    srcs = ["menuitem.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "menuseparator",
    srcs = ["menuseparator.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "palette",
    srcs = ["palette.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "popupdatepicker",
    srcs = ["popupdatepicker.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":datepicker"],
)

css_library(
    name = "roundedtab",
    srcs = ["roundedtab.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "submenu",
    srcs = ["submenu.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "tab",
    srcs = ["tab.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "tabbar",
    srcs = ["tabbar.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "toolbar",
    srcs = ["toolbar.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
    deps = [":common"],
)

css_library(
    name = "tooltip",
    srcs = ["tooltip.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "tree",
    srcs = ["tree.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)

css_library(
    name = "tristatemenuitem",
    srcs = ["tristatemenuitem.css"],
    data = [
        "//third_party/gios/closure_library",
        "//third_party/closure/goog:gios",
    ],
    deps_mgmt = "legacy",
)
