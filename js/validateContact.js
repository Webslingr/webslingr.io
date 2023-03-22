function validateName(){
    if ($("#txtName").val() == ""){
        $("#txtName").css("border-color", "red");
        $("#txtNameError").text("Please enter your name");
        return false;
    }
    else{
        $("#txtName");
        $("#txtNameError").text("");
        return true;
    }
}

function validateEmail(){
    if ($("#txtEmail").val() == ""){
        $("#txtEmail").css("border-color", "red");
        $("#txtEmailError").text("Please enter your email");
        return false;
    }
    
    else{
        var emailRegEx=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    
        if (!emailRegEx.test($("#txtEmail").val())){
            $("#txtEmail").css("border-color", "red");
            $("#txtEmailError").text("Wrong email format");
            return false;
        }
        else{
            $("#txtEmail");
            $("#txtEmailError").text("");
            return true;
        }
    }
}

function validateMessage(){
    if ($("#txtMessage").val() == ""){
        $("#txtMessage").css("border-color", "red");
        $("#txtMessageError").text("Please enter your message");
        return false;
    }
    else{
        $("#txtMessage");
        $("#txtMessageError").text("");
        return true;
    }
}

function validateForm(){
    validateName()
    validateEmail()
    validateMessage()
    
    if (validateName() && validateEmail() && validateMessage()){
        //replace
        alert("Message sent");
    }
}