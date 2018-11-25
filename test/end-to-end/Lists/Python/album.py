class Album:

    def __init__(self, name, year):
        self.name = name
        self.year = year

    def get_label(self):
        return "{0}: {1}".format(self.name, self.year)
