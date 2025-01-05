import "./style.css";
//reminder to include global vars for eslint in global comment
/* global document setInterval*/

function dropdownMenu(menuBtnId, menuDropdownId) {
  let menuBtn = document.querySelector("#" + menuBtnId);
  let menuDropdown = document.querySelector("#" + menuDropdownId);
  menuBtn.addEventListener("click", () => {
    menuDropdown.classList.toggle("visible");
  });
}

dropdownMenu("menu-btn", "menu-dropdown");

let imgWheel = document.querySelector("#img-wheel");
imgWheel.style.display = 'grid';
imgWheel.style['grid-template-columns'] = 'repeat(3, 1fr)';
imgWheel.style.right = "0vw";

let rightBtn = document.querySelector('#right-btn');
rightBtn.addEventListener('click', () => next(document.querySelector("#img-wheel"), "300vw", 3, "vw"));
rightBtn.textContent = '>';


let leftBtn = document.querySelector('#left-btn');
leftBtn.addEventListener('click', () => prev(document.querySelector("#img-wheel"), "300vw", 3, "vw"));
leftBtn.textContent = '<';

let navDots = document.querySelector('#nav-dots');
navDots.style.width = '100%';
navDots.style.display = 'flex';
navDots.style.justifyContent = 'center';
let imgNodeList = imgWheel.querySelectorAll('img');
//200vw is 3, 100vw is 2, 0vw is 1
for(let img of imgNodeList){
  let btn = document.createElement('button');
  btn.style.width = '20px';
  btn.style.height = '20px';
  btn.style["border-radius"] = '100%';
  btn.id = img.id + 'btn'; 
  btn.addEventListener('change', );
  navDots.appendChild(btn);
}

setInterval(() => next(document.querySelector('#img-wheel'), '300vw', 3, 'vw'), 5000);

function getValFromString(string) {
  let arr = Array.from(string);
  arr.splice(string.length - 2, 2);
  return parseInt(arr.join(""));
}

function next(imgWheel, imgWheelWidth, imgNum, unit) {
  let currPos = getValFromString(imgWheel.style.right);
  imgWheel.style.right =
    (
      (currPos + parseInt(imgWheelWidth) / imgNum) %
      parseInt(imgWheelWidth)
    ).toString() + unit;
  return getValFromString(imgWheel.style.right) % (parseInt(imgWheelWidth) / imgNum);
}

function prev(imgWheel, imgWheelWidth, imgNum, unit) {
  let currPos = getValFromString(imgWheel.style.right);
  imgWheel.style.right =
    (
      (currPos - parseInt(imgWheelWidth) / imgNum < 0
        ? parseInt(imgWheelWidth) + (currPos - parseInt(imgWheelWidth) / imgNum)
        : currPos - parseInt(imgWheelWidth) / imgNum) % parseInt(imgWheelWidth)
    ).toString() + unit;
    return getValFromString(imgWheel.style.right) % (parseInt(imgWheelWidth) / imgNum);
}


