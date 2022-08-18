// initial postion of the mouse pointers
let x = 0;
let y = 0;

// final position of the mouse pointer where the cream is taken to.
let movedX = 0;
let movedY = 0;
let cream = document.getElementById("cream");
let cherry = document.getElementById("cherry");
// selecting the creamand applying and triggering the function once there is a mouse click.
document.getElementById(cream.id).onmousedown = dragCream;
document.getElementById(cherry.id).onmousedown = dragCherry;

document.getElementById("changeButter").addEventListener("click", function() {
  cream.style.backgroundColor = "orange";
})
document.getElementById("changeChocolate").addEventListener("click", function() {
  cream.style.backgroundColor = "brown";
})

document.getElementById("newScoop").addEventListener("click", function() {
  const scoop = document.createElement("div");
  var style = {
    position: "absolute",
    padding: "30px",
    width: "30px",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    backgroundColor: "#B9005B",
    cursor: "move",
    display: "inline-block"
  }
  var styles = document.createElement("style");
  scoop.appendChild(styles);
  styles.type = "text/css";
  if (styles.stylesheet) {
    styles.stylesheet.cssText = style;
  } else {
    styles.appendChild(document.createTextNode(style));
  }
  const element = document.querySelector(".creamSection");
  // console.log(element);
  element.appendChild(scoop);


  //   var css = 'h1 { background: red; }',
  //     head = document.head || document.getElementsByTagName('head')[0],
  //     style = document.createElement('style');
  //
  // head.appendChild(style);
  //
  // style.type = 'text/css';
  // if (style.styleSheet){
  //   // This is required for IE8 and below.
  //   style.styleSheet.cssText = css;
  // } else {
  //   style.appendChild(document.createTextNode(css));
  // }
})

// as soon as the mouse key is pressed the position of the cursor is noted.

function dragCream(key) {
  x = key.clientX;
  y = key.clientY;
  // when i release the mouse pointer.
  document.onmouseup = dragEnd;
  // call a function whenever the cursor moves:
  document.onmousemove = dragUpdateCream;
}

function dragUpdateCream(key) {
  movedX = x - key.clientX;
  movedY = y - key.clientY;
  // using simple math to find he new position of the cursor carrying the cream
  cream.style.top = (cream.offsetTop - movedY) + "px";
  cream.style.left = (cream.offsetLeft - movedX) + "px";
  x = key.clientX;
  y = key.clientY;
}

function dragEnd() {
  // stop moving when mouse button is released
  document.onmouseup = undefined;
  document.onmousemove = undefined;
}
// if(document.getElementById(cherry.id).onmousedown){
function dragCherry(key) {
  x = key.clientX;
  y = key.clientY;
  // when i release the mouse pointer.
  document.onmouseup = dragEnd;
  // call a function whenever the cursor moves:
  document.onmousemove = dragUpdateCherry;
}

function dragUpdateCherry(key) {
  movedX = x - key.clientX;
  movedY = y - key.clientY;
  // using simple math to find he new position of the cursor carrying the cream
  cherry.style.top = (cherry.offsetTop - movedY) + "px";
  cherry.style.left = (cherry.offsetLeft - movedX) + "px";
  x = key.clientX;
  y = key.clientY;
}

function dragEnd() {
  // stop moving when mouse button is released
  document.onmouseup = undefined;
  document.onmousemove = undefined;
}
