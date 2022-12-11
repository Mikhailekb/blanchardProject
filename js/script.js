// Кастомный селект

const choices = new Choices(".gallary__select", {
    searchEnabled: false,
    itemSelectText: "",
});

// Аккордион

new Accordion(".catalog__accordion", {
    openOnInit: [0],
});

// Input mask

let maskTel = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(maskTel);

// Модальное окно

$.modal.defaults = {
    closeExisting: false,
};

// tippy

tippy(".projects__tippy", {
    hideOnClick: false,
    delay: 200,
    maxWidth: 270,
    theme: "amethyst",
});


// Всплывающее меню поиска

let panel = document.querySelector(".panel");
let searchBtn = document.querySelector(".header__search-btn");
let closePanel = document.querySelector(".panel__close-btn");

searchBtn.addEventListener("click", function () {
    searchBtn.classList.add("is--hidden");
    panel.classList.add("panel--active");
});

closePanel.addEventListener("click", function () {
    searchBtn.classList.remove("is--hidden");
    panel.classList.remove("panel--active");
});




