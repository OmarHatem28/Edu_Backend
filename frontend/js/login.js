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
    
    if (password.value == "" || password.length < 4 )                        
    { 
        window.alert("Please enter a password not less than 4 alphanumeric characters"); 
        password.focus(); 
        return false; 
    } 
    
    var user = {
        "email": email.value,
        "password": password.value
    };
    
    return true; 
}