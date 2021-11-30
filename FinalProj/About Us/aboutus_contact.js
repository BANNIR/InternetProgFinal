var name;
var feedback;
var email;


function change() {
    name = document.getElementById('nameinput').value;
    feedback = document.getElementById('other-info').value;
    email = document.getElementById('emailinput').value;

    document.getElementById('box4').innerHTML = "<p style='text-decoration: underline;'>Your submission </p>" + "<p>" + name + "</p>" + "<p>" + email + "</p>" +
     "<p>Your Feedback: " + feedback + "</p>" + "<p>We will get back to you shortly ;)</p>";
}
