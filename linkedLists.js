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

  return { append, prepend };
};
