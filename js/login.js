const USERNAME=["Abir"]
const PASSWORD=["01731292533"]


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



    for (let i=0;i<=userName.length;i++){
        if(input1UsernameValue==USERNAME[i] && inputPasswordValue==PASSWORD[i]){
            location.href="index.html"
        }

            if (input1UsernameValue==userName[i] && inputPasswordValue==password[i]){

                console.log("success")
            }


        }

})