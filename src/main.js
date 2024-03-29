import { loadMZ } from "./mzoom";
import { titleAnim } from "./txtanim";

/* carousel code
from https://github.com/HoangTran0410/3DCarousel/
*/


// if(screen.width > screen.height)
// {
//   var radius = screen.width/2.5;
// }
// else
// {
//   var radius = screen.height/2.5;
// }

var radius = window.innerWidth/2.5;// how big the radius of carousel is
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = window.innerWidth/100; // width of images (unit: rem)
var imgHeight = window.innerHeight/100; // height of images (unit: rem)

// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aEle = ospin.getElementsByClassName('spin-highlight');

// Size of images
ospin.style.width = imgWidth + "rem";
ospin.style.height = imgHeight + "rem";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 0.15 + "rem";
ground.style.height = radius * 0.15 + "rem";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

// document.onmousewheel = function(e) {
//   e = e || window.event;
//   var d = e.wheelDelta / 20 || -e.detail;
//   radius += d;
//   init(1);
// };


// Start the typewriter animation on loaded event
document.addEventListener('DOMContentLoaded', () => {
  titleAnim();
  setTimeout(function() { loadMZ(); }, 4000);
});

document.addEventListener('click', () => {
  var vids = document.querySelectorAll('video');
  vids.forEach(element => {
    element.play();
  });
});

function rescaleWindowSize() {
  var r_height = window.innerHeight;
  var r_width = window.innerWidth;

  radius = r_width / 2.5;
  ospin.style.width = r_width/100 + "rem";
  ospin.style.height = r_height/100 + "rem";
  init(1);
}

window.onresize = rescaleWindowSize;
