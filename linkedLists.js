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

    return lists;
  };

  const prepend = (value, nodes) => {
    let val = value;

    let tmp = lists;
    tmp = nodes(value, lists).node;

    lists = tmp;

    return lists;
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

    const isIncluded = () => arr.includes(value);
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

  const insertAt = (value, index, nodes) => {
    let val = value;
    let idx = index;
    let node = nodes;
    let count = 0;
    let prev = null;
    let curr = lists;

    if (curr === null) {
      return null
    }

    if (idx > 0) {
      while (count !== idx) {
        prev = curr;
        curr = curr.next;
        count++;
      }
      prev.next = node(val, curr).node;
    } else {
      curr = node(val, lists).node;
    }
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
    insertAt,
  };
};


export default linkedLists;




