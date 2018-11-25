export class Album {
    public name: string;
    public year: number;

    public constructor(name: string, year: number) {
        this.name = name;
        this.year = year;
    }

    public getLabel(): string {
        return `${this.name}: ${this.year}`;
    }
}
