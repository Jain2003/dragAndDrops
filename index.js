// initial postion of the mouse pointers
let x = 0;
let y = 0;
// final position of the mouse pointer where the cream is taken to.
let movedX = 0;
let movedY = 0;
let cream = document.getElementById("cream");
// selecting the creamand applying and triggering the function once there is a mouse click.
document.getElementById(cream.id).onmousedown = drag;

// as soon as the mouse key is pressed the position of the cursor is noted.
  function drag(key) {
    x = key.clientX;
    y = key.clientY;
    // when i release the mouse pointer.
    document.onmouseup = dragEnd;
    // call a function whenever the cursor moves:
    document.onmousemove = dragUpdate;
  }

  function dragUpdate(key) {
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
