for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const data = JSON.parse(localStorage.getItem(key));
// <-----movie card---->
const div =document.createElement('div');
const cls = document.createAttribute('class');
cls.value='movie-card';
div.setAttributeNode(cls);

const img =document.createElement('img');
const src=document.createAttribute('src');
src.value=data.Poster;
if(!data.Poster||data.Poster=="N/A"){
    src.value='https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';
}
img.setAttributeNode(src);
div.appendChild(img);

// <-----title------>
const title=document.createElement('div');
const title_id= document.createAttribute('id');
title_id.value='title';
title.setAttributeNode(title_id);
const text = document.createTextNode(data.Title);
title.appendChild(text);
div.appendChild(title);
document.getElementsByClassName('all-items')[0].appendChild(div);
  }