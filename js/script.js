// select 

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

$(document).ready(function(){
    $(".main-block .owl-carousel").owlCarousel({
        items: 1,
        nav:true,
        // autoplay:true,
        loop: true,
        autoplayTimeout:5000,
        navText : ["",""],
        dots: true
    });
    $(".stages .owl-carousel").owlCarousel({
        items: 5,
        nav:false,
        loop: true,
        navText : ["",""],
        dots: true,
        responsive : {
            0 : {
                items:1
            },
            768:{
                items:2
            },
            980 : {
                items:4
            },
            1280 : {
                items:5
            }
        }
    });
    $(".adress-header__li").on("click", function (){
        $(".adress-header__childlist").slideToggle();
        $(".header-table").toggleClass("open");
        $(".adress-header__arrow").toggleClass("open");
    });
    $(".header-navigation__services").hover(function() {
        $(".header-about").hide();
        $(".about-arrow").removeClass("open");
        $(".services-arrow").toggleClass("open");
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children("div").stop().slideDown(300);
        } else {
          $(this).children("div").stop().slideUp(300);
        }
    });

    // $(".header-navigation__about").mouseover(function(){
    //     $(".header-services").hide();
    //     $(".services-arrow").removeClass("open");
    //     $(".header-about").slideDown();
    //     $(".about-arrow").toggleClass("open");
    // });
    $(".header-navigation__about").hover(function() {
        $(".header-services").hide();
        $(".services-arrow").removeClass("open");
        $(".about-arrow").toggleClass("open");
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children("div").stop().slideDown(300);
        } else {
          $(this).children("div").stop().slideUp(300);
        }
      });
      
    $(function(){
  
        createSticky($(".header-bottom"));
    
    });
    
    function createSticky(sticky) {
        
        if (typeof sticky !== "undefined") {
    
            var	pos = sticky.offset().top + 20,
                    win = $(window);
                
            win.on("scroll", function() {
                win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");
                win.scrollTop() >= pos ? $(".header-services").addClass("fix") : $(".header-services").removeClass("fix"); 
                win.scrollTop() >= pos ? $(".header-about").addClass("fixx") : $(".header-about").removeClass("fixx");   
            });			
        }
    }
    $(".advantages-item__more").on("click", function (){
        $(this).hide();
        $(this).next().slideToggle();
        // $(this).find("img").toggleClass("opened");
    });

    $(".header-navigation__about").on("click", function (){
        $(".mob-header__about").slideToggle();
    });

    $(".header-navigation__services").on("click", function (){
        $(".mob-header__services").slideToggle();
    });

    // tabs prices block

    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".wrapper-child .tab-child").click(function() {
        $(".wrapper-child .tab-child").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item-child").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".wrapper-man .tab-man").click(function() {
        $(".wrapper-man .tab-man").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item-man").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});