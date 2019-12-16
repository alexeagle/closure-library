load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
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
    srcs = ["avltree.js"],
    lenient = True,
    deps = [
        ":collection",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "circularbuffer",
    srcs = ["circularbuffer.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "collection",
    srcs = ["collection.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "heap",
    srcs = ["heap.js"],
    lenient = True,
    deps = [
        ":node",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "inversionmap",
    srcs = ["inversionmap.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "linkedmap",
    srcs = ["linkedmap.js"],
    lenient = True,
    deps = [
        ":map",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "map",
    srcs = ["map.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "node",
    srcs = ["node.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "pool",
    srcs = ["pool.js"],
    lenient = True,
    deps = [
        ":queue",
        ":set",
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "prioritypool",
    srcs = ["prioritypool.js"],
    lenient = True,
    deps = [
        ":pool",
        ":priorityqueue",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "priorityqueue",
    srcs = ["priorityqueue.js"],
    lenient = True,
    deps = [
        ":heap",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "quadtree",
    srcs = ["quadtree.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/math:coordinate",
    ],
)

closure_js_library(
    name = "queue",
    srcs = ["queue.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "set",
    srcs = ["set.js"],
    lenient = True,
    deps = [
        ":collection",
        ":map",
        ":structs",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "simplepool",
    srcs = ["simplepool.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "stringset",
    srcs = ["stringset.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "structs",
    srcs = ["structs.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "treenode",
    srcs = ["treenode.js"],
    lenient = True,
    deps = [
        ":node",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "trie",
    srcs = ["trie.js"],
    lenient = True,
    deps = [
        ":structs",
        "//closure/goog:base",
        "//closure/goog/object",
    ],
)
