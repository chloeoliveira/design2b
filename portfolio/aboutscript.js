$(document).ready(function() {
  $("#name").hover(function() {
    //if($("#name").is(":visible") {
      //$(this).hide();
      //$("#paragraph").show();
    //});
    $(this).hide();
    $("#paragraph").show();
  });

  $("#paragraph").on("mouseout", function() {
    $("#name").show();
    $(this).hide();
  });
  
});







