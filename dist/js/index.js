$(document).ready(function () {
//   $("#form").submit(function (event) {
//     event.preventDefault();
//     var name = $("input#b_name").val();
//     var email = $("input#b_email").val();
//     var message = $("textarea#b_comment").val();
//     if ($("input#b_name").val() && $("input#b_email").val()) {
//       alert(
//         name +
//           ", we have received your message. Thank you for reaching out to us."
//       );
//     } else {
//       alert("Please enter your name and email!");
//     }
//   });
  $(".img-wrapper").click(function () {
    $(this).parent().children(".description").toggle(500);
  });
  $(".portfolio-item").hover(function () {
    $(this).children(".item-title").fadeToggle(1000);
  });
});
// Mailchimp inegration
const submitForm = event=>{
    event.preventDefault();
    const form = new FormData(event.target);
    const names = form.get('name').split(' ');
    const FNAME = names[0]
    const LNAME = names [1]
    const EMAIL = form.get('email');
    const JSONData = {FNAME,LNAME,EMAIL}
    const url ='https://gmail.us17.list-manage.com/subscribe/post?u=ce559dfbfea8ab2302f8236cb&amp;id=4c3e72b3cb';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    fetch( url,{
        method:'POST',
        body:JSON.stringify(JSONData),
        headers:{
            "Content-type": "application/json; charset=UTF-8"

        }
    }).then(res1 =>console.log(res1))
    .then(data=>console.log(data))
    .catch(error=>{
        console.log(error);
    })
    alert(`Hey ${FNAME}, we have received your message. Thank you for reaching out to us.`)
}
