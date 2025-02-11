
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


    let phone =  document.forms["myForm"]["fphone"].value;

    let phoneRegex = /^\d{10}$/;

    if(!(phoneRegex.test(phone))){
        seterror("fphone","Phone length should be  10 digit!");
        isValid = false;
    }



    return isValid;
}