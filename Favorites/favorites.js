

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

// <-----remove from favourite btn ----->
const btn= document.createElement('div');
const imdbID= document.createAttribute('data-imdbID');
const style=document.createAttribute('style');
const onClick=document.createAttribute('onclick');
const removeText= document.createTextNode("Remove");
imdbID.value=data.imdbID;
style.value=
` width:60px;
  background-color:red; 
  color:black;
  padding: 5px; 
  border-radius:0px 0px 0px 4px;
  position:absolute;
  right:0px;
  top:0px;
  `


btn.setAttributeNode(imdbID);
btn.setAttributeNode(style);
btn.setAttributeNode(onClick);

btn.appendChild(removeText);
div.appendChild(btn);


  
  }

 document.addEventListener('click',function(event){
let imdbID =event.target.getAttribute('data-imdbID');
localStorage.removeItem(imdbID);
this.location.reload();
 });