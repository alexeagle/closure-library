load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":aes",
        ":arc4",
        ":base64",
        ":basen",
        ":blobhasher",
        ":blockcipher",
        ":cbc",
        ":crypt",
        ":ctr",
        ":hash",
        ":hash32",
        ":hmac",
        ":md5",
        ":pbkdf2",
        ":sha1",
        ":sha2",
        ":sha224",
        ":sha256",
        ":sha2_64bit",
        ":sha384",
        ":sha512",
        ":sha512_256",
    ],
)

closure_js_library(
    name = "aes",
    srcs = ["aes.js"],
    lenient = True,
    deps = [
        ":blockcipher",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "arc4",
    srcs = ["arc4.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "base64",
    srcs = ["base64.js"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/string",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "basen",
    srcs = ["basen.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "blobhasher",
    srcs = ["blobhasher.js"],
    lenient = True,
    deps = [
        "//closure/goog/fs",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "blockcipher",
    srcs = ["blockcipher.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "bytestring_perf",
    testonly = 1,
    srcs = ["bytestring_perf.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/testing:performancetable",
    ],
)

closure_js_library(
    name = "cbc",
    srcs = ["cbc.js"],
    lenient = True,
    deps = [
        ":blockcipher",
        ":crypt",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "crypt",
    srcs = ["crypt.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "ctr",
    srcs = ["ctr.js"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "hash",
    srcs = ["hash.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "hash32",
    srcs = ["hash32.js"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "hashtester",
    testonly = 1,
    srcs = ["hashtester.js"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog/reflect",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:pseudorandom",
    ],
)

closure_js_library(
    name = "hmac",
    srcs = ["hmac.js"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "md5",
    srcs = ["md5.js"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "pbkdf2",
    srcs = ["pbkdf2.js"],
    lenient = True,
    deps = [
        ":crypt",
        ":hmac",
        ":sha1",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "sha1",
    srcs = ["sha1.js"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "sha2",
    srcs = ["sha2.js"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "sha2_64bit",
    srcs = ["sha2_64bit.js"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math:long",
    ],
)

closure_js_library(
    name = "sha224",
    srcs = ["sha224.js"],
    lenient = True,
    deps = [
        ":sha2",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "sha256",
    srcs = ["sha256.js"],
    lenient = True,
    deps = [
        ":sha2",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "sha384",
    srcs = ["sha384.js"],
    lenient = True,
    deps = [
        ":sha2_64bit",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "sha512",
    srcs = ["sha512.js"],
    lenient = True,
    deps = [
        ":sha2_64bit",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "sha512_256",
    srcs = ["sha512_256.js"],
    lenient = True,
    deps = [
        ":sha2_64bit",
        "//closure/goog:base",
    ],
)
