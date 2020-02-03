const commentText = document.querySelector(".comment-input");
const commentArr = document.getElementById("comment-list");
const commentBtn = document.querySelector(".add-comment-btn");
const commentDiv = document.querySelector(".commnet-list-div");
const mainHeart = document.getElementById("heart");
const commentHeart = document.querySelector(".commentHeart");

let toggle = true;

const heartOn = e => {
  if (toggle) {
    mainHeart.className = "heartOn";
    mainHeart.src = "img/heart_like_love_twitter_icon_127132.png";
    toggle = false;
  } else {
    mainHeart.src =
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    mainHeart.className = "heartOff";

    toggle = true;
  }
};

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

  div.classList.add("comment-list");

  commentDiv.appendChild(div);
  commentText.value = "";
};
const addEnter = e => {
  if (e.keyCode === 13) {
    if (e.shiftKey === true) {
    } else {
      event.preventDefault();
      addBtn();
    }
  }
};

heart.addEventListener("click", heartOn);
commentText.addEventListener("keypress", addEnter);
