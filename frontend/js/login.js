function validateData()                                    
{            
    var email = document.getElementById("email");
    var password = document.getElementById("password"); 
   
    if (email.value == "" || (email.value.match(/@/g) || []).length != 1 || (email.value.match(/\./g) || []).length != 1)              
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    
    var user = {
        "email": email.value,
        "password": password.value
    };
    
    return true; 
}