const commentText = document.querySelector(".comment-input");
const commentArr = document.getElementById("comment-list");
const commentBtn = document.querySelector(".add-comment-btn");
const commentDiv = document.querySelector(".commnet-list-div");
const mainHeart = document.getElementById("heart");
const commentHeart = document.querySelector(".commentHeart");
const navSearch = document.getElementById("nav-search");

let toggle = true;

const heartOn = e => {
  if (toggle) {
    e.target.className = "heartOn";
    e.target.src = "img/heart_like_love_twitter_icon_127132.png";
    toggle = false;
  } else {
    e.target.className = "heartOff";
    e.target.src =
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

    toggle = true;
  }
};
// 댓글 생성 버튼
const addBtn = () => {
  const div = document.createElement("div");
  const a = document.createElement("a");
  const heart = document.createElement("img");
  const span = commentText.value;
  heart.className = "comment-heart";
  heart.src =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

  a.innerText = "gisung ";
  div.append(a);
  div.append(span);
  div.append(heart);

  div.classList.add(`comment-list`);
  commentDiv.appendChild(div);
  commentText.value = "";

  // 댓글 삭제 기능
  div.addEventListener("click", function(e) {
    e.target.remove();
  });
};
// 댓글 생성 엔터
const addEnter = e => {
  if (e.keyCode === 13) {
    if (e.shiftKey === true) {
    } else {
      event.preventDefault();
      addBtn();
    }
  }
};

// nav 검색창
const navActive = () => {
  const fir = document.getElementById("fir");
  const img = document.createElement("img");
  const div = document.querySelector(".nav-div");
  fir.style.left = "430px";
  img.className = "sec";
  img.style.height = "15px";
  img.src = "img/images.png";
  div.appendChild(img);
  navSearch.style.textAlign = "left";
  navSearch.style.textIndent = "35px";
};

heart.addEventListener("click", heartOn);
commentBtn.addEventListener("click", addBtn);

commentText.addEventListener("keypress", addEnter);
navSearch.addEventListener("click", navActive);
