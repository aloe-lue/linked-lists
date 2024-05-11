const nodes = (value, nextNodes) => {
  let val = value ? value : null;
  let next = nextNodes ? nextNodes : null;

  let node = { val, next };

  return { node };
};

let sample = { val: "a", next: null };

prepend(nodes, 'b', sample)
prepend(nodes, 'c', sample)

console.log(sample)
