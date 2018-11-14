try:
    raise Exception("Oh no!")
except Exception as error:
    print("Found an error.")
finally:
    # ...

