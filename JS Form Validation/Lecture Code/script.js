
// function clearErrors(){
//   let errors =  document.getElementsByClassName('error');

//   for(let item of errors){
//     item.innerHTML = "";
//   }
// }

// function seterror(name, error){
// let element = document.getElementsByName(name)[0].nextElementSibling;

// element.innerHTML = error;

// }


// function validationForm(){
//     clearErrors();

//     let isValid = true;

//     let name = document.forms["myForm"]["fname"].value;

//     if(name.trim().length < 5){
//         seterror("fname","Name length should be more than 5 length!");
//         isValid = false;
//     }


//     let phone =  document.forms["myForm"]["fphone"].value;

//     if(phone.length <10){
//         seterror("fphone","Phone length should be  10 digit!");
//         isValid = false;
//     }



//     return isValid;
// }


/************************************************************ */

function clearErrors(){
  let errors =  document.getElementsByClassName('error');

  for(let item of errors){
    item.innerHTML = "";
  }
}

function seterror(name, error){
let element = document.getElementsByName(name)[0].nextElementSibling;

element.innerHTML = error;

}


function validationForm(){
    clearErrors();

    let isValid = true;

    let name = document.forms["myForm"]["fname"].value;

    let nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,19}$/;

    if(!(nameRegex.test(name))){
        seterror("fname","Name length should be more than 6 length!");
        isValid = false;
    }

    let email = document.forms["myForm"]["femail"].value;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!(emailRegex.test(email))){
      seterror("femail","Invalid Email!")
      isValid = false;
    }


    let phone =  document.forms["myForm"]["fphone"].value;

    let phoneRegex = /^\d{10}$/;

    if(!(phoneRegex.test(phone))){
        seterror("fphone","Phone length should be  10 digit!");
        isValid = false;
    }



let password =  document.forms["myForm"]["fpassword"].value;

let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

if(!(passwordRegex.test(password))){
  seterror("fpassword","Mininmum length of password should be 8");
  isValid = false;
}

let cpassword =  document.forms["myForm"]["fcpassword"].value;

if(password !== cpassword){
  seterror("fcpassword","confirm password not match with password")
  isValid = false;
}

    return isValid;
}

document.getElementById("togglePassword").addEventListener("click", function () {
  let passwordInput = document.getElementById("password");
  let icon = this;
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
  } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
  }
});


function copyfn(){

    alert("You can not copy!");


}