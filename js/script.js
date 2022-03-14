//init contact-form
const username = document.getElementById("nameId").value;
const email = document.getElementById("emailId").value;
const userMessage = document.getElementById("textArea").value;

//first-toggle
$(document).ready(function () {
  $(".design").click(function () {
    $(".first-toggle").toggle();
  });
});

//second-toggle
$(document).ready(function () {
  $(".development").click(function () {
    $(".second-toggle").toggle();
  });
});

//third toggle
$(document).ready(function () {
  $(".products").click(function () {
    $(".third-toggle").toggle();
  });
});

// form.addEventListener("submit", validate =>{

// })

//function to output msg to user
$(document).ready(function () {
  $(".submit-btn").click(function () {
    $(".first-input").toggle(300);
    alert(
      `${username} we have received your message. Thank you fro reaching out to us`
    );
  });
});
