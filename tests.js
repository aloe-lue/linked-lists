import linkedLists from "./linkedLists.js";
import nodes from "./Nodes.js";

const ll = linkedLists();
const lnl = linkedLists();

console.log(
  "test no. 1 --- ll",
  "\n",
  ll.append(1, nodes),
  "\n",
  ll.append(2, nodes),
  "\n",
  ll.prepend(3, nodes), 
  "\n",
  ll.prepend(4, nodes),
  "\n",

  "test no. 2 --- lnl # empty values"
);
