//
using PointClass;

namespace PointClass
{

    public class NamedPoint : Point
    {
        private string name;

        public NamedPoint(int x, int y, string name)
            : base(x, y)
        {
            this.name = name;
        }

        public string GetLabel()
        {
            return string.Format("{0} at [{1}, {2}] with vector {3}", this.name, this.X, this.Y, this.Vector);
        }
    }
}
//
