const btn = document.querySelector(".cta__button")
const socialMediaBar = document.querySelector(".social-media__bar")
const mainContainer = document.querySelector(".main__container")

const makeVisible = function (arg) {
    if (arg.classList.contains("visible")) arg.classList.remove("visible")
    else arg.classList.add("visible")
}

btn.addEventListener("click", function (e) {
    e.stopPropagation()
    makeVisible(socialMediaBar)
})

mainContainer.addEventListener('click', function () {
    socialMediaBar.classList.remove("visible")
})