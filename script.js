var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.name = ""; // 初始化名字為空字串
  $scope.name = prompt("歡迎進入咖波網頁\n請輸入名字");
});



$(document).ready(function() {
  // 按下"標題欄顯示/隱藏"按鈕
  $(".settings-button").click(function() {
    var currentTop = $("header").css("top");
    if (currentTop === "0px") {
      $("header").css("top", "");
      $("#store").css("scroll-margin-top", "");
      $("#product").css("scroll-margin-top", "");
      $("#role").css("scroll-margin-top", "");
      $("#new").css("scroll-margin-top", "");
      $("#other").css("scroll-margin-top", "");
    } else {
      $("header").css("top", "0");
      $("#store").css("scroll-margin-top", "195px");
      $("#product").css("scroll-margin-top", "195px");
      $("#role").css("scroll-margin-top", "195px");
      $("#new").css("scroll-margin-top", "195px");
      $("#other").css("scroll-margin-top", "195px");     
    }
    alert("標題欄" + "鎖定"|| "解除");
  });
});



$(document).ready(function(){
// 當 <dt> 被點擊時
$("dt").click(function(){
  // 讓所屬的 <dd> 顯示或隱藏
    $(this).next("dd").slideToggle("slow");
})
})



$(document).ready(function() {
  // 當滑鼠移入 #logo 元素時
$("#logo").on({
    mouseover: function() { // 滑鼠移入
    $(this).attr("src", "logo/Wcapoo.png"); 
    },
    mouseleave: function() { // 滑鼠移出
    $(this).attr("src", "logo/Bcapoo.png"); 
    }
});
});




$(document).ready(function() {
    // 預設隱藏 "top"
    $('#top-button').hide();
  
    // 滾動時隱藏或顯示 "top"
    $(window).scroll(function() {
      //垂直滾動位置大於 100 像素
      if ($(this).scrollTop() > 100) {
        //顯示
        $('#top-button').fadeIn();
      } else {
        $('#top-button').fadeOut();
      }
    });
  
    // 點擊 "top" 回到最上方
    $('#top-button').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  });




  //幻燈片
  $(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
    var interval;
  
    // 顯示第一張幻燈片
    slides.eq(currentSlide).show();
  
    // 自動播放幻燈片
    function startSlideShow() {
      interval = setInterval(function() {
        slides.eq(currentSlide).fadeOut();
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).fadeIn();
      }, 3000);
    }
  
    startSlideShow();
  
    // 左右移動按鈕
    $('.slideshow').append('<div class="prev">&#10094;</div>');
    $('.slideshow').append('<div class="next">&#10095;</div>');
  
    $('.prev').click(function() {
      clearInterval(interval); // 清除自動播放計時器
      slides.eq(currentSlide).fadeOut();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides.eq(currentSlide).fadeIn();
      startSlideShow(); // 重新開始自動播放
    });
  
    $('.next').click(function() {
      clearInterval(interval); // 清除自動播放計時器
      slides.eq(currentSlide).fadeOut();
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).fadeIn();
      startSlideShow(); // 重新開始自動播放
    });
  });


