
let userName=[]

let password=[]













//----------------------signup codes------------------------------------





//disabling and enabling button depending on if the user entered 8 digit password or not
document.getElementById("username-signup").addEventListener('keyup',function(){

    let input1=document.getElementById("username-signup")
    let input1Value=input1.value
    let input2=document.getElementById("password-signup")
    let input2Value=input2.value
    let signupButton=document.getElementById("signup-btn")

    if(input1Value.length>=2 && input2Value.length>=8 ){
        signupButton.removeAttribute("disabled")
        signupButton.style.backgroundColor="green"
    }
    else{
        signupButton.setAttribute="disabled,true"

    }


})



//setting please enter 8 digit password text at signup
document.getElementById("password-signup").addEventListener('focus',function(){
    let passwordText=document.createElement("p")
    passwordText.id="passwordText"

    let signupForm=document.getElementById("passwordtext")
    passwordText.innerText="Please enter a 8 digit password"
    signupForm.appendChild(passwordText)
    let input2=document.getElementById("password-signup")
    let input2Value=input2.value
    let text=document.getElementById("passwordText")

    if(input2Value.length>=8){
        text.remove()
    }

})

//removing the 8 digit password text when not focusing in password text at signup
document.getElementById("password-signup").addEventListener('blur',function(){
    let passwordText=document.getElementById("passwordText")
    passwordText.remove()
})


//disabling and enabling signup button after checking if the user inserted 8 digit password

document.getElementById("password-signup").addEventListener('keyup',function(){


    let input1=document.getElementById("username-signup")
    let input1Value=input1.value
    let input2=document.getElementById("password-signup")
    let input2Value=input2.value
    let signupButton=document.getElementById("signup-btn")



    if(input1Value.length>=2 && input2Value.length>=8 ){
        signupButton.removeAttribute("disabled")
        signupButton.style.backgroundColor="green"
    }
    else{

        signupButton.setAttribute("disabled",true)



    }
    let text=document.getElementById("passwordText")

    if(input2Value.length>=8){
        text.remove()
    }


})


//saving the password and going forward to login page

document.getElementById("signup-btn").addEventListener('click',function signup(){

    let usernameSignup=document.getElementById("username-signup")
    let username=usernameSignup.value 
    let passwordSignup=document.getElementById("password-signup")

    let passWord=passwordSignup.value
    let signupCompleteSection=document.getElementById("passwordtext")


    userName.push(username)
    password.push(passWord)
    console.log((userName))
    let signupComplete=document.createElement("p")

    signupComplete.innerHTML=`Signup Complete!!go back to Login page <a href='login.html'>login</a>`
    signupComplete.style.textAlign="center"
    signupCompleteSection.appendChild(signupComplete)
    




})












//--------------login codes----------------------




