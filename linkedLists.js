import nodes from './Nodes.js';

const linkedLists = () => {
  let lists = null;

  const getLists = () => lists;

  const append = ({ value, node }) => {
    let val = value;
    let nodes = node;

    if (lists === null) {
      lists = nodes({ value: val, nextNodes: null }).node;
    } else {
      let tmp = lists;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = nodes({ value: val, nextNodes: null }).node;
    }
    return lists;
  };

  const prepend = ({ value, node }) => {
    let nodes = node;
    let val = value;

    let tmp = lists;
    tmp = nodes({ value: val, nextNodes: lists }).node;

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
    return tmp === null ? null : tmp.val;
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

  const at = ({ index }) => {
    let tmp = lists;
    let aim = index;

    if (tmp === null) {
      return null;
    }

    for (let i = 0; i < aim - 1; i++) {
      tmp = tmp.next;
    }

    return tmp.val;
  };

  const pop = ({ len }) => {
    let tmp = lists;
    let prev = null;
    let curr = tmp;
    let leng = len;

    if (tmp === null) {
      return null;
    }

    if (leng().count === 1) {
      lists = null;
    }

    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    if (prev !== null) {
      prev.next = null;
    }

    return curr;
  };

  const contain = ({ value }) => {
    let tmp = lists;
    let val = value;
    let arr = [];
    let i = 0;

    while (tmp !== null) {
      arr[i++] = tmp.val;
      tmp = tmp.next;
    }
    const isIncluded = () => arr.includes(val);
    const getArr = () => arr;

    return { isIncluded, getArr };
  };

  const find = ({ value, contain }) => {
    let val = value;
    let contains = contain;
    let count = 0;
    let i = 0;
    let tmp = lists;

    if (tmp === null) {
      count = null;
      return count;
    }

    while (contains({ value: val }).getArr()[i] !== val) {
      count++;
      i++;
    }

    return count;
  };

  const ToString = ({ contain }) => {
    let tmp = lists;
    let contains = contain;
    let string = '';

    contains({ value: null })
      .getArr()
      .forEach((element) => {
        string += `( ${element} ) -> `;
      });
    string += null;

    return string;
  };

  const insertAt = ({ value, index, node }) => {
    let val = value;
    let idx = index;
    let nodes = node;
    let count = 0;
    let prev = null;
    let curr = lists;

    if (curr === null) {
      return null;
    }

    if (idx > 0) {
      while (count !== idx) {
        prev = curr;
        curr = curr.next;
        count++;
      }
      prev.next = nodes({ value: val, nextNodes: curr }).node;
    } else {
      curr = nodes({ value: val, nextNode: lists }).node;
    }

    return prev;
  };

  const removeAt = ({ index }) => {
    let idx = index;
    let count = 0;
    let prev = null;
    let curr = lists;
    let returnVal = null;

    if (curr === null) {
      return null;
    }
    while (count !== idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    returnVal = curr;
    prev.next = curr.next;

    return returnVal;
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
    removeAt,
  };
};

export default linkedLists;
