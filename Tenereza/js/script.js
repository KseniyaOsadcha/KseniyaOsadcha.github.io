$(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 800);
        });

  
        window.onscroll = function() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
              } else {
                navbar.classList.remove("sticky");
              }
        };
        // Get the navbar
        var navbar = document.getElementById("custom-nav");
        
        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;
    });
    