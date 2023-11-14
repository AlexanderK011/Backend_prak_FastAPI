let burger = document.querySelector('.burger')
document.addEventListener("DOMContentLoaded",function(){
    burger.addEventListener("click",function(){
        document.querySelector('.nav_mobile').classList.toggle("nav_toggle")
        document.querySelector('.burger').classList.toggle("burg_open")
    })
})