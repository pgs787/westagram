const id = document.getElementById("id");
const pwd = document.getElementById("password");
const btn = document.getElementById("logBtn");
const img = document.getElementById("mainImage");
const imglist = document.getElementsByClassName("mainImage");

const colorON = "rgba(var(--h5f,56,151,240),1)";
const colorOFF = "rgba(var(--h5f, 56, 151, 240), 0.3)";

const changeColor = e => {
  if (e !== id) {
    if (pwd.value && e.target.value) btn.style.backgroundColor = colorON;
    else btn.style.backgroundColor = colorOFF;
  }
};

id.addEventListener("input", changeColor);
pwd.addEventListener("input", changeColor);

let i = 0;
setInterval(function paintImage() {
  if (i === imglist.length - 1) {
    imglist[i].classList.remove("visable");
    i = 0;
    imglist[0].classList.add("visable");
  } else {
    imglist[i + 1].classList.add("visable");
    imglist[i].classList.remove("visable");
    i++;
  }
}, 2000);

// setInterval(function paintImage() {
//   const random = Math.floor(Math.random() * IMG_NUM) + 1;
//   img.style.backgroundImage = `url(img/${random}.jpg)`;
//   img.style.backgroundRepeat = "no-repeat";
//   img.style.backgroundSize = "100%";
// }, 1000);
