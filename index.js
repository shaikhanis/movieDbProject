console.log('anis');
let APIkey = "dd29e99983b1e773538ca109e351908b";
let imageURLBase = 'https://www.themoviedb.org/t/p/original/';


const search = () => {
  
  document.getElementById('bannerImage').src ="https://media3.giphy.com/media/11ASZtb7vdJagM/giphy.gif";  
 document.getElementById('bannerImage2').src ="https://media3.giphy.com/media/11ASZtb7vdJagM/giphy.gif"; 
  
  const value = document.getElementById('movieInput').value
  
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${value}&page=1`
  const res = fetch(url)

  .then((res) => res.json())
  
  .then((data) =>{
    const result = data.results[0];
    document.getElementById('title').innerHTML = result.original_title;
    document.getElementById('bannerImage').src = imageURLBase + result.poster_path;
    document.getElementById('bannerImage2').src = imageURLBase + result.backdrop_path;
    document.getElementById('tagline').innerHTML = result.overview;
    document.getElementById('release_date').innerHTML = "release_date : " + result.release_date;
    document.getElementById('revenue').innerHTML = "popularity : " + result.popularity;
    document.getElementById('vote_average').innerHTML = "vote_average : " + result.vote_average +  "/10";
    document.getElementById('runtime').innerHTML = "run time : " + result.runtime;
    document.getElementById('plotsummary').innerHTML = result.tagline;
  })
}



function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const randomSearch = () => {
  
  document.getElementById('bannerImage').src ="https://media3.giphy.com/media/11ASZtb7vdJagM/giphy.gif";  
  document.getElementById('bannerImage2').src ="https://media3.giphy.com/media/11ASZtb7vdJagM/giphy.gif";
  
  const value = generateRandomLetter()
  
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${value}&page=1`
  
  const res = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${value}&page=1`)
  
  .then((res) => res.json())
  
  .then((data) =>{
    const result = data.results[Math.floor(Math.random() * data.results.length)];
    
     document.getElementById('title').innerHTML = result.original_title;
    document.getElementById('bannerImage').src = imageURLBase + result.poster_path;
    document.getElementById('bannerImage2').src = imageURLBase + result.backdrop_path;
    document.getElementById('tagline').innerHTML = result.overview;
    document.getElementById('release_date').innerHTML = "release_date : " + result.release_date;
    document.getElementById('revenue').innerHTML = "popularity : " + result.popularity;
    document.getElementById('vote_average').innerHTML = "vote_average : " + result.vote_average +  "/10";
    document.getElementById('runtime').innerHTML = "run time : " + result.runtime;
    document.getElementById('plotsummary').innerHTML = result.tagline;
  })
}

// this code for enter button...
let inputsearch = document.getElementById('movieInput');
let inputsearchbutton = document.getElementById('searchclickbutton');

inputsearch.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputsearchbutton.click();
  }
});