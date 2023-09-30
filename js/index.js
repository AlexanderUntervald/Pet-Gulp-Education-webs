$(function () {
    $('.smart-basket__wrapper').smbasket({
        productElement: 'gallery__box',
        buttonAddToBasket: 'gallery__btn-order',
        productPrice: 'product__price-number',
        productSize: 'product__size-element',
        
        productQuantityWrapper: 'product__quantity',
        smartBasketMinArea: 'basket',
        countryCode: '+3',
        smartBasketCurrency: '$',
        smartBasketMinIconPath: './smartbasket/img/shopping-basket-wight.svg',

        agreement: {
            isRequired: true,
            isChecked: true,
            isLink: 'https://artstranger.ru/privacy.html',
        },
        nameIsRequired: false,
    });
});



window.addEventListener("load", function() {
    // Отримуємо прелоадер (за допомогою селектора або класу) і приховуємо його.
    let preloader = document.querySelector(".loader"); // Виберіть селектор, який відповідає вашому прелоадеру.
    preloader.style.display = "none"; // Приховуємо прелоадер.
});



$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="TO THE TOP">TO THE TOP  <img  src="./img/totop.png" alt=""></a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });

 


let prevScrollY = window.scrollY;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let header = document.getElementById("myHeader");
    let currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
        // Користувач прокрутив сторінку вниз, тому видаляємо клас "fixed-header".
        header.classList.remove("fixed-header");
    } else {
        // Користувач прокрутив сторінку вгору, тому додаємо клас "fixed-header".
        header.classList.add("fixed-header");
    }  

    // Оновлюємо значення prevScrollY для наступного порівняння.
    prevScrollY = currentScrollY;
}

 
$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $(".exitblock").fadeIn("fast");
    }    
});
$(document).click(function(e) {
    if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").remove();
    }
});


$( "#date" ).datepicker({
    dateFormat: "MM - DD - yy",
    showOn: "both",
    buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
});







$('.js-tilt').tilt({
    scale: 1.1
})

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-23581568-13');

 
