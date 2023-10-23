
$("#register-close").click(function(){
    let a = document.createElement('a');
    a.href = "index.html";
    a.click();     
})

let url  = "https://fakestoreapi.com/products";
logJSONData(url)
  .then(() => {
    console.log(users);
  });
console.log("hello");

$("#register-submit-btn").click((e)=>{
    e.preventDefault();
    if($("#register-name").val() == ''){
        console.log("Hello");
        $("#name-register-error").removeClass("opacity-0");
    }else{
        $("#name-register-error").addClass("opacity-0");
    }
    if($("#register-email").val() == ''){
        $("#email-register-error").removeClass("opacity-0");
    }else{
        $("#email-register-error").addClass("opacity-0");
    }
    if($("#register-age").val().length == 0){
        $("#age-register-error").removeClass("opacity-0");
    }else{
        $("#age-register-error").addClass("opacity-0");
    }
    if($("#register-password").val().length == 0){
        $("#password-register-error").removeClass("opacity-0");
    }else{
        $("#password-register-error").addClass("opacity-0");
    }
    if($("#register-confirm-password").val() == $("#register-password").val()){
        $("#confirm-password-register-error").addClass("opacity-0");
    }else{
        $("#confirm-password-register-error").removeClass("opacity-0");
    }
    if(($("#register-name").val() != '' || $("#register-email").val() != '' || $("#register-age").val() != '' || 
    $("#register-password").val()) && ($("#register-confirm-password").val() == $("#register-password").val()) &&
     $("#register-confirm-password").val() != 0 && $("#register-password").val() != 0)
    {
        let user = {
            name : $("#register-name").val(),
            email : $("#register-email").val(),
            age : $("#register-age").val(),
            password : $("#register-password").val(),
            gender : getRadioInput(),
        }
        console.log(user);
        // let a = document.createElement('a');
        // a.href = "login.html";
        // a.click(); 
    }else{
        console.log("Password and confirm password is not equal");
    }

})

function getRadioInput(){
    let check;
    $(".register-gender").each((i,element) => {
        if(element.checked){
            check = element.id;
        }
    });
    return check;
}

function removeRadioInput(){
    $(".register-gender").each((i,element) => {
        if(element.checked){
            element.checked = false;
        }
    });
}

async function logJSONData(url) {
    const response = await fetch(url);
    users = await response.json();
    // console.log(users);
  }
