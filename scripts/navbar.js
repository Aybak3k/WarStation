(function ($) {
  $(function () {
    // For When There Are Sublinks
    $("nav ul li > a:not(:only-child)").click(function (e) {
      
      // Fold Sublinks Like `<details>`
      $(this).siblings(".nav-dropdown").slideToggle()

      // Hide Other Dropdowns When This One Is Selected
      $(".nav-dropdown").not($(this).siblings()).hide()

      // Fot Not Conflicting With Burger Menu
      e.stopPropagation()
    })



    // Fold Back `.nav-dropdown` When Users Clicks Anywhere Else
    $("html").click(() => {
      $(".nav-dropdown").hide()
    })



    // Fold Nav Links Like `<details>`
    $("#burger-menu").click(() => {
      $("nav ul").slideToggle()
    })



    // Toggle Burger Menu X Shape
    $("#burger-menu").on("click", function() {
      this.classList.toggle("active")
    })



    // Change Navbar BgClr OnScroll
    $(window).scroll(function() {
      if(scrollY > screen.height / 1.7) { 
          $('nav').addClass('screen-scrolled')
      } else {
          $('nav').removeClass('screen-scrolled')
      }
    })
  })
})(jQuery)
