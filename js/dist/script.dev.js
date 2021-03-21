"use strict";

// select 
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = document.querySelectorAll(".custom-option")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var option = _step.value;
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = document.querySelectorAll(".custom-select-wrapper")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var dropdown = _step2.value;
    dropdown.addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
    });
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

window.addEventListener('click', function (e) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = document.querySelectorAll('.custom-select')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var select = _step3.value;

      if (!select.contains(e.target)) {
        select.classList.remove('open');
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});
$(document).ready(function () {
  $(".main-block .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ["", ""],
    dots: true
  });
  $(".stages .owl-carousel").owlCarousel({
    items: 5,
    nav: false,
    navText: ["", ""],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      980: {
        items: 4
      },
      1280: {
        items: 5
      }
    }
  });
  $(".adress-header__li").on("click", function () {
    $(".adress-header__childlist").slideToggle();
    $(".header-table").toggleClass("open");
    $(".adress-header__arrow").toggleClass("open");
  });
  $(".header-navigation__services").on("click", function () {
    $(".header-about").hide();
    $(".about-arrow").removeClass("open");
    $(".header-services").slideToggle();
    $(".services-arrow").toggleClass("open");
  });
  $(".header-navigation__about").on("click", function () {
    $(".header-services").hide();
    $(".services-arrow").removeClass("open");
    $(".header-about").slideToggle();
    $(".about-arrow").toggleClass("open");
  });
  $(".advantages-item__more").on("click", function () {
    $(this).next().slideToggle();
    $(this).find("img").toggleClass("opened");
  });
  $(".header-navigation__about").on("click", function () {
    $(".mob-header__about").slideToggle();
  });
  $(".header-navigation__services").on("click", function () {
    $(".mob-header__services").slideToggle();
  }); // tabs prices block

  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
});