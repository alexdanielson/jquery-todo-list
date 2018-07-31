
$(document).ready(function() {
  $("#addItem").click(function() {

    var newItem = $("#addtolist").val();
    if (newItem.length > 0) {
      $("#todolist").append("<li>" + newItem + "</li>");
      $("#addtolist").val(" ");

    }
  });
});

// add clear button

// add check mark button




