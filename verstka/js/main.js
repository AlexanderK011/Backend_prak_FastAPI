// Burger
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

// add films form modal
let filmform = document.querySelector('.filmfomr')
let addfilms = document.querySelector('.addfilms')
document.addEventListener("DOMContentLoaded",function(){
  addfilms.addEventListener("click",function(){
    filmform.classList.toggle('flextoform')
  })
})

// close modal
document.querySelector('.close').addEventListener("click",function(){
  filmform.classList.toggle('flextoform')
})



// index&film start
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/", {
      method: "GET",
    });
    const result = await response.json();
    for (i of result){
      console.log(i)
    }
}
uploadMultiple()

if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/genres", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        console.log(i)
      }
  }
  uploadMultiple()
  }

  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/film.html" ){
    async function uploadMultiple() {
        const response = await fetch("http://127.0.0.1:8000/film/1/", {
          method: "GET",
        });
        const result = await response.json();
        console.log(result)
        for (i in result){
          if (i == 'genres'){
            for (o of result[i]){
              console.log(o.name)
            }
          }else{
          console.log(result[i])
          }
        }
    }
    uploadMultiple()
    }
// index&film end

// news&new start
}
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/news.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/news", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        console.log(i)
      }
  }
  uploadMultiple()
}

if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/news.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/news/cats/", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        console.log(i)
      }
  }
  uploadMultiple()
  }

  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/new.html" ){
    async function uploadMultiple() {
        const response = await fetch("http://127.0.0.1:8000/news/2", {
          method: "GET",
        });
        const result = await response.json();
        console.log(result.name)
        console.log(result.description)
    }
    uploadMultiple()}
// news&new end



//  cooments start
  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/new.html" ){
    async function uploadMultiple() {
        const response = await fetch("http://127.0.0.1:8000/getcomments/1", {
          method: "GET",
        });
        const result = await response.json();
        console.log(result)
        for (i of result){
          console.log(i.nameuser)
          console.log(i.message)
        }
    }
    uploadMultiple()}

    //  cooments end