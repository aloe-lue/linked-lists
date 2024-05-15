import linkedLists from './linkedLists.js';
import nodes from './Nodes.js';

const ll = linkedLists();
const lnl = linkedLists();

console.log(
  'test no. 1 --- ll',
  '\n',
  ll.append({ value: 1, node: nodes }), // (1) -> null
  '\n',
  ll.append({ value: 2, node: nodes }), // (1) -> (2) -> null
  '\n',
  ll.prepend({ value: 3, node: nodes }), // (3) -> (1) -> (2) -> null
  '\n',
  ll.prepend({ value: 4, node: nodes }), // (4) -> (3) -> (1) -> (2) -> null
  '\n',
  ll.size(), // 4
  '\n',
  ll.head(), // 4
  '\n',
  ll.tail(), // 2
  '\n',
  ll.at(2), // 1
  '\n',
  ll.pop({ len: ll.size }), // { val: 2, next: null }
  '\n',
  ll.contain({ value: 2 }).isIncluded(), // false
  '\n',
  ll.find({ value: 3, contain: ll.contain }), // 1
  '\n',
  ll.insertAt({ value: 3, index: 3, node: nodes }), // { val: 3: next: null }
  '\n',
  ll.ToString({ contain: ll.contain }), // (4) -> (3) -> (1) -> (3) -> null
  '\n',
  ll.removeAt({ index: 3 }), // { val: 3, next: null }
  '\n',
  ll.ToString({ contain: ll.contain }),
  '\n',
  ll.insertAt({ value: 2, index: 1, node: nodes }), // (4) -> (2) -> (3) -> (1) ->  null
  '\n',
  ll.ToString({ contain: ll.contain }),
  '\n',
  '\n',
  'test no. 2 --- lnl # empty values',
  '\n',
  lnl.size(),
  '\n',
  lnl.head(),
  '\n',
  lnl.tail(),
  '\n',
  lnl.at({ index: 2 }),
  '\n',
  lnl.pop({ len: lnl.size }),
  '\n',
  lnl.contain({ value: 2 }).isIncluded(),
  '\n',
  lnl.find({ value: 3, contain: ll.contain }),
  '\n',
  lnl.insertAt({ value: 3, index: 3, node: nodes }),
  '\n',
  lnl.ToString({ contain: lnl.contain }),
  '\n',
  lnl.removeAt({ index: 1000 }),
  '\n',
  lnl.ToString({ contain: lnl.contain }),
);
