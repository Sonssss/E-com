console.log("connect")
function validateForm(){
    let email=document.forms["myForm"]["email"].value
    let password=document.forms["myForm"]["password"].value
    
    if(!email)
    alert("Email must be filled")
    if(!password)
    alert("Password must be filled")
    return false
}
