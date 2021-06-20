// var regexPhone = /0123456789/;
// var str = 08119112922
// var result = regexPhone.test(str); 

// console.log(result);


function validateEmail (emailAdress)
{
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

let emailAdress = "tegmail.com";
console.log(validateEmail(emailAdress));


// function validatePhone (phoneNumber)
// {
//   let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//   if (phoneNumber.match(regexPhone)) {
//     return true; 
//   } else {
//     return false; 
//   }
// }

// let phoneNumber = "+31636363634";
// console.log(validatePhone(phoneNumber));