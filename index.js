const supportBtn = document.querySelector(".supportBtn");
const closeSupportBtn = document.querySelector(".close-modal");
const supportSection = document.querySelector(".overlay");
const bookmarkBoxBtn = document.querySelector(".bookmark-box");
const bookmarkBtn = document.querySelector(".bookmarkBtn");
const bookmarkIcon = document.querySelector(".bookmark-icon");
const backingItems = document.querySelectorAll(".backing-items");
const checkBtn = document.querySelectorAll(".check");
const rewardBtns = document.querySelectorAll(".rewardBtn");
const continueBtns = document.querySelectorAll(".continue-btn");
const thanksOverlay = document.querySelector(".thanks-overlay");
const closethanksOverlay = document.querySelector(".done");
const hamburgerNav = document.querySelector(".hamburger");
const closeHamburgerNav = document.querySelector(".close-menu");
const links = document.querySelector(".nav-links");
let iconColor = true;

hamburgerNav.addEventListener("click", function() {
    links.classList.add("show-links")
    hamburgerNav.classList.add("close-icon")
    closeHamburgerNav.classList.add("show-close-nav-icon")
})

closeHamburgerNav.addEventListener("click", function() {
    links.classList.remove("show-links")
    hamburgerNav.classList.remove("close-icon")
    closeHamburgerNav.classList.remove("show-close-nav-icon")
})




checkBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const section = e.currentTarget.parentElement.parentElement.parentElement;
        backingItems.forEach((item) => {
            if (section !== item) {
                item.classList.remove("show-text");
                item.classList.remove("backing-items-hover") 
            }
        })
        section.classList.add("show-text");
        section.classList.add("backing-items-hover")

    })
})


bookmarkBoxBtn.addEventListener("click", () => {
    bookmarkBoxBtn.classList.toggle("bookmark-click");
    bookmarkBtn.classList.toggle("bookmark-btn-click");
    if (iconColor) {
        bookmarkIcon.src = "./images/icon-bookmark-green.svg" 
        iconColor = false;
    } else {
        bookmarkIcon.src = "./images/icon-bookmark.svg"
        iconColor = true; 
    }
});


supportBtn.addEventListener("click", () => {
    supportSection.classList.add("open-modal")
});

closeSupportBtn.addEventListener("click", () => {
    supportSection.classList.remove("open-modal")

    backingItems.forEach((backingItem) => {
        backingItem.classList.remove("show-text");
        backingItem.classList.remove("backing-items-hover")  
    })
})

continueBtns.forEach((continueBtn) => {
    continueBtn.addEventListener("click", () => {
        thanksOverlay.classList.add("open-thanks-overlay")
        supportSection.classList.remove("open-modal")
    })
})

rewardBtns.forEach((rewardBtn) => {
    rewardBtn.addEventListener("click", () => {
        thanksOverlay.classList.add("open-thanks-overlay")
    })
})

closethanksOverlay.addEventListener("click", () => {
    thanksOverlay.classList.remove("open-thanks-overlay")
})
