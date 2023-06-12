// <==fetch the imdb id from localStorage to update page==>

let id = sessionStorage.getItem('pageinfo');
let data_obj = JSON.parse(localStorage.getItem(id));

// <---set data_obj values to movie info page elements--->
document.getElementById('background-blur-image').setAttribute('src', data_obj.Poster);
document.getElementById('movie-image').setAttribute('src', data_obj.Poster);
document.getElementById('movie-title').innerHTML=data_obj.Title;
document.getElementById('year').innerHTML=data_obj.Year;
document.getElementById('rated').innerText=data_obj.Rated;
document.getElementById('duration').innerText=data_obj.Runtime;

// <----- cast and info ----->
document.getElementById('actors').innerText=data_obj.Actors;
document.getElementById('director').innerText=data_obj.Director;
document.getElementById('writer').innerText=data_obj.Writer;
document.getElementById('released').innerHTML=data_obj.Released;
document.getElementById('genre').innerHTML=data_obj.Genre;
document.getElementById('language').innerHTML=data_obj.Language;
document.getElementById('awards').innerText=data_obj.Awards;

// <-----rating and votes ----->
document.getElementById('rating-val').innerText=data_obj.imdbRating;
document.getElementById('vote-count').innerText=data_obj.imdbVotes;
document.getElementById('plot').innerText=data_obj.Plot;