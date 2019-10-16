package(default_visibility = ["//visibility:public"])

licenses(["notice"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "all_js",
    exports = [":jstdasyncwrapper"],
)

closure_js_library(
    name = "assertionfailure",
    testonly = True,
    srcs = ["//closure/goog/testing:assertionfailure.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "asserts",
    testonly = True,
    srcs = ["//closure/goog/testing:asserts.js"],
    lenient = True,
    deps = ["//closure/goog/testing:jsunitexception"],
)

closure_js_library(
    name = "asynctestcase",
    testonly = True,
    srcs = ["//closure/goog/testing:asynctestcase.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "benchmark",
    testonly = True,
    srcs = ["//closure/goog/testing:benchmark.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:performancetimer",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "continuationtestcase",
    testonly = True,
    srcs = ["//closure/goog/testing:continuationtestcase.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "deferredtestcase",
    testonly = True,
    srcs = ["//closure/goog/testing:deferredtestcase.js"],
    lenient = True,
    deps = [
        "//closure/goog/testing:asynctestcase",
        "//closure/goog/testing:testcase",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "dom",
    testonly = True,
    srcs = ["//closure/goog/testing:dom.js"],
    lenient = True,
    deps = [
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
        "//closure/goog/testing:asserts",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "expectedfailures",
    testonly = True,
    srcs = ["//closure/goog/testing:expectedfailures.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:divconsole",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/log",
        "//closure/goog/style",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:jsunitexception",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "functionmock",
    testonly = True,
    srcs = ["//closure/goog/testing:functionmock.js"],
    lenient = True,
    deps = [
        "//closure/goog/object",
        "//closure/goog/testing:loosemock",
        "//closure/goog/testing:mock",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing:strictmock",
    ],
)

closure_js_library(
    name = "graphics",
    testonly = True,
    srcs = ["//closure/goog/testing:graphics.js"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:path",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "jstdasyncwrapper",
    srcs = ["//closure/goog/testing:jstdasyncwrapper.js"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "jstdtestcaseadapter",
    testonly = True,
    srcs = ["//closure/goog/testing:jstdtestcaseadapter.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:run",
        "//closure/goog/functions",
        "//closure/goog/testing:jstdasyncwrapper",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "jsunit",
    testonly = True,
    srcs = ["//closure/goog/testing:jsunit.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:testcase",
        "//closure/goog/testing:testrunner",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "jsunitexception",
    testonly = True,
    srcs = ["//closure/goog/testing:jsunitexception.js"],
    lenient = True,
    deps = ["//closure/goog/testing:stacktrace"],
)

closure_js_library(
    name = "loosemock",
    testonly = True,
    srcs = ["//closure/goog/testing:loosemock.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/structs:map",
        "//closure/goog/structs:set",
        "//closure/goog/testing:mock",
    ],
)

closure_js_library(
    name = "mock",
    testonly = True,
    srcs = ["//closure/goog/testing:mock.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/promise:resolver",
        "//closure/goog/testing:jsunitexception",
        "//closure/goog/testing:mockinterface",
        "//closure/goog/testing:mockmatchers",
    ],
)

closure_js_library(
    name = "mockclassfactory",
    testonly = True,
    srcs = ["//closure/goog/testing:mockclassfactory.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
        "//closure/goog/testing:loosemock",
        "//closure/goog/testing:mockmatchers",
        "//closure/goog/testing:strictmock",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "mockclock",
    testonly = True,
    srcs = ["//closure/goog/testing:mockclock.js"],
    lenient = True,
    deps = [
        "//closure/goog/async:run",
        "//closure/goog/disposable",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing/events",
    ],
)

closure_js_library(
    name = "mockcontrol",
    testonly = True,
    srcs = ["//closure/goog/testing:mockcontrol.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/promise",
        "//closure/goog/testing:functionmock",
        "//closure/goog/testing:loosemock",
        "//closure/goog/testing:strictmock",
    ],
)

closure_js_library(
    name = "mockinterface",
    testonly = True,
    srcs = ["//closure/goog/testing:mockinterface.js"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "mockmatchers",
    testonly = True,
    srcs = ["//closure/goog/testing:mockmatchers.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mockrandom",
    testonly = True,
    srcs = ["//closure/goog/testing:mockrandom.js"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "mockrange",
    testonly = True,
    srcs = ["//closure/goog/testing:mockrange.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom:abstractrange",
        "//closure/goog/testing:loosemock",
    ],
)

closure_js_library(
    name = "mockstorage",
    testonly = True,
    srcs = ["//closure/goog/testing:mockstorage.js"],
    lenient = True,
    deps = ["//closure/goog/structs:map"],
)

closure_js_library(
    name = "mockuseragent",
    testonly = True,
    srcs = ["//closure/goog/testing:mockuseragent.js"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "multitestrunner",
    testonly = True,
    srcs = ["//closure/goog/testing:multitestrunner.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/testing:testcase",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:serverchart",
        "//closure/goog/ui:tablesorter",
    ],
)

closure_js_library(
    name = "objectpropertystring",
    testonly = True,
    srcs = ["//closure/goog/testing:objectpropertystring.js"],
    lenient = True,
)

closure_js_library(
    name = "performancetable",
    testonly = True,
    srcs = ["//closure/goog/testing:performancetable.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:performancetimer",
    ],
)

closure_js_library(
    name = "performancetimer",
    testonly = True,
    srcs = ["//closure/goog/testing:performancetimer.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "propertyreplacer",
    testonly = True,
    srcs = ["//closure/goog/testing:propertyreplacer.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "pseudorandom",
    testonly = True,
    srcs = ["//closure/goog/testing:pseudorandom.js"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "recordfunction",
    testonly = True,
    srcs = ["//closure/goog/testing:recordfunction.js"],
    lenient = True,
    deps = [
        "//closure/goog/promise",
        "//closure/goog/promise:resolver",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "shardingtestcase",
    testonly = True,
    srcs = ["//closure/goog/testing:shardingtestcase.js"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/testing:testcase",
    ],
)

closure_js_library(
    name = "singleton",
    testonly = True,
    srcs = ["//closure/goog/testing:singleton.js"],
    lenient = True,
)

closure_js_library(
    name = "stacktrace",
    testonly = True,
    srcs = ["//closure/goog/testing:stacktrace.js"],
    lenient = True,
)

closure_js_library(
    name = "strictmock",
    testonly = True,
    srcs = ["//closure/goog/testing:strictmock.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/structs:set",
        "//closure/goog/testing:mock",
    ],
)

closure_js_library(
    name = "testcase",
    testonly = True,
    srcs = ["//closure/goog/testing:testcase.js"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:jsunitexception",
    ],
)

closure_js_library(
    name = "testqueue",
    testonly = True,
    srcs = ["//closure/goog/testing:testqueue.js"],
    lenient = True,
)

closure_js_library(
    name = "testrunner",
    testonly = True,
    srcs = ["//closure/goog/testing:testrunner.js"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/json",
        "//closure/goog/testing:testcase",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "testsuite",
    testonly = True,
    srcs = ["//closure/goog/testing:testsuite.js"],
    lenient = True,
    deps = [
        "//closure/goog/labs/testing:environment",
        "//closure/goog/testing:testcase",
    ],
)
