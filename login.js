const USERNAME="Abir"
const PASSWORD="01731292533"

console.log(password)

document.getElementById("password").addEventListener('keyup',function(){


    let inputUsername=document.getElementById("email")
    let input1UsernameValue=inputUsername.value
    let inputPassword=document.getElementById("password")
    let inputPasswordValue=inputPassword.value
    let loginButton=document.getElementById("login-btn")



    if(input1UsernameValue.length>=2 && inputPasswordValue.length>=8 ){
        loginButton.removeAttribute("disabled")
        loginButton.style.backgroundColor="green"
    }
    else{

        loginButton.setAttribute("disabled",true)



    }

})



document.getElementById("login-btn").addEventListener("click",function(){

    console.log(userName)
    let inputUsername=document.getElementById("email")
    let input1UsernameValue=inputUsername.value
    let inputPassword=document.getElementById("password")
    let inputPasswordValue=inputPassword.value


    if(input1UsernameValue==USERNAME && inputPasswordValue==PASSWORD){
        console.log("success")
    }


})