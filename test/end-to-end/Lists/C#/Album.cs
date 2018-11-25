namespace Lists
{
    public class Album
    {
        public string Name;
        public int Year;

        public Album(string name, int year)
        {
            this.Name = name;
            this.Year = year;
        }

        public string GetLabel()
        {
            return string.Format("{0}: {1}", this.Name, this.Year);
        }
    }
}
