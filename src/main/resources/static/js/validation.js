function validate() {
    // result boolean variable
    var formIsOkay = true;
    // find the first Name value, then repeat for other fields
    var firstName = document.getElementById("firstName").value;
    var password = document.getElementById("password").value;

    // store error message in variables
    var firstNameError = document.getElementById("firstName-error-message");
    var passwordError = document.getElementById("password-error-message");
    var ageError = document.getElementById("age-error-message");
    // reset previous error messages
    var errorMessages = document.getElementsByTagName("span");
    for (let i = 0; i < errorMessages.length; i++){
        errorMessages[i].innerHTML = "";
    }


    // begin the validation
    // check if the first name field is null
    //  firstname = ""  !!  --> ''
    if (!firstName ||  firstName.match(/[^a-z0-9A-Z]/)) {
        firstNameError.innerHTML = "Please enter your first name/ no special characters allowed!";
        formIsOkay = false;
        // "    " ==> ""   (the length is zero)
        // " f   " ==> "f"
    } else if (!firstName.replace(/\s/g, '').length) {
        firstNameError.innerHTML = "Only whitespace detected";
        formIsOkay = false;
    }
    // check if password is null
    if (!password) {
        passwordError.innerHTML = "Please enter a password";
        formIsOkay = false;
        document.getElementById("password").focus();
    } else if (!password.replace(/\s/g, '').length) { // check if password is spaces only
        passwordError.innerHTML = "Only spaces found";
        formIsOkay = false;
        document.getElementById("password").focus();
    } else if (password.length < 8){ // check for password length
        passwordError.innerHTML = "Password should be at least 8 characters long";
        formIsOkay = false;
        document.getElementById("password").focus();
    } else if (!password.match(/[A-Z]/g)) {
        passwordError.innerHTML = "Password requires at least 1 uppercase letter";
        formIsOkay = false;
        document.getElementById("password").focus();
    } else if (!password.match(/[0-9]/g)) {
        passwordError.innerHTML = "Password requires at least 1 number";
        formIsOkay = false;
        document.getElementById("password").focus();
    }

    if (document.getElementById("age").value <= 0){
        ageError.innerHTML = "Age must be greater than 0";
        formIsOkay = false;
    }

    return formIsOkay;
}
