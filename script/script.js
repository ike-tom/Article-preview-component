const btn = document.querySelector(".cta__button")
const socialMediaBar = document.querySelector(".social-media__bar")

const makeVisible = function (arg) {
    if (arg.classList.contains("visible")) arg.classList.remove("visible")
    else arg.classList.add("visible")
}

btn.addEventListener("click", function () { makeVisible(socialMediaBar) })