document.getElementById("collapse").addEventListener("click",function(){
    const sidebar=document.getElementById("sidebar")
    sidebar.style.display="block"
    sidebar.style.transform="translateX(0px)"
    sidebar.style.transition="1s"

})

document.getElementById("exit-icon").addEventListener("click",function(){
    const sidebar=document.getElementById("sidebar")
    sidebar.style.display="none"

})