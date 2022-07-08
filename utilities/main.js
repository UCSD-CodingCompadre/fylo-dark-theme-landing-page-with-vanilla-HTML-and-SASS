const checkEmail = () =>
{
    let emailInput = document.getElementById("email-input");
    let email = emailInput.value.trim();
    let error = document.getElementById("error-message");
    let flag = 1;
    if(email=== "" || email.length === 0)
    {
        error.innerHTML = "Email cannot be empty";
        error.style.display = "block";
        return;
    }
    
    if(email.includes("@") && email.includes(".com"))
    {
        let firstEmailTrim = email.slice(email.indexOf("@")+1, email.length);
        // Check for 2nd @
        if(!firstEmailTrim.includes("@"))
        {
            let secondEmailTrim = firstEmailTrim.slice(firstEmailTrim.indexOf(".com")+1, firstEmailTrim.length)
            // Check for another "." and ensure only com is left
            if(!secondEmailTrim.includes(".") && secondEmailTrim.length === 3)
            {
                flag--;
            }
        }
    }
    if(flag)
    {
        error.innerHTML = "Please enter a valid email address";
        error.style.display = "block";
    }
    else
    {
        error.innerHTML = "";
        error.style.display = "none";
    }
}