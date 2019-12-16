package(default_visibility = ["//visibility:public"])

sh_test(
    name = "run_py_tests",
    srcs = ["run_py_tests.sh"],
    data = ["//testing/shbase"] + glob(["*.py"]),
)

sh_test(
    name = "run_el_tests",
    srcs = ["run_el_tests.sh"],
    data = ["//testing/shbase"] + glob(["*.el"]),
    tags = [
        "gorge",
        "local",
        "manual",
    ],
)
