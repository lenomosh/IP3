

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var name = $("input#b_name").val();
    var email = $("input#b_email").val();
    var message = $("textarea#b_comment").val();
    if ($("input#b_name").val() && $("input#b_email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });
  $('.img-wrapper').click(function () {
    $(this).parent().children('.description').toggle(500);
  });
  $(".portfolio-item").hover(function () {
    $(this).children(".item-title").fadeToggle(1000);
  });

});
