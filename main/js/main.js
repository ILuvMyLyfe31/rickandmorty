// hamburger
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// sideMenu
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

let iconOne = document.querySelector("#icon-one");
let divOne = document.querySelector(".div-one");
let menuOne = document.querySelector("#menu-one");

let iconTwo = document.querySelector("#icon-two");
let divTwo = document.querySelector(".div-two");
let menuTwo = document.querySelector("#menu-two");

let iconThree = document.querySelector("#icon-three");
let divThree = document.querySelector(".div-three");
let menuThree = document.querySelector("#menu-three");

let iconFour = document.querySelector("#icon-four");
let divFour = document.querySelector(".div-four");
let menuFour = document.querySelector("#menu-four");

let iconFive = document.querySelector("#icon-five");
let divFive = document.querySelector(".div-five");
let menuFive = document.querySelector("#menu-five");

let iconSix = document.querySelector("#icon-six");
let divSix = document.querySelector(".div-six");
let menuSix = document.querySelector("#menu-six");

let iconSeven = document.querySelector("#icon-seven");
let divSeven = document.querySelector(".div-seven");
let menuSeven = document.querySelector("#menu-seven");

let iconEight = document.querySelector("#icon-eight");
let divEight = document.querySelector(".div-eight");
let menuEight = document.querySelector("#menu-eight");

let iconNine = document.querySelector("#icon-nine");
let divNine = document.querySelector(".div-nine");
let menuNine = document.querySelector("#menu-nine");

let iconTen = document.querySelector("#icon-ten");
let divTen = document.querySelector(".div-ten");
let menuTen = document.querySelector("#menu-ten");

let iconEleven = document.querySelector("#icon-eleven");
let divEleven = document.querySelector(".div-eleven");
let menuEleven = document.querySelector("#menu-eleven");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    myHamburgerOne();
});

function myHamburgerOne() {
    if (sidebar.classList.contains("open")) {
        iconOne.replaceWith(menuOne);
        menuOne.classList.remove("d-none");
        closeBtn.classList.add("open");
        divOne.classList.remove("div-one-text-center");

        iconTwo.replaceWith(menuTwo);
        menuTwo.classList.remove("d-none");
        closeBtn.classList.add("open");
        divTwo.classList.remove("div-two-text-center");

        iconThree.replaceWith(menuThree);
        menuThree.classList.remove("d-none");
        closeBtn.classList.add("open");
        divThree.classList.remove("div-three-text-center");

        iconFour.replaceWith(menuFour);
        menuFour.classList.remove("d-none");
        closeBtn.classList.add("open");
        divFour.classList.remove("div-four-text-center");

        iconFive.replaceWith(menuFive);
        menuFive.classList.remove("d-none");
        closeBtn.classList.add("open");
        divFive.classList.remove("div-five-text-center");

        iconSix.replaceWith(menuSix);
        menuSix.classList.remove("d-none");
        closeBtn.classList.add("open");
        divSix.classList.remove("div-six-text-center");

        iconSeven.replaceWith(menuSeven);
        menuSeven.classList.remove("d-none");
        closeBtn.classList.add("open");
        divSeven.classList.remove("div-seven-text-center");

        iconEight.replaceWith(menuEight);
        menuEight.classList.remove("d-none");
        closeBtn.classList.add("open");
        divEight.classList.remove("div-eight-text-center");

        iconNine.replaceWith(menuNine);
        menuNine.classList.remove("d-none");
        closeBtn.classList.add("open");
        divNine.classList.remove("div-nine-text-center");

        iconTen.replaceWith(menuTen);
        menuTen.classList.remove("d-none");
        closeBtn.classList.add("open");
        divTen.classList.remove("div-ten-text-center");
        
        iconEleven.replaceWith(menuEleven);
        menuEleven.classList.remove("d-none");
        closeBtn.classList.add("open");
        divEleven.classList.remove("div-eleven-text-center");
    } else {
        menuOne.replaceWith(iconOne);
        closeBtn.classList.remove("open");
        divOne.classList.add("div-one-text-center");

        menuTwo.replaceWith(iconTwo);
        closeBtn.classList.remove("open");
        divTwo.classList.add("div-two-text-center");

        menuThree.replaceWith(iconThree);
        closeBtn.classList.remove("open");
        divThree.classList.add("div-three-text-center");

        menuFour.replaceWith(iconFour);
        closeBtn.classList.remove("open");
        divFour.classList.add("div-four-text-center");

        menuFive.replaceWith(iconFive);
        closeBtn.classList.remove("open");
        divFive.classList.add("div-five-text-center");

        menuSix.replaceWith(iconSix);
        closeBtn.classList.remove("open");
        divSix.classList.add("div-six-text-center");

        menuSeven.replaceWith(iconSeven);
        closeBtn.classList.remove("open");
        divSeven.classList.add("div-seven-text-center");

        menuEight.replaceWith(iconEight);
        closeBtn.classList.remove("open");
        divEight.classList.add("div-eight-text-center");

        menuNine.replaceWith(iconNine);
        closeBtn.classList.remove("open");
        divNine.classList.add("div-nine-text-center");

        menuTen.replaceWith(iconTen);
        closeBtn.classList.remove("open");
        divTen.classList.add("div-ten-text-center");
        
        menuEleven.replaceWith(iconEleven);
        closeBtn.classList.remove("open");
        divEleven.classList.add("div-eleven-text-center");
    }
};

divOne.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divTwo.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divThree.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divFour.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divFive.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divSix.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divSeven.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divEight.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divNine.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divTen.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

divEleven.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    functionOne();
});

function functionOne() {
    if (sidebar.classList.contains("open")) {
        iconOne.replaceWith(menuOne);
        menuOne.classList.remove("d-none");
        closeBtn.classList.add("open");
        divOne.classList.remove("div-one-text-center");

        iconTwo.replaceWith(menuTwo);
        menuTwo.classList.remove("d-none");
        closeBtn.classList.add("open");
        divTwo.classList.remove("div-two-text-center");

        iconThree.replaceWith(menuThree);
        menuThree.classList.remove("d-none");
        closeBtn.classList.add("open");
        divThree.classList.remove("div-three-text-center");

        iconFour.replaceWith(menuFour);
        menuFour.classList.remove("d-none");
        closeBtn.classList.add("open");
        divFour.classList.remove("div-four-text-center");

        iconFive.replaceWith(menuFive);
        menuFive.classList.remove("d-none");
        closeBtn.classList.add("open");
        divFive.classList.remove("div-five-text-center");

        iconSix.replaceWith(menuSix);
        menuSix.classList.remove("d-none");
        closeBtn.classList.add("open");
        divSix.classList.remove("div-six-text-center");

        iconSeven.replaceWith(menuSeven);
        menuSeven.classList.remove("d-none");
        closeBtn.classList.add("open");
        divSeven.classList.remove("div-seven-text-center");

        iconEight.replaceWith(menuEight);
        menuEight.classList.remove("d-none");
        closeBtn.classList.add("open");
        divEight.classList.remove("div-eight-text-center");

        iconNine.replaceWith(menuNine);
        menuNine.classList.remove("d-none");
        closeBtn.classList.add("open");
        divNine.classList.remove("div-nine-text-center");

        iconTen.replaceWith(menuTen);
        menuTen.classList.remove("d-none");
        closeBtn.classList.add("open");
        divTen.classList.remove("div-ten-text-center");

        iconEleven.replaceWith(menuEleven);
        menuEleven.classList.remove("d-none");
        closeBtn.classList.add("open");
        divEleven.classList.remove("div-eleven-text-center");
    } else {
        menuOne.replaceWith(iconOne);
        closeBtn.classList.remove("open");
        divOne.classList.add("div-one-text-center");

        menuTwo.replaceWith(iconTwo);
        closeBtn.classList.remove("open");
        divTwo.classList.add("div-two-text-center");

        menuThree.replaceWith(iconThree);
        closeBtn.classList.remove("open");
        divThree.classList.add("div-three-text-center");

        menuFour.replaceWith(iconFour);
        closeBtn.classList.remove("open");
        divFour.classList.add("div-four-text-center");

        menuFive.replaceWith(iconFive);
        closeBtn.classList.remove("open");
        divFive.classList.add("div-five-text-center");

        menuSix.replaceWith(iconSix);
        closeBtn.classList.remove("open");
        divSix.classList.add("div-six-text-center");

        menuSeven.replaceWith(iconSeven);
        closeBtn.classList.remove("open");
        divSeven.classList.add("div-seven-text-center");

        menuEight.replaceWith(iconEight);
        closeBtn.classList.remove("open");
        divEight.classList.add("div-eight-text-center");

        menuNine.replaceWith(iconNine);
        closeBtn.classList.remove("open");
        divNine.classList.add("div-nine-text-center");

        menuTen.replaceWith(iconTen);
        closeBtn.classList.remove("open");
        divTen.classList.add("div-ten-text-center");
        
        menuEleven.replaceWith(iconEleven);
        closeBtn.classList.remove("open");
        divEleven.classList.add("div-eleven-text-center");
    }
};
// following are the code to change sidebar button(optional)
// function menuBtnChange() {
    // if (sidebar.classList.contains("open")) {
        // closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    // } else {
        // closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    // }
// }