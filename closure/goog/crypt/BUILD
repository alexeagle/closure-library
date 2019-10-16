package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
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
    srcs = ["//closure/goog/crypt:aes.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt:blockcipher",
    ],
)

closure_js_library(
    name = "arc4",
    srcs = ["//closure/goog/crypt:arc4.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "base64",
    srcs = ["//closure/goog/crypt:base64.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt",
        "//closure/goog/string",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "basen",
    srcs = ["//closure/goog/crypt:basen.js"],
    lenient = True,
)

closure_js_library(
    name = "blobhasher",
    srcs = ["//closure/goog/crypt:blobhasher.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "blockcipher",
    srcs = ["//closure/goog/crypt:blockcipher.js"],
    lenient = True,
)

closure_js_library(
    name = "cbc",
    srcs = ["//closure/goog/crypt:cbc.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/crypt",
        "//closure/goog/crypt:blockcipher",
    ],
)

closure_js_library(
    name = "crypt",
    srcs = ["//closure/goog/crypt:crypt.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "ctr",
    srcs = ["//closure/goog/crypt:ctr.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/crypt",
    ],
)

closure_js_library(
    name = "hash",
    srcs = ["//closure/goog/crypt:hash.js"],
    lenient = True,
)

closure_js_library(
    name = "hash32",
    srcs = ["//closure/goog/crypt:hash32.js"],
    lenient = True,
    deps = ["//closure/goog/crypt"],
)

closure_js_library(
    name = "hashtester",
    testonly = True,
    srcs = ["//closure/goog/crypt:hashtester.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/crypt",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:pseudorandom",
    ],
)

closure_js_library(
    name = "hmac",
    srcs = ["//closure/goog/crypt:hmac.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:hash"],
)

closure_js_library(
    name = "md5",
    srcs = ["//closure/goog/crypt:md5.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:hash"],
)

closure_js_library(
    name = "pbkdf2",
    srcs = ["//closure/goog/crypt:pbkdf2.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/crypt",
        "//closure/goog/crypt:hmac",
        "//closure/goog/crypt:sha1",
    ],
)

closure_js_library(
    name = "sha1",
    srcs = ["//closure/goog/crypt:sha1.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:hash"],
)

closure_js_library(
    name = "sha2",
    srcs = ["//closure/goog/crypt:sha2.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/crypt:hash",
    ],
)

closure_js_library(
    name = "sha224",
    srcs = ["//closure/goog/crypt:sha224.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:sha2"],
)

closure_js_library(
    name = "sha256",
    srcs = ["//closure/goog/crypt:sha256.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:sha2"],
)

closure_js_library(
    name = "sha2_64bit",
    srcs = ["//closure/goog/crypt:sha2_64bit.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/crypt:hash",
        "//closure/goog/math:long",
    ],
)

closure_js_library(
    name = "sha384",
    srcs = ["//closure/goog/crypt:sha384.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:sha2_64bit"],
)

closure_js_library(
    name = "sha512",
    srcs = ["//closure/goog/crypt:sha512.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:sha2_64bit"],
)

closure_js_library(
    name = "sha512_256",
    srcs = ["//closure/goog/crypt:sha512_256.js"],
    lenient = True,
    deps = ["//closure/goog/crypt:sha2_64bit"],
)
