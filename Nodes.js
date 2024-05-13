const nodes = (value, nextNodes) => {
  let val = value ? value : null;
  let next = nextNodes ? nextNodes : null;

  let node = { val, next };

  return { node };
};

export default nodes;
