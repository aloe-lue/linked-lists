const linkedLists = () => {
  const append = (nodeFunc, node, value) => {
    let val = value;
    let tmp = node;

    if (tmp === null) {
      tmp = nodeFunc(val).node;
      node = tmp;
      return node;
    }
    if (tmp.next === null) {
      tmp.next = nodeFunc(val).node;
      node = tmp;
      return node;
    }
    while (tmp.next !== null) {
      tmp = tmp.next;

      if (tmp.next === null) {
        tmp.next = nodeFunc(val).node;
        node = tmp;
        return node;
      }
    }

    return node;
  };

  const prepend = (nodeFunc, value, node) => {
    let val = value;
    let tmp = node;

    tmp = nodeFunc(val, tmp).node;
    sample = tmp;

    return sample;
  };

  const size = (node) => {
    let tmp = node;
    let len = node ? 1 : 0;

    while (tmp.next !== null) {
      tmp = tmp.next;
      len++;
    }

    return {
      len,
    };
  };

  const head = (nodes) => {
    let tmp = nodes;
    tmp.next = null;

    return tmp;
  };

  const tail = (nodes) => {
    let tmp = nodes;
    let end = {};

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    if (tmp.next === null) {
      end = tmp;
    }

    return end;
  };

  const at = (nodes, index, size) => {
    let tmp = nodes;
    let given = index;

    if (index > size(tmp).len) {
      tmp = null;
      return tmp;
    }

    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.next;
    }

    tmp.next = null;

    return tmp;
  };

  return { append, prepend, size, head, tail, at };
};

export default linkedLists;
