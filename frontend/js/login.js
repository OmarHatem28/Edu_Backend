function validateData()                                    
{            
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
   
    if (email.value == "" || email.value.indexOf("@", 0) != 1 || email.value.indexOf(".", 0) != 1)                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return flase; 
    } 
    
    return true; 
}