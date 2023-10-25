// Define lights
const topLeft = new Light(document.querySelector("#top-left"));
const topRight = new Light(document.querySelector("#top-right"));
const bottomLeft = new Light(document.querySelector("#bottom-left"));
const bottomRight = new Light(document.querySelector("#bottom-right"));

// Define directions
const horizontal = new Direction(bottomLeft, topRight);
const vertical = new Direction(topLeft, bottomRight);

// Do stuff
