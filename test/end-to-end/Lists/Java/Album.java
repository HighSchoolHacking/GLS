package lists;

public class Album {
    public String name;
    public Integer year;

    public Album(String name, Integer year) {
        this.name = name;
        this.year = year;
    }

    public String getLabel() {
        return String.format("$s: $d", this.name, this.year);
    }
}
