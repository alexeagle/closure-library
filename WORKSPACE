workspace(name = "com_google_javascript_closure_library")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "f2badc609a80a234bb51d1855281dd46cac90eadc57545880a3b5c38be0960e7",
    strip_prefix = "rules_closure-b2a6fb762a2a655d9970d88a9218b7a1cf098ffa",
    urls = [
        "https://github.com/bazelbuild/rules_closure/archive/b2a6fb762a2a655d9970d88a9218b7a1cf098ffa.tar.gz",  # 2019-08-05
    ],
)

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

closure_repositories()
