
$(document).ready(function(event) {
  $("form#movie").submit(function(event) {
  event.preventDefault();
    var total = 0;
    total += parseInt($("select#fave").val());
    total += parseInt($("select#date").val());
    total += parseInt($("select#choice").val());

    if (total === 31){
      $(".mixed").show();}
    else if (total <= 12){
      $(".action").show();}
    else if (total < 41){
      $(".comedy").show();}
    else{
      $(".romance").show();

    }




  });
});
