if __name__ == "__main__":
    while True:
        print("Near-infinite")
        break

    count = 0

    while count < 5:
        count += 1

        if count % 2 == 0:
            continue

        print("count is {0}".format(count))

