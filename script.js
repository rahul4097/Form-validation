
function registrationForm(e){
    if(e.target.name=="fullName"){
        fullName();
    }
    if(e.target.name=="email"){
        emailId();
    }
    if(e.target.name=="password"){
        passsword();
    }
    if(e.target.name=="confirmPassword"){
        confirmPassword();
    }
    if(e.target.name=="age"){
        age();
    }
    registrationForm.reset();
    return false;
}

function fullName(){
    const fullName=document.getElementById('fullName').value;
    var pattern=/^[a-zA-Z]*$/;
    const data={};
    if(fullName==""){
        document.getElementById('errorName').innerHTML="**Please enter your name";
        return false;
    }
    if(fullName.length<3){
        document.getElementById('errorName').innerHTML="**name must be grater than 2 words";
        return false;
    }
    if(fullName.length>20){
        document.getElementById('errorName').innerHTML="**Name must be less than 20 words";
        return false;
    }
    if(!fullName.match(pattern))
        {
        document.getElementById('errorName').innerHTML="**Only alphabet are allowed";
        return false;
    }
    document.getElementById('errorName').innerHTML="";
    data["fullName"] = fullName;
    console.log(data);
    return false;
}

function emailId(){
    const email=document.getElementById('email').value;
    if(email==""){
        document.getElementById('errorEmail').innerHTML="**Please enter your userName";
        return false;
    }
    document.getElementById('errorEmail').innerHTML="";
}

function passsword(){
    const pass=document.getElementById('password').value;

    if(pass==""){
        document.getElementById('errorPassword').innerHTML="**Please enter your password!";
        return false;
    }
    if(pass.search(/[A-Z]/)<0){
        document.getElementById('errorPassword').innerHTML="**Password shoud be at least one UpperCase letter!";
        return false;
    }
    if(pass.search(/[a-z]/)<0){
        document.getElementById('errorPassword').innerHTML="**Password shoud be at least one LowerCase letter!";
        return false;
    }
    if(pass.search(/[0-9]/)<0){
        document.getElementById('errorPassword').innerHTML="**Password shoud be atleast one numerical";
        return false;
    }
    if(pass.search(/[!@#\$%\^&\*_]/)<0){
        document.getElementById('errorPassword').innerHTML="**Password shoud be at least one special character!";
        return false;
    }
    document.getElementById('errorPassword').innerHTML="";
}

function confirmPassword(){
    const confirmPass=document.getElementById('confirmPassword').value;
    const pass=document.getElementById('password').value;

    if(confirmPass==""){
        document.getElementById('errorConfirmPassword').innerHTML="**Please confirm your password!";
        return false;
    }
    if(pass!=confirmPass){
        document.getElementById('errorConfirmPassword').innerHTML="**password did not match!";
        return false;
    }
    document.getElementById('errorConfirmPassword').innerHTML="";
}

function age(){
    const age=document.getElementById('age').value;
    if(age==""){
        document.getElementById('errorAge').innerHTML="**Please enter your age!";
        return false;
    }
    if(age<=17 || age>=100){
        document.getElementById('errorAge').innerHTML="**Age must be grater than or equal to 18!";
        return false;
    }
    document.getElementById('errorAge').innerHTML="";
}

