function validateFormInputFields(inputElement, errormessage){
    let validation = true; 
    if(inputElement.value === ""){ 
        const parentElement = inputElement.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = errormessage; 
        validation = false;
    }
    return validation;  
}


function validateFormInputFieldsExtra(inputElement1, inputElement2){ 
    let validation = true; 
    
    if(inputElement1.value!=="" && inputElement2.value===""){
        const parentElement = inputElement2.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = "Meg kell adni a szerzőt is!"; 
        validation = false; 
    }
    if(inputElement1.value==="" && inputElement2.value!==""){ 
        const parentElement = inputElement1.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = "Meg kell adni a művet is!";
        validation = false; 
    }
    return validation;
}