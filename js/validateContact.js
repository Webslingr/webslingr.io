function validateName(){
    if ($("#txtName").val() == ""){
        $("#txtName").css("border-color", "red");
        $("#txtNameError").text("Please enter your name");
        return true;
    }
    else{
        $("#txtName");
        $("#txtName").css("border-color", "black");
        $("#txtNameError").text("");
        return false;
    }
}

function validateEmail(){
    if ($("#txtEmail").val() == ""){
        $("#txtEmail").css("border-color", "red");
        $("#txtEmailError").text("Please enter your email");
        return true;
    }
    
    else{
        var emailRegEx=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    
        if (!emailRegEx.test($("#txtEmail").val())){
            $("#txtEmail").css("border-color", "red");
            $("#txtEmailError").text("Wrong email format");
            return true;
        }
        else{
            $("#txtEmail");
            $("#txtEmail").css("border-color", "black");
            $("#txtEmailError").text("");
            return false;
        }
    }
}


// function validateEmail(){
//     if ($("#txtEmail").val() == ""){
//         $("#txtEmail").css("border-color", "red");
//         $("#txtEmailError").text("Please enter your email");
//         return false;
//     }
    
//     else{
//         var emailRegEx=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    
//         if (!emailRegEx.test($("#txtEmail").val())){
//             $("#txtEmail").css("border-color", "red");
//             $("#txtEmailError").text("Wrong email format");
//             return false;
//         }
//         else{
//             $("#txtEmail");
//             $("#txtEmailError").text("");
//             return true;
//         }
//     }
// }

function validateMessage(){
    if ($("#txtMessage").val() == ""){
        $("#txtMessage").css("border-color", "red");
        $("#txtMessageError").text("Please enter your message");
        return true;
    }
    else{
        $("#txtMessage");
        $("#txtMessage").css("border-color", "black");
        $("#txtMessageError").text("");
        return false;
    }
}

function validateForm(){
    validateName()
    validateEmail()
    validateMessage()
    
    if (validateName() == false && validateEmail() == false && validateMessage() == false){
        //replace
        alert("Message sent");
    } else {
        // alert("Message not sent");
    }
}