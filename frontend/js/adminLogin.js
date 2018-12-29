function validateData()                                    
{            
    var username = document.getElementById("username");
    var password = document.getElementById("password"); 
   
    if ( username.value != "admin123")              
    { 
        window.alert("Please enter a valid username."); 
        email.focus(); 
        return false; 
    } 
    
    if (password.value != "admin123" )                        
    { 
        window.alert("Incorrect Password"); 
        password.focus(); 
        return false; 
    } 
    
    var user = {
        "username": username.value,
        "password": password.value
    };
    
    return true; 
}