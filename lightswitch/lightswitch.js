function start() {
  var click = document.getElementById("slider");
  click.addEventListener("click", toggle);
};

function toggle() {
  var color = document.getElementById("body");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "black" ? "white" : "black";
};

start();
