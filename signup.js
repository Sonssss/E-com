function validateForm(){
    let email=document.forms["myForm"]["email"].value

    let name=document.forms["myForm"]["name"].value

    let password=document.forms["myForm"]["password"].value

    let confirmPassword=document.forms["myForm"]["confirmPassword"].value

    if(!name)
    alert("Name must be filled")
    if(!email)
    alert("Email must be filled")
    if(!password)
    alert("Password must be filled")
    if(!confirmPassword)
    alert("You must confirm your password!")
return false
}