exports.Album = class Album {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    getLabel() {
        return `${this.name}: ${this.year}`;
    }
}
