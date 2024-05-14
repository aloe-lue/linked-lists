import nodes from "./Nodes.js";

const linkedLists = () => {
  let lists = null;

  const getLists = () => lists;

  const append = (value, nodes) => {
    let val = value;

    if (lists === null) {
      lists = nodes(val).node;
    } else {
      let tmp = lists;

      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = nodes(val).node;
    }
  };

  const prepend = (value, nodes) => {
    let val = value;

    let tmp = lists;
    tmp = nodes(value, lists).node;

    lists = tmp;
  };

  const size = () => {
    let tmp = lists;
    let count = 0;

    while (tmp !== null) {
      count++;
      tmp = tmp.next;
    }

    return { count };
  };

  const head = () => {
    let tmp = lists;

    return tmp.val;
  };

  const tail = () => {
    let tmp = lists;

    if (tmp === null) {
      return null;
    }
    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    return tmp.val;
  };

  const at = (index) => {
    let tmp = lists;
    let aim = index;

    for (let i = 0; i < aim - 1; i++) {
      tmp = tmp.next;
    }

    return tmp.val;
  };

  const pop = (len) => {
    let tmp = lists;
    let prev = null;
    let curr = tmp;

    if (tmp === null) {
      return null;
    }

    if (len().count === 1) {
      lists = null;
    }

    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    if (prev !== null) {
      prev.next = null;
    }

    return prev;
  };

  const contain = (value) => {
    let tmp = lists;
    let val = value;
    let arr = [];
    let i = 0;

    while (tmp !== null) {
      arr[i++] = tmp.val;
      tmp = tmp.next;
    }

    let isIncluded = () => arr.includes(value);
    return { isIncluded, arr };
  };

  const find = (value, contains) => {
    let val = value;
    let contain = contains;
    let count = 0;
    let i = 0;
    let tmp = lists;

    if (tmp === null) {
      count = null;
      return count;
    }

    while (contain(val).arr[i] !== val) {
      count++;
      i++;
    }

    return count;
  };

  const ToString = (contains) => {
    let tmp = lists;
    let contain = contains;
    let string = "";

    contain().arr.forEach((element) => {
      string += `(${element}) -> `;
    });
    string += null;

    return string;
  };

  return {
    getLists,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contain,
    find,
    ToString,
  };
};

const ll = linkedLists();
const lnl = linkedLists();

ll.append(1, nodes);
ll.append(2, nodes);
ll.prepend(3, nodes); // 3 -> 1 -> 2
ll.prepend(4, nodes); // 4 -> 3 -> 1 -> 2

console.log(ll.ToString(ll.contain), lnl.ToString(lnl.contain));
