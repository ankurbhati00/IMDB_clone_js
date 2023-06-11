//api key:  http://www.omdbapi.com/?i=tt3896198&apikey=d8e50a4d

// {Title: 'Force', Year: '2011', Rated: 'R', Released: '30 Sep 2011', Runtime: '137 min', …}
// Actors
// : 
// "John Abraham, Genelia D'Souza, Vidyut Jammwal"
// Awards
// : 
// "5 wins & 9 nominations"
// BoxOffice
// : 
// "N/A"
// Country
// : 
// "India"
// DVD
// : 
// "25 Jan 2017"
// Director
// : 
// "Nishikant Kamat"
// Genre
// : 
// "Action, Crime, Drama"
// Language
// : 
// "Hindi, Punjabi, Marathi, English"
// Metascore
// : 
// "N/A"
// Plot
// : 
// "A vengeful gangster targets and terrorizes an entire police unit and their families."
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BMTk4MTA0NDkzOV5BMl5BanBnXkFtZTcwNzY3MDg1Ng@@._V1_SX300.jpg"
// Production
// : 
// "N/A"
// Rated
// : 
// "R"
// Ratings
// : 
// Array(2)
// 0
// : 
// {Source: 'Internet Movie Database', Value: '6.5/10'}
// 1
// : 
// {Source: 'Rotten Tomatoes', Value: '50%'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// Released
// : 
// "30 Sep 2011"
// Response
// : 
// "True"
// Runtime
// : 
// "137 min"
// Title
// : 
// "Force"
// Type
// : 
// "movie"
// Website
// : 
// "N/A"
// Writer
// : 
// "Ritesh Shah, Gautham Vasudev Menon"
// Year
// : 
// "2011"
// imdbID
// : 
// "tt1992138"
// imdbRating
// : 
// "6.5"
// imdbVotes
// : 
// "8,166"
// [[Prototype]]
// : 
// Object

// ==========search and enter========

document.getElementById('form').addEventListener("submit",(event)=>{
    let searchValue = document.getElementById('search-input').value;
    console.log(searchValue);
   
    event.preventDefault();
    document.getElementById('search-input').value=" ";
    fetchdata(searchValue);
});

function notFound(){
  
   document.getElementById('search-result-text').innerHTML= ` "Oops! not found " `;
   document.getElementById('search-result-text').style.display='block';
   document.getElementById('search-result').style.display='none';


}

 async function fetchdata(search){

    fetch(`http://www.omdbapi.com/?t=${search}&apikey=d8e50a4d`)
    .then(async (data) => {
         data= await data.json();
        if (data.Response==="True") {

            showSearchResults(data);
            addToFavorite(data);

        }else{
        console.log('Not foun 404');

            notFound();
            return;
        }
       
    }).catch((e) =>{
        console.log('Connection error', e);
        notFound();
        return;
    } );

   
   

};

function showSearchResults(data){
   
document.getElementById('search-movie-img').setAttribute('src', data.Poster);
document.getElementById('title').innerText=data.Title;
document.getElementById('actors').innerText=data.Actors;
document.getElementById('genre').innerText=data.Genre;
document.getElementById('rating').innerText=data.imdbRating;
document.getElementById('language').innerText=data.Language;
document.getElementById('released').innerText=data.Released;
document.getElementById('duration').innerText=data.Runtime;

document.getElementById('search-result-text').style.display='block';
document.getElementById('search-result-text').innerHTML= ` " Search results " `;
document.getElementById('search-result').style.display='flex';
document.getElementById('body').style.backgroundImage='none';
document.getElementById('remove-from-favorites').style.display='none';

}

// <-------add-to-favorite------->
function addToFavorite(movie){
document.getElementById('add-to-favorites').addEventListener('click',function(){

    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    document.getElementById('remove-from-favorites').style.display='inline-block';
    removeFromFavorites(movie.imdbID);
});
};

function removeFromFavorites(id){
    document.getElementById('remove-from-favorites').addEventListener('click', function(){
        localStorage.removeItem(id);
        document.getElementById('remove-from-favorites').style.display='none';
    })
}