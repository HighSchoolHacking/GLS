class Album {
    $Name;
    $Year;

    Album($name, $year) {
        $this.Name = $name;
        $this.Year = $year;
    }

    [string] getLabel() {
        return "$($this.Name): $($this.Year)";
    }
}
