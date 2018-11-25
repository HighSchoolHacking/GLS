package lists;

public class Album {
    public String name;
    public int year;

    public Album(String name, int year) {
        this.name = name;
        this.year = year;
    }

    public String getLabel() {
        return String.format("%0$s: %1$d", this.name, this.year);
    }
}
