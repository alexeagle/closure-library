package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":float32array",
        ":float64array",
        ":mat3",
        ":mat3d",
        ":mat3f",
        ":mat4",
        ":mat4d",
        ":mat4f",
        ":quaternion",
        ":ray",
        ":vec",
        ":vec2",
        ":vec2d",
        ":vec2f",
        ":vec3",
        ":vec3d",
        ":vec3f",
        ":vec4",
        ":vec4d",
        ":vec4f",
    ],
)

closure_js_library(
    name = "float32array",
    srcs = ["//closure/goog/vec:float32array.js"],
    lenient = True,
)

closure_js_library(
    name = "float64array",
    srcs = ["//closure/goog/vec:float64array.js"],
    lenient = True,
)

closure_js_library(
    name = "mat3",
    srcs = ["//closure/goog/vec:mat3.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "mat3d",
    srcs = ["//closure/goog/vec:mat3d.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:vec3d",
    ],
)

closure_js_library(
    name = "mat3f",
    srcs = ["//closure/goog/vec:mat3f.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:vec3f",
    ],
)

closure_js_library(
    name = "mat4",
    srcs = ["//closure/goog/vec:mat4.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:vec3",
        "//closure/goog/vec:vec4",
    ],
)

closure_js_library(
    name = "mat4d",
    srcs = ["//closure/goog/vec:mat4d.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:quaternion",
        "//closure/goog/vec:vec3d",
        "//closure/goog/vec:vec4d",
    ],
)

closure_js_library(
    name = "mat4f",
    srcs = ["//closure/goog/vec:mat4f.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:quaternion",
        "//closure/goog/vec:vec3f",
        "//closure/goog/vec:vec4f",
    ],
)

closure_js_library(
    name = "quaternion",
    srcs = ["//closure/goog/vec:quaternion.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec",
        "//closure/goog/vec:vec3",
        "//closure/goog/vec:vec4",
    ],
)

closure_js_library(
    name = "ray",
    srcs = ["//closure/goog/vec:ray.js"],
    lenient = True,
    deps = ["//closure/goog/vec:vec3"],
)

closure_js_library(
    name = "vec",
    srcs = ["//closure/goog/vec:vec.js"],
    lenient = True,
    deps = [
        "//closure/goog/vec:float32array",
        "//closure/goog/vec:float64array",
    ],
)

closure_js_library(
    name = "vec2",
    srcs = ["//closure/goog/vec:vec2.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec2d",
    srcs = ["//closure/goog/vec:vec2d.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec2f",
    srcs = ["//closure/goog/vec:vec2f.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec3",
    srcs = ["//closure/goog/vec:vec3.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec3d",
    srcs = ["//closure/goog/vec:vec3d.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec3f",
    srcs = ["//closure/goog/vec:vec3f.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec4",
    srcs = ["//closure/goog/vec:vec4.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec4d",
    srcs = ["//closure/goog/vec:vec4d.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)

closure_js_library(
    name = "vec4f",
    srcs = ["//closure/goog/vec:vec4f.js"],
    lenient = True,
    deps = ["//closure/goog/vec"],
)
