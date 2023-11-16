let burger = document.querySelector('.burger')
document.addEventListener("DOMContentLoaded",function(){
    burger.addEventListener("click",function(){
        document.querySelector('.nav_mobile').classList.toggle("nav_off")
        document.querySelector('.nav_mobile').classList.toggle("nav_toggle")
        document.querySelector('.black_window').classList.toggle("window_on")
        document.querySelector('.burger').classList.toggle("burgnav_toggle")
        document.querySelector('.burger').classList.toggle("burg_open")
    })
})