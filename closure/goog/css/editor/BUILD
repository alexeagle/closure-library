load("//closure/goog/css:build_defs.bzl", "gss_wrapper")

package(default_visibility = ["//visibility:public"])

exports_files(glob([
    "*.css",
    "*.gif",
    "*.png",
]))

css_library(
    name = "bubble",
    srcs = ["bubble.css"],
    deps_mgmt = "legacy",
    deps = ["//closure/goog/css:common"],
)

gss_wrapper(
    name = "bubble_gss",
    css_rule_name = "bubble",
    namespace = "goog.css.editor.bubble",
    use_deps_mgmt_build = True,
)

css_library(
    name = "dialog",
    srcs = ["dialog.css"],
    deps_mgmt = "legacy",
    deps = [
        "//closure/goog/css:dialog",
        "//closure/goog/css:tab",
        "//closure/goog/css:tabbar",
    ],
)

gss_wrapper(
    name = "dialog_gss",
    css_rule_name = "dialog",
    namespace = "goog.css.editor.dialog",
    use_deps_mgmt_build = True,
)

css_library(
    name = "equationeditor",
    srcs = ["equationeditor.css"],
    deps_mgmt = "legacy",
    deps = ["//closure/goog/css:common"],
)

css_library(
    name = "linkdialog",
    srcs = ["linkdialog.css"],
    deps_mgmt = "legacy",
    deps = [
        "//closure/goog/css:linkbutton",
        ":dialog",
    ],
)

gss_wrapper(
    name = "linkdialog_gss",
    css_rule_name = "linkdialog",
    namespace = "goog.css.editor.linkdialog",
    use_deps_mgmt_build = True,
)
