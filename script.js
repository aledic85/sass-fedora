
function dropdownMenu() {

  var me = $(this);
  me.siblings(".drop-menu").slideToggle();
}

function slider() {

  var divActive = $(".slider > div.active");

  divActive.removeClass("active");

  var nextDiv = divActive.next("div");

  if (divActive.hasClass("last")) {
    nextDiv = $("div.first");
  }

  nextDiv.addClass("active");

}

function init() {

  var order = $("#order");

  order.click(dropdownMenu);
  setInterval(slider, 3000);
}

$(document).ready(init);
