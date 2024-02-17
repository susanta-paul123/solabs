(function($) {

  //Mobile Menu
  $("#nav-icon").on("click", function() {
      $(this).toggleClass('open');
      $(".nav").slideToggle();
  });

  //AOS animation
  AOS.init();
  window.addEventListener('load', AOS.refresh)

//start image fadein fadeout slide
  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("stage1");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);

  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("stage2");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);

  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("stage3");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);

  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("mint1");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);

  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("mint2");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);
  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("mint3");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);
  window.addEventListener("DOMContentLoaded", function(e) {

      var rotatingImgBox = document.getElementById("mint4");
      var fadeComplete = function(e) {
          rotatingImgBox.appendChild(arr[0]);
      };
      var arr = rotatingImgBox.getElementsByTagName("a");
      for (var i = 0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
      }

  }, false);


  //faq

  $(".question").on('click', function() {
      $(this).parent('.faq').toggleClass('active');
      $(this).parent('.faq').siblings('.faq').removeClass('active');

      $(this).parent('.faq').siblings('.faq').children('.answer').slideUp();
      $(this).parent('.faq').parent('.colDiv').siblings('.colDiv').children('.faq').removeClass('active');

      $(this).parent('.faq').parent('.colDiv').siblings('.colDiv').children('.faq').children('.answer').slideUp();
      $(this).next().slideToggle();
  })

  var divs = $(".faq-wrapper> .faq");
  for (var i = 0; i < divs.length; i += 3) {
      divs.slice(i, i + 3).wrapAll("<div class='colDiv'></div>");
  }

// counter increment and decrement

  $('.plus').on('click', function() {
      var print = $('#count')
      var count = print.val();
      print.val(Number(count) + 1)
  })

  $('.minus').on('click', function() {
      var print = $('#count')
      var count = print.val();
      if (count > 0) {
          print.val(Number(count) - 1)
      }
  })

})(jQuery);