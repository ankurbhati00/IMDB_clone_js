// ==========search and enter========

document.getElementById('form').addEventListener("submit",(event)=>{
    let searchValue = document.getElementById('search-input').value;
    event.preventDefault();

    document.getElementById('search-input').value=" ";
    fetchdata(searchValue);  //pass enterd text to fetch api server
});


// <----- if movie is not found show this----->
function notFound(){
   document.getElementById('search-result-text').innerHTML= ` "Oops! not found " `;
   document.getElementById('search-result-text').style.display='block';
   document.getElementById('search-result').style.display='none';


}


// <--------fetch api data ------>

 async function fetchdata(search){
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=d8e50a4d`)
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

// <--------show the result in main page---->
function showSearchResults(data){ 
document.getElementById('search-movie-img').setAttribute('src', data.Poster);
document.getElementById('title').innerText=data.Title;
document.getElementById('actors').innerText=data.Actors;
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

    // <-----use localStorage as temrory storage to store content id------->
    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    document.getElementById('remove-from-favorites').style.display='inline-block';
    removeFromFavorites(movie.imdbID);
});
};

// <------remove from fav button functaionalites--------->
function removeFromFavorites(id){
    document.getElementById('remove-from-favorites').addEventListener('click', function(){
        localStorage.removeItem(id);
        document.getElementById('remove-from-favorites').style.display='none';
    })
}
