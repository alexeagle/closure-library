load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

package_group(
    name = "util_legacy_users",
    packages =
        [
            "//googledata/html/templates/gws/head/xjs",
            "//googledata/html/templates/gws/head/xjs/agsa",
            "//googledata/html/templates/gws/head/xjs/clicktracking",
            "//googledata/html/templates/gws/head/xjs/common",
            "//googledata/html/templates/gws/head/xjs/common/jslayout/search/engagement",
            "//googledata/html/templates/gws/head/xjs/debug",
            "//googledata/html/templates/gws/head/xjs/history_state",
            "//googledata/html/templates/gws/head/xjs/knowledge",
            "//googledata/html/templates/gws/head/xjs/plugins/knowledge/verticals/internetspeedtest/lightbox",
            "//googledata/html/templates/gws/head/xjs/plugins/local",
            "//googledata/html/templates/gws/head/xjs/plugins/lrfactory",
            "//googlex/pancetta/private/chrome/src/rialto",
            "//java/com/google/access/oldhob/portal/client",
            "//java/com/google/apps/dynamite/v1/web/ui/data/pusheventcommitter",
            "//java/com/google/apps/dynamite/v1/web/ui/topbar/accountswitcher/pwainstallation",
            "//java/com/google/googlex/lifescience/frontend/common/client",
            "//java/com/google/gws/plugins/knowledge/cards/expansion",
            "//java/com/google/gws/plugins/lrfactory/features/lightbox",
            "//java/com/google/identity/boq/accountsettings/ui/privacyguide",
            "//closure/goog",
            "//javascript/social/analysis",
            "//maps/lite/js/main",
            "//maps/lite/js/panes",
            "//maps/lite/js/promo",
            "//maps/lite/js/searchbox",
            "//ocean/booksfe/js/listen/components/listen_redirect",
            "//wireless/android/play/analytics/js",
            "//wireless/android/video/lava/playlog",
        ],
)

closure_js_library(
    name = "useragent",
    srcs = [],
    lenient = True,
    deps = [
        ":browser",
        ":device",
        ":engine",
        ":extra",
        ":platform",
        ":verifier",
    ],
)

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":browser",
        ":device",
        ":engine",
        ":extra",
        ":platform",
        ":verifier",
    ],
)

closure_js_library(
    name = "browser",
    srcs = ["browser.js"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/object",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "device",
    srcs = ["device.js"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "engine",
    srcs = ["engine.js"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "extra",
    srcs = ["extra.js"],
    lenient = True,
    tags = ["genjsdeps"],
    deps = [
        ":browser",
        ":platform",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "platform",
    srcs = ["platform.js"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog:base",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "test_agents",
    testonly = 1,
    srcs = ["test_agents.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "util",
    srcs = ["util.js"],
    lenient = True,
    visibility = [
        ":util_legacy_users",
        "//javascript/abc/libs/objects3d:__subpackages__",
        "//closure/goog/dom:__subpackages__",
        "//closure/goog/style:__pkg__",
        "//closure/goog/testing:__pkg__",
        "//closure/goog/useragent:__subpackages__",
        "//testing/puppet/modules:__pkg__",
    ],
    deps = [
        "//closure/goog:base",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "verifier",
    srcs = ["verifier.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)
