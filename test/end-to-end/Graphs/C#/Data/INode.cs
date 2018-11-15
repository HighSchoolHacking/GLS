using System.Collections.Generic;

namespace Graphs.Data
{
    public interface INode<TNode>
    {
        List<TNode> GetNeighborsInOrder();
    }
}
