$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(".navbar-nav a").on("click", function () {
  $(this).parent().find("a.active").removeClass("active");
  $(this).addClass("active");
});

// TODO: bind to scroll event for nav-items