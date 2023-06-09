//api key:  http://www.omdbapi.com/?i=tt3896198&apikey=d8e50a4d

document.getElementById('form').addEventListener("submit",(event)=>{
    let searchValue = document.getElementById('search-input').value;
    console.log(searchValue);
   
    event.preventDefault();
    document.getElementById('search-input').value=" ";
    fetchdata(searchValue);
});


async function fetchdata(search){
let response= await fetch(`http://www.omdbapi.com/?t=${search}&apikey=d8e50a4d`);
let data= await response.json();
console.log(data);
};
