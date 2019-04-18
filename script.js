
function dropdownMenu() {

  var me = $(this);
  me.siblings(".drop-menu").slideToggle();
}

function init() {

  var order = $("#order");

  order.click(dropdownMenu);
}

$(document).ready(init);
