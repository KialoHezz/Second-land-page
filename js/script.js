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


//init contact-form
const name = document.getElementById("nameId").value;
const email = document.getElementById("emailId").valu;
const userMessage = document.getElementById("textArea").value;

form.addEventListener("submit", validate =>{
    
})

//function to output msg to user

function output(){
    document.querySelector().innerText = name  "we have received your message. Thank you fro reaching out to us. **";
}
