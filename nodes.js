const nodes = (value, nextNodes) => {
  let data = value ? value : null;
  let next = nextNodes ? nextNodes : null;

  let node = { data, next };

  return { node };
};

let sample = { value: "a", next: null };

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


console.log(sample);
