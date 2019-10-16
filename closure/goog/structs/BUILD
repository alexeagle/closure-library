package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [
        ":avltree",
        ":circularbuffer",
        ":collection",
        ":heap",
        ":inversionmap",
        ":linkedmap",
        ":map",
        ":node",
        ":pool",
        ":prioritypool",
        ":priorityqueue",
        ":quadtree",
        ":queue",
        ":set",
        ":simplepool",
        ":stringset",
        ":structs",
        ":treenode",
        ":trie",
    ],
)

closure_js_library(
    name = "avltree",
    srcs = ["//closure/goog/structs:avltree.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/structs:collection",
    ],
)

closure_js_library(
    name = "circularbuffer",
    srcs = ["//closure/goog/structs:circularbuffer.js"],
    lenient = True,
)

closure_js_library(
    name = "collection",
    srcs = ["//closure/goog/structs:collection.js"],
    lenient = True,
)

closure_js_library(
    name = "heap",
    srcs = ["//closure/goog/structs:heap.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
        "//closure/goog/structs:node",
    ],
)

closure_js_library(
    name = "inversionmap",
    srcs = ["//closure/goog/structs:inversionmap.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "linkedmap",
    srcs = ["//closure/goog/structs:linkedmap.js"],
    lenient = True,
    deps = ["//closure/goog/structs:map"],
)

closure_js_library(
    name = "map",
    srcs = ["//closure/goog/structs:map.js"],
    lenient = True,
    deps = ["//closure/goog/iter"],
)

closure_js_library(
    name = "node",
    srcs = ["//closure/goog/structs:node.js"],
    lenient = True,
)

closure_js_library(
    name = "pool",
    srcs = ["//closure/goog/structs:pool.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/structs:queue",
        "//closure/goog/structs:set",
    ],
)

closure_js_library(
    name = "prioritypool",
    srcs = ["//closure/goog/structs:prioritypool.js"],
    lenient = True,
    deps = [
        "//closure/goog/structs:pool",
        "//closure/goog/structs:priorityqueue",
    ],
)

closure_js_library(
    name = "priorityqueue",
    srcs = ["//closure/goog/structs:priorityqueue.js"],
    lenient = True,
    deps = ["//closure/goog/structs:heap"],
)

closure_js_library(
    name = "quadtree",
    srcs = ["//closure/goog/structs:quadtree.js"],
    lenient = True,
    deps = ["//closure/goog/math:coordinate"],
)

closure_js_library(
    name = "queue",
    srcs = ["//closure/goog/structs:queue.js"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

closure_js_library(
    name = "set",
    srcs = ["//closure/goog/structs:set.js"],
    lenient = True,
    deps = [
        "//closure/goog/structs",
        "//closure/goog/structs:collection",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "simplepool",
    srcs = ["//closure/goog/structs:simplepool.js"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "stringset",
    srcs = ["//closure/goog/structs:stringset.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "structs",
    srcs = ["//closure/goog/structs:structs.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "treenode",
    srcs = ["//closure/goog/structs:treenode.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/structs:node",
    ],
)

closure_js_library(
    name = "trie",
    srcs = ["//closure/goog/structs:trie.js"],
    lenient = True,
    deps = [
        "//closure/goog/object",
        "//closure/goog/structs",
    ],
)
