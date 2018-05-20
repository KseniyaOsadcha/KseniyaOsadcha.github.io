$( document ).ready(function() {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});
$('._show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
});
$('._close_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});
$(function () {
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});
$(document).ready(function(){

  $('.responsive').slick({
    dots: true,
    autoplay: true,
    speed: 150,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); });
          
$(function () {
    console.log('w-m-box-1');
    $('._w-paragraph-1').click(function () {
        $('._w-m-box-1').slideToggle();
    });
    console.log('w-m-box-1');
    $('._w-paragraph-2').click(function () {
        $('._w-m-box-2').slideToggle();
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsImhvbWUtY29udGFjdC1tZS5qcyIsInNjcm9sbGluZy5qcyIsInNsaWNrLW15LXNldHRpbmdzLmpzIiwid2h5LW1lLXNsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW0nKTtcclxuICAgICQoJy5faGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5fbmF2Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG59KTsiLCIkKCcuX3Nob3dfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpIHsgLy8g0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9C+INC90LDQttCw0YLQuNGOINC90LAg0LrQvdC+0L/QutGDIFxyXG4gICAgdmFyIHBvcHVwX2lkID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoXCJyZWxcIikpOyAvLyDQodCy0Y/Qt9GL0LLQsNC10LwgcmVsINC4IHBvcHVwX2lkIFxyXG4gICAgJChwb3B1cF9pZCkuc2hvdygpOyAvLyDQntGC0LrRgNGL0LLQsNC10Lwg0L7QutC90L5cclxuICAgICQoJy5vdmVybGF5X3BvcHVwJykuc2hvdygpOyAvLyDQntGC0LrRgNGL0LLQsNC10Lwg0LHQu9C+0Log0LfQsNC00L3QtdCz0L4g0YTQvtC90LBcclxufSk7XHJcbiQoJy5fY2xvc2VfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpIHsgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INC60LvQuNC6INC/0L4g0LfQsNC00L3QtdC80YMg0YTQvtC90YNcclxuICAgICQoJy5vdmVybGF5X3BvcHVwLCAucG9wdXAnKS5oaWRlKCk7IC8vINCh0LrRgNGL0LLQsNC10Lwg0LfQsNGC0LXQvNC90ZHQvdC90YvQuSDQt9Cw0LTQvdC40Lkg0YTQvtC9INC4INC+0YHQvdC+0LLQvdC+0LUg0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQtSDQvtC60L3QvlxyXG59KTtcclxuJCgnLm92ZXJsYXlfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpIHsgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INC60LvQuNC6INC/0L4g0LfQsNC00L3QtdC80YMg0YTQvtC90YNcclxuICAgICQoJy5vdmVybGF5X3BvcHVwLCAucG9wdXAnKS5oaWRlKCk7IC8vINCh0LrRgNGL0LLQsNC10Lwg0LfQsNGC0LXQvNC90ZHQvdC90YvQuSDQt9Cw0LTQvdC40Lkg0YTQvtC9INC4INC+0YHQvdC+0LLQvdC+0LUg0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQtSDQvtC60L3QvlxyXG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnJlc3BvbnNpdmUnKS5zbGljayh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBzcGVlZDogMTUwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSk7IH0pO1xyXG4gICAgICAgICAgIiwiJChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndy1tLWJveC0xJyk7XHJcbiAgICAkKCcuX3ctcGFyYWdyYXBoLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLl93LW0tYm94LTEnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygndy1tLWJveC0xJyk7XHJcbiAgICAkKCcuX3ctcGFyYWdyYXBoLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLl93LW0tYm94LTInKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
