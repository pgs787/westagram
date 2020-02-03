const id = document.getElementById("id");
const idInput = document.getElementById("id-span");
const pwd = document.getElementById("password");
const pwdInput = document.getElementById("pwd-span");

const btn = document.getElementById("logBtn");
const imglist = document.getElementsByClassName("mainImage");

const colorON = "rgba(var(--h5f,56,151,240),1)";
const colorOFF = "rgba(var(--h5f, 56, 151, 240), 0.3)";

// 아이디, 비밀번호 최소 한글자
const changeColor = e => {
  if (e !== id) {
    btn.style.backgroundColor = colorOFF;
    if (pwd.value && id.value) btn.style.backgroundColor = colorON;
  }
};
// 아이디 비밀번호 각각의 속성
const idAttr = () => {
  idInput.style.transformOrigin = "top left";
  idInput.style.transform = "scale(.833) translateY(-10px)";
  idInput.style.transition = "transform .3s";
  id.style.padding = "5px 0px 0px 10px";
};

const pwdAttr = () => {
  pwdInput.style.transformOrigin = "top left";
  pwdInput.style.transform = "scale(.833) translateY(-10px)";
  pwdInput.style.transition = "transform .3s";
  pwd.style.padding = "5px 0px 0px 10px";
};

// 아이디 비밀번호 입력시 없으면 스타일 지정 x 있으면 속성적용
const keypr = e => {
  if (!id.value) {
    idInput.style = "unset";
  } else if (id.value) {
    idAttr();
  }
  if (!pwd.value) {
    pwdInput.style = "unset";
  } else if (pwd.value) {
    pwdAttr();
  }
};

// 아이디 비밀번호 입력시 span 애니메이션
const spanMove = e => {
  if (e.target === idInput) {
    id.focus();
    id.addEventListener("input", keypr);
  } else if (pwdInput === e.target) {
    pwd.focus();
    pwd.addEventListener("input", keypr);
  }
};
const spanOrigin = e => {
  if (id.value.length) idInput.style = "none";
};
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

id.addEventListener("input", changeColor);
idInput.addEventListener("click", spanMove);

pwd.addEventListener("input", changeColor);
pwdInput.addEventListener("click", spanMove);
