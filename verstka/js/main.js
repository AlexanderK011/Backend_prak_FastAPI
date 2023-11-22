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

// index&film start
filmsblock = document.querySelector('.films_block')
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/", {
      method: "GET",
    });
    const result = await response.json();
    
    for (i of result){
      film = document.createElement('div')
      film.classList.add('film')
      film.appendChild(document.createElement('h2')).innerHTML = i.name
      film.appendChild(document.createElement('p')).innerHTML = i.short_descr
      a = film.appendChild(document.createElement('a'))
      a.href = 'film.html'
      a.innerHTML = 'Смотреть'
      a.setAttribute('id',i.id)
      filmsblock.appendChild(film)
    }
    let fu1 = document.querySelector('.films_block').addEventListener('click', (e)=>{
      localStorage.setItem("id",e.target.id);
    })
}
uploadMultiple()
}
categorys = document.querySelector('.categorys')
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/genres", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        a = categorys.appendChild(document.createElement('a'))
        a.classList.add('cats')
        a.innerHTML = i.name+', '
        a.setAttribute('id',i.id)
      }
      let fu1 = document.querySelector('.categorys').addEventListener('click', (e)=>{
        localStorage.setItem("id",e.target.id);
          const films_all = document.getElementsByClassName('film');
          Array.from(films_all).forEach(element => {
            element.remove() 
        });
        if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
          async function uploadMultiple() {
              const response = await fetch(`http://127.0.0.1:8000/genres/${parseInt(localStorage.getItem("id"))}`, {
                method: "GET",
              });
              const result = await response.json();
              for (i of result.films){
                film = document.createElement('div')
                film.classList.add('film')
                film.appendChild(document.createElement('h2')).innerHTML = i.name
                film.appendChild(document.createElement('p')).innerHTML = i.short_descr
                a = film.appendChild(document.createElement('a'))
                a.href = 'film.html'
                a.innerHTML = 'Смотреть'
                a.setAttribute('id',i.id)
                filmsblock.appendChild(film)
          }
          }
          uploadMultiple()
          }
      })
  }
  uploadMultiple()
  }

  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/film.html" ){
    async function uploadMultiple() {
        const response = await fetch(`http://127.0.0.1:8000/film/${parseInt(localStorage.getItem("id"))}`, {
          method: "GET",
        });
        const result = await response.json();
        for (i in result){
          if (i == 'genres'){
            for (o of result[i]){
              document.querySelector('.Film_Genre').innerHTML = 'Жанры: ' +' ' + o.name
            }
          }else{
            document.querySelector('.film_name').innerHTML = result['name']
            document.querySelector('.Year_create').innerHTML = 'Год создания: ' +' ' + result.year_cr
            document.querySelector('.textaboFilm').textContent = result.description
          }
        }
    }
    uploadMultiple()
    }

// index&film end

// news&new start

if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/news.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/news", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        film = document.createElement('div')
      film.classList.add('film')
      film.appendChild(document.createElement('h2')).innerHTML = i.name
      film.appendChild(document.createElement('p')).innerHTML = i.description
      filmsblock.appendChild(film)
      a = film.appendChild(document.createElement('a'))
      a.href = 'new.html'
      a.innerHTML = 'Смотреть'
      a.setAttribute("id",i.id)
    }
     document.querySelector('.films_block').addEventListener('click', (e)=>{
      localStorage.setItem("id",e.target.id);
    })
  }
  uploadMultiple()


}
categorys = document.querySelector('.categorys')
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/news.html" ){
  async function uploadMultiple() {
      const response = await fetch("http://127.0.0.1:8000/news/cats/", {
        method: "GET",
      });
      const result = await response.json();
      for (i of result){
        a = categorys.appendChild(document.createElement('a'))
        a.classList.add('cats')
        a.innerHTML = i.name+', '
      }
  }
  uploadMultiple()
  }

  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/new.html" ){
    async function uploadMultiple() {
        const response = await fetch(`http://127.0.0.1:8000/news/${parseInt(localStorage.getItem("id"))}`, {
          method: "GET",
        });
        const result = await response.json();
        document.querySelector('.film_name').innerHTML = result.name
        document.querySelector('.new_p').innerHTML = result.description
    }
    uploadMultiple()}
// news&new end



//  cooments start
comms= document.querySelector('.comments')
  if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/new.html" ){
    async function uploadMultiple() {
        const response = await fetch(`http://127.0.0.1:8000/getcomments/${parseInt(localStorage.getItem("id"))}`, {
          method: "GET",
        });
        const result = await response.json();
        for (i of result){
          comment =document.createElement('div')
          comment.classList.add('comment')
          p = document.createElement('p')
          comment.appendChild(p)
          p.classList.add('com_name')
          p.innerHTML = i.nameuser
          p = document.createElement('p')
          comment.appendChild(p)
          p.innerHTML = i.message
          comms.appendChild(comment)
        }
    }
    uploadMultiple()}

    //  cooments end





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