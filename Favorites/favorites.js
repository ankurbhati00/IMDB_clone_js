// <---itrate over the local storage keys and fetch the api obj keys and their values to update page----->

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);        //fetch key from localStorage
    const data = JSON.parse(localStorage.getItem(key));

// <-----movie card---->
const div =document.createElement('div');
const cls = document.createAttribute('class');
cls.value='movie-card';
div.setAttributeNode(cls);

// <----a tag and img tag inside div------->
const aTag =document.createElement('a');
const href =document.createAttribute('href');
href.value='../Movie-info/movie-info-home.html';
aTag.setAttributeNode(href);
div.appendChild(aTag);

//  img tag
const img =document.createElement('img');
const src=document.createAttribute('src');
src.value=data.Poster;
if(!data.Poster||data.Poster=="N/A"){
  src.value='https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';  //set api img data to src
}
img.setAttributeNode(src);

//<-------assign imdb id img tag------>

const img_imdbID= document.createAttribute('data-img_imdbID');  
img_imdbID.value=data.imdbID;
img.setAttributeNode(img_imdbID);

aTag.appendChild(img);


// <-----title------>
const title=document.createElement('div');
const title_id= document.createAttribute('id');
title_id.value='title';
title.setAttributeNode(title_id);
const text = document.createTextNode(data.Title);
title.appendChild(text);
div.appendChild(title);
document.getElementsByClassName('all-items')[0].appendChild(div);

// <-----remove from favourite remove_btn ----->
const remove_btn= document.createElement('div');
const imdbID= document.createAttribute('data-imdbID');
const style=document.createAttribute('style');
const remove_text= document.createTextNode("Remove");
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
remove_btn.setAttributeNode(imdbID);
remove_btn.setAttributeNode(style);
remove_btn.appendChild(remove_text);
div.appendChild(remove_btn);


  
  }


//  <------------handle remove btn click and redirect from img to  info page----->

 document.addEventListener('click',function(event){
const imdbID =event.target.getAttribute('data-imdbID');
const img_imdbID=event.target.getAttribute('data-img_imdbID');
localStorage.removeItem(imdbID);

sessionStorage.setItem('pageinfo', img_imdbID);  //this id will be used for movie info page
if(imdbID!=null){
  this.location.reload();
  }

 });

 