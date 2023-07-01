function submit(){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let nameError_sec = document.getElementById("nameError_sec");
    let phoneError_sec = document.getElementById("phoneError_sec");
    if(name === '' || name.length < 5){
        nameError.innerHTML = "Name is required";
        nameError_sec.innerHTML = "must be at least 5 characters";
    }
    else{
        nameError.innerHTML = "The name currect";
        nameError_sec.innerHTML = "";
    }
    if(email === '' || !email.includes("@")){
        emailError.innerHTML = "Email is required and must be valid";
    }
    else{
        emailError.innerHTML = "Email is currect";
    }
    if(phone === '' || phone.length < 10){
        phoneError.innerHTML = "Phone is required";
        phoneError_sec.innerHTML = "must be at least 10 characters";
    }
    else{
        alert("Thanks for your feedback");
    }
}