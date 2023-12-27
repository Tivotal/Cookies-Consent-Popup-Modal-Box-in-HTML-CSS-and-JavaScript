/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let btns = document.querySelectorAll(".btn");

const checkCookies = () => {
  if (document.cookie.includes("tivotal")) return;

  wrapper.classList.add("show");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      wrapper.classList.remove("show");

      if (btn.id == "accept") {
        document.cookie = "cookieBy= tivotal; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener("load", checkCookies);
