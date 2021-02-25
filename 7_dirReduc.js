function dirReduc(arr) {
  opposite = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };

  return arr.reduce((dirs, dir) =>
      dirs.slice(-1)[0] === opposite[dir]
        ? dirs.slice(0, dirs.length - 1)
        : dirs.concat(dir),
    []
  );
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // [WEST]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
