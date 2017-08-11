
$(document).ready(function(event) {
  $("form#track").submit(function(event) {
  event.preventDefault();
    var total = 0;
    total += parseInt($("select#webdev").val());
    total += parseInt($("select#choice").val());
    total += parseInt($("select#date").val());
    total += parseInt($("select#size").val());
    total += parseInt($("select#hello").val());


    if ((total === 5) || (total === 15)||(total === 24)||(total === 25)||(total === 34)||(total === 43) ){
      $(".csharp").show();}
    else if ((total === 35) || (total === 45)||(total === 55)||(total === 64)||(total === 73)||(total === 54) ){
      $(".ruby").show();}
    else{
      $(".design").show();

    }




  });
});
