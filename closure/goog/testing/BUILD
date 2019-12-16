load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

closure_js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    tags = ["avoid_dep"],
    exports = [
        ":asserts",
        ":asynctestcase",
        ":continuationtestcase",
        ":deferredtestcase",
        ":dom",
        ":expectedfailures",
        ":functionmock",
        ":graphics",
        ":jstdasyncwrapper",
        ":jstdtestcaseadapter",
        ":jsunit",
        ":jsunitexception",
        ":loosemock",
        ":mock",
        ":mockclassfactory",
        ":mockclock",
        ":mockcontrol",
        ":mockinterface",
        ":mockmatchers",
        ":mockrandom",
        ":mockrange",
        ":mockstorage",
        ":mockuseragent",
        ":multitestrunner",
        ":objectpropertystring",
        ":performancetable",
        ":performancetimer",
        ":propertyreplacer",
        ":pseudorandom",
        ":recordfunction",
        ":shardingtestcase",
        ":singleton",
        ":stacktrace",
        ":strictmock",
        ":testcase",
        ":testqueue",
        ":testrunner",
        ":testsuite",
        "//closure/goog/testing/async:all_js",
        "//closure/goog/testing/editor:all_js",
        "//closure/goog/testing/events:all_js",
        "//closure/goog/testing/fs:all_js",
        "//closure/goog/testing/messaging:all_js",
        "//closure/goog/testing/net:all_js",
        "//closure/goog/testing/proto2:all_js",
        "//closure/goog/testing/style:all_js",
        "//closure/goog/testing/ui:all_js",
    ],
)

closure_js_library(
    name = "assertionfailure",
    srcs = ["assertionfailure.js"],
    lenient = True,
    visibility = ["//closure/goog:__pkg__"],
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "asserts",
    srcs = ["asserts.js"],
    lenient = True,
    deps = [
        ":jsunitexception",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "asynctestcase",
    srcs = ["asynctestcase.js"],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "benchmark",
    testonly = 1,
    srcs = ["benchmark.js"],
    lenient = True,
    deps = [
        ":performancetable",
        ":performancetimer",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "continuationtestcase",
    srcs = ["continuationtestcase.js"],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "deferredtestcase",
    srcs = ["deferredtestcase.js"],
    lenient = True,
    deps = [
        ":asynctestcase",
        ":testcase",
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["dom.js"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:nodeiterator",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom:tagname",
        "//closure/goog/iter",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "expectedfailures",
    srcs = ["expectedfailures.js"],
    lenient = True,
    deps = [
        ":asserts",
        ":jsunitexception",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/debug:divconsole",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/log",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "functionmock",
    srcs = ["functionmock.js"],
    lenient = True,
    deps = [
        ":loosemock",
        ":mock",
        ":propertyreplacer",
        ":strictmock",
        "//closure/goog:base",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "graphics",
    srcs = ["graphics.js"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/graphics:path",
    ],
)

closure_js_library(
    name = "jstdasyncwrapper",
    srcs = ["jstdasyncwrapper.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "jstdtestcaseadapter",
    srcs = ["jstdtestcaseadapter.js"],
    lenient = True,
    deps = [
        ":jstdasyncwrapper",
        ":jsunit",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/async:run",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "jsunit",
    srcs = ["jsunit.js"],
    lenient = True,
    deps = [
        ":testcase",
        ":testrunner",
        "//closure/goog:base",
        "//closure/goog/dom:tagname",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "jsunitexception",
    srcs = ["jsunitexception.js"],
    lenient = True,
    deps = [
        ":stacktrace",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "loosemock",
    srcs = ["loosemock.js"],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/structs:map",
        "//closure/goog/structs:set",
    ],
)

closure_js_library(
    name = "mock",
    srcs = [
        "mock.js",
        "mockmatchers.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        ":jsunitexception",
        ":mockinterface",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/promise:resolver",
    ],
)

closure_js_library(
    name = "mockclassfactory",
    srcs = ["mockclassfactory.js"],
    lenient = True,
    deps = [
        ":loosemock",
        ":mockmatchers",
        ":strictmock",
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mockclock",
    srcs = ["mockclock.js"],
    lenient = True,
    deps = [
        ":propertyreplacer",
        "//closure/goog:base",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
        "//closure/goog/testing/events",
    ],
)

closure_js_library(
    name = "mockcontrol",
    srcs = ["mockcontrol.js"],
    lenient = True,
    deps = [
        ":functionmock",
        ":loosemock",
        ":strictmock",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "mockinterface",
    srcs = ["mockinterface.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "mockmatchers",
    lenient = True,
    exports = [":mock"],
)

closure_js_library(
    name = "mockrandom",
    srcs = ["mockrandom.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "mockrange",
    srcs = ["mockrange.js"],
    lenient = True,
    deps = [
        ":loosemock",
        "//closure/goog:base",
        "//closure/goog/dom:abstractrange",
    ],
)

closure_js_library(
    name = "mockstorage",
    srcs = ["mockstorage.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "mockuseragent",
    srcs = ["mockuseragent.js"],
    lenient = True,
    deps = [
        ":propertyreplacer",
        "//closure/goog:base",
        "//closure/goog/disposable",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "multitestrunner",
    srcs = ["multitestrunner.js"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:serverchart",
        "//closure/goog/ui:tablesorter",
    ],
)

closure_js_library(
    name = "objectpropertystring",
    srcs = ["objectpropertystring.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "parallel_closure_test_suite",
    testonly = 1,
    srcs = ["parallel_closure_test_suite.js"],
    lenient = True,
    deps = [
        ":multitestrunner",
        ":testcase",
        ":testsuite",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/json",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "performancetable",
    srcs = ["performancetable.js"],
    lenient = True,
    deps = [
        ":performancetimer",
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "performancetimer",
    srcs = ["performancetimer.js"],
    lenient = True,
    deps = [
        "//closure/goog/mochikit/async:deferred",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "propertyreplacer",
    srcs = ["propertyreplacer.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/asserts",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "pseudorandom",
    srcs = ["pseudorandom.js"],
    lenient = True,
    deps = [
        "//closure/goog:base",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "recordfunction",
    srcs = ["recordfunction.js"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog:base",
        "//closure/goog/promise",
        "//closure/goog/promise:resolver",
    ],
)

closure_js_library(
    name = "shardingtestcase",
    srcs = ["shardingtestcase.js"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "singleton",
    srcs = ["singleton.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "stacktrace",
    srcs = ["stacktrace.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "strictmock",
    srcs = ["strictmock.js"],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/structs:set",
    ],
)

closure_js_library(
    name = "testcase",
    srcs = ["testcase.js"],
    lenient = True,
    deps = [
        ":asserts",
        ":jsunitexception",
        "//closure/goog:base",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
    ],
)

closure_js_library(
    name = "testqueue",
    srcs = ["testqueue.js"],
    lenient = True,
    deps = ["//closure/goog:base"],
)

closure_js_library(
    name = "testrunner",
    srcs = ["testrunner.js"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/json",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "testsuite",
    srcs = ["testsuite.js"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog:base",
        "//closure/goog/labs/testing:environment",
    ],
)

js_deps(
    name = "parallel_closure_test_suite_deps",
    testonly = 1,
    srcs = [
        ":parallel_closure_test_suite",
    ],
)

closure_js_library(
    name = "parallel_closure_test_suite_deps_lib",
    testonly = 1,
    srcs = [
        ":parallel_closure_test_suite_deps",
    ],
    lenient = True,
    deps = ["//closure/goog:base"],
)
