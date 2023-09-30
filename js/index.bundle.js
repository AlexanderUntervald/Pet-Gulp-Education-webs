! function() {
    "use strict";
    ! function() {
        const e = document.querySelector(".mobile-nav-btn"),
            t = document.querySelector(".mobile-nav"),
            n = document.querySelector(".nav-icon");
        e.onclick = function() {
            t.classList.toggle("mobile-nav--open"), n.classList.toggle("nav-icon--active"), document.body.classList.toggle("scroll")
        }
    }();

    
    const e = document.querySelector(".autoplay-progress svg"),
        t = document.querySelector(".autoplay-progress span");
    document.querySelector("swiper-container").addEventListener("autoplaytimeleft", (n => {
        const [, s, i] = n.detail;
        e.style.setProperty("--progress", 1 - i), t.textContent = `${Math.ceil(s / 1e3)}s`
    }));
    const n = document.querySelector(".mySwiper2");
    Object.assign(n, {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: ".programming__button-next",
            prevEl: ".programming__button-prev"
        },
        pagination: {
            clickable: !0
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            440: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            240: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    }), n.initialize()
}();
 
