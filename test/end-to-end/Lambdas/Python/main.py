def run_on_ints(format):
    for i in range(0, 10):
        print(format(i))

if __name__ == "__main__":
    run_on_ints(lambda i: "Int: {0}".format(i))
