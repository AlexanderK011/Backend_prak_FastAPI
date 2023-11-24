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
}
uploadMultiple()
let fu1 = document.querySelector('.films_block').addEventListener('click', (e)=>{
  localStorage.setItem("id",e.target.id);
})
}

try{
async function film_from_cat() {
  // ${parseInt(localStorage.getItem("test"))}
  const response = await fetch(`http://127.0.0.1:8000/genres/${window.film_genr}`, {  
    method: "GET",
  });
  const result = await response.json();
  window.arr1 = new Array()
  for (i of result.films){
    window.arr1.push(i.name)
  }
  const films_all = document.getElementsByClassName('film');
  Array.from(films_all).forEach(element => {
    if (!(arr1.indexOf(element.firstChild.innerHTML)> -1)){
      element.style.display = 'none'
    } else{
      element.style.display = 'flex'
    }   
});
}}
catch{
  console.log('--')
}

if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
let genrupd = document.querySelector('.categorys').addEventListener('click', (e)=>{
  localStorage.setItem('test', e.target.id);
  let film_genr = ''
  window.film_genr = e.target.id
  e.target.setAttribute('click',true)
  if (e.target.getAttribute('click') == 'true'){
    let allincat = document.getElementsByClassName('cats')
    for (i of allincat){
      i.setAttribute('click',false)
    }
    e.target.setAttribute('click',true)
  }
  const films_all = document.getElementsByClassName('film');
  Array.from(films_all).forEach(element => {
    element.style.display = 'none'
  })
  for (let i = 0; i <1; i++) {
    film_from_cat();
    const films_all = document.getElementsByClassName('film');
    Array.from(films_all).forEach(element => {
      if (!(arr1.indexOf(element.firstChild.innerHTML)> -1)){
        element.style.display = 'none'
      } else{
        element.style.display = 'flex'
      }   
  });
  }
})}

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
//     let genrupd = document.querySelector('.categorys').addEventListener('click', (e)=>{
//     localStorage.setItem('test', e.target.id);
//     console.log(localStorage.getItem('test'))
//     const films_all = document.getElementsByClassName('film');
//     Array.from(films_all).forEach(element => {
//       element.style.display = 'none'
//       // film_from_cat()
//   });
// })
  }
  uploadMultiple()
  }

if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/film.html" ){
  async function gefilm() {
      const response = await fetch(`http://127.0.0.1:8000/film/${parseInt(localStorage.getItem("id"))}`, {
        method: "GET",
      });
      const result = await response.json();
      console.log(result)
      for (i in result){
        if (i == 'genres'){
          for (o of result[i]){
            console.log(o)
            document.querySelector('.Film_Genre').innerHTML = 'Жанры: ' +' ' + o.name
          }
        }else{
          document.querySelector('.film_name').innerHTML = result['name']
          document.querySelector('.Year_create').innerHTML = 'Год создания: ' +' ' + result.year_cr
          document.querySelector('.textaboFilm').textContent = result.description
        }
      }
  }
  gefilm()
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
      a.setAttribute('showed',true)
    }
     document.querySelector('.films_block').addEventListener('click', (e)=>{
      localStorage.setItem("id",e.target.id);
    })
  }
  uploadMultiple()
}


if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/news.html" ){
  async function get_Fromcat_new() {
      const response = await fetch(`http://127.0.0.1:8000/cat/new/${window.id_cat}`, {
        method: "GET",
      });
      const result = await response.json();
      window.arr1 = new Array()
  for (i of result){
    window.arr1.push(i.name)
  }
  const films_all = document.getElementsByClassName('film');
    Array.from(films_all).forEach(element => {
      if (!(arr1.indexOf(element.firstChild.innerHTML)> -1)){
        element.style.display = 'none'
      } else{
        element.style.display = 'flex'
      }   
  });

  }
  categorys.addEventListener('click',(e)=>{
    let id_cat = ''
    window.id_cat = e.target.getAttribute('id_cat')
    e.target.setAttribute('clicked',true)
    if (e.target.getAttribute('clicked') == 'true'){
    let allincat = document.getElementsByClassName('cats')
    for (i of allincat){
      i.setAttribute('clicked',false)
    }
    e.target.setAttribute('clicked',true)
  }
  const news_all = document.getElementsByClassName('film');
  Array.from(news_all).forEach(element => {
    element.style.display = 'none'
  })
  for (let i = 0; i <1; i++) {
    get_Fromcat_new();
  }
  })
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
        a.setAttribute('id_cat',i.id)
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

// post add film
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/index.html" ){
send = document.querySelector('.sendform').addEventListener("click",function(){
  let datafilm = {
    name: $('#name_film').val(),
    description: $('#description_film').val(),
    short_descr: $('#short_description_film').val(),
    year_cr: $('#Year_create_film').val()
  }
  async function FilmCreate() {
      const response = await fetch("http://127.0.0.1:8000/newfilm", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(datafilm)
      });
      let result = await response.json();
      if (result.year_cr !== undefined){
        if (document.querySelector('h4')){
          document.querySelector('h4').remove()}
        addp = document.createElement('h4')
        addp.innerHTML = 'Успешно'
        filmf = document.querySelector('.filmfomr')
        filmf.appendChild(addp)
      }
      else{
        if (document.querySelector('h4')){
          document.querySelector('h4').remove()
        }
        addp = document.createElement('h4')
        addp.innerHTML = 'Ошибка'
        filmf = document.querySelector('.filmfomr')
        filmf.appendChild(addp)
      }
  }
  FilmCreate()
})
}

// post add new comments 
if(window.location.pathname=="/D:/projects/uch_prak_fastapi/verstka/new.html" ){
send = document.querySelector('.sendcomment_form').addEventListener("click",function(){
  let datafilm = {
    nameuser: $('#nameuser').val(),
    message: $('#message').val(),
    new_id: parseInt(localStorage.getItem("id"))
  }
  async function CommentCreate() {
      const response = await fetch("http://127.0.0.1:8000/commentcreate", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(datafilm)
      });
      let result = await response.json();
      if (result !== undefined){
        if (document.querySelector('h4')){
          document.querySelector('h4').remove()}
        addp = document.createElement('h4')
        addp.innerHTML = 'Успешно'
        filmf = document.querySelector('.commentadd')
        filmf.appendChild(addp)
      }
      else{
        if (document.querySelector('h4')){
          document.querySelector('h4').remove()
        }
        addp = document.createElement('h4')
        addp.innerHTML = 'Ошибка'
        filmf = document.querySelector('.commentadd')
        filmf.appendChild(addp)
      }
  }
  CommentCreate()
})
}



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