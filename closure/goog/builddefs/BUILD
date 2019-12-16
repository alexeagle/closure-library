load("//tools/build_defs/testing:bzl_library.bzl", "bzl_library")

package(default_visibility = ["//visibility:public"])

exports_files([
    "builddefs.bzl",
])

exports_files(
    ["closure-private.bzl"],
    visibility = ["//closure/goog:__subpackages__"],
)

bzl_library(
    name = "flags",
    srcs = ["flags.bzl"],
    deps = [],
)

bzl_library(
    name = "builddefs",
    srcs = ["builddefs.bzl"],
    deps = [
        ":flags",
        "//tools/build_defs/js:rules",
        "//tools/build_defs/js/wrap_jslib",
    ],
)
