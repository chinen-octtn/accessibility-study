// .js-buttonをクリックしたら、alertを表示する
const button = document.querySelectorAll(".js-button");
button.forEach((buttonElement) => {
  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("クリックしました！");
    alert("クリックしました！");
  });
});

// .js-linkをくりっくしたらページ遷移する
const link = document.querySelectorAll(".js-link");
link.forEach((linkElement) => {
  linkElement.addEventListener("click", () => {
    location.href = "https://www.google.com/";
  });
});
