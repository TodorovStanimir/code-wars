const uniqueInOrder = (iterable) => [...iterable].reduce((acc, el) => (el !== acc.slice(-1)[0] ? acc.concat(el) : acc), []);

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
// with the same value next to each other and preserving the original order of elements.
