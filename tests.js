import linkedLists from './linkedLists.js';
import nodes from './Nodes.js';

const ll = linkedLists();
const lnl = linkedLists();

console.log(
  'test no. 1 --- ll',
  '\n',
  ll.append(1, nodes), // (1) -> null
  '\n',
  ll.append(2, nodes), // (1) -> (2) -> null
  '\n',
  ll.prepend(3, nodes), // (3) -> (1) -> (2) -> null
  '\n',
  ll.prepend(4, nodes), // (4) -> (3) -> (1) -> (2) -> null
  '\n',
  ll.size(), // 4
  '\n',
  ll.head(), // 4
  '\n',
  ll.tail(), // 2
  '\n',
  ll.at(2), // 1
  '\n',
  ll.pop(ll.size), // { val: 2, next: null }
  '\n',
  ll.contain(2).isIncluded(), // false
  '\n',
  ll.find(3, ll.contain), // 1
  '\n',
  ll.insertAt(3, 3, nodes), // { val: 3: next: null }
  '\n',
  ll.ToString(ll.contain), // (4) -> (3) -> (1) -> (3) -> null
  '\n',
  ll.removeAt(3), // { val: 3, next: null }
  '\n',
  ll.ToString(ll.contain),
  '\n',
  'test no. 2 --- lnl # empty values',

  '\n',
  lnl.size(),
  '\n',
  lnl.head(),
  '\n',
  lnl.tail(),
  '\n',
  lnl.at(2),
  '\n',
  lnl.pop(lnl.size),
  '\n',
  lnl.contain(2).isIncluded(),
  '\n',
  lnl.find(3, ll.contain),
  '\n',
  lnl.insertAt(3, 3, nodes),
  '\n',
  lnl.ToString(lnl.contain),
  '\n',
  lnl.removeAt(1000),
  '\n',
  lnl.ToString(lnl.contain),
);
