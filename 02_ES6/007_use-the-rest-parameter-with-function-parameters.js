const sum = (...args) => {
  // const args = [args];
  return args.reduce((a, b) => a + b, 0);
}