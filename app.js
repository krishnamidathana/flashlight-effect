let mouseX = 0,
  mouseY = 0;

let flashlight = document.getElementById("flashLight");

const isTouchScreen = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchScreen() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchScreen() ? e.pageY : e.touches[0].PageY;

  flashlight.style.setProperty("--xpos", mouseX + "px");
  flashlight.style.setProperty("--ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);
