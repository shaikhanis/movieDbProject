console.log('anis');
Cocoen.parse(document.body);
let apiKey = "dd29e99983b1e773538ca109e351908b";

const searchformovie = () =>{
    document.getElementById('sample_movieimage').src = "'https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg'";
}

function randomLatter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  const searchforrandommovie = () => {
  
    document.getElementById('sample_movieimage').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg';  
   document.getElementById('cocoensliderone').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg'; 
    
    const value = randomLatter()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`
    
    const res = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`)
    
    .then((res) => res.json())
    
    .then((data) =>{
      const result = data.results[Math.floor(Math.random() * data.results.length)];
      
       document.getElementById('sample_movietitle').innerHTML = result.original_title;
      document.getElementById('sample_movieimage').src = "https://image.tmdb.org/t/p/original" + result.poster_path;

      document.getElementById('sample_tagline').innerHTML = result.tagline;
      document.getElementById('sample_plotsummary').innerHTML = result.overview;
    document.getElementById(`sample_revenue`).innerHTML = result.revenue;
    document.getElementById(`sample_runtime`).innerHTML = result.runtime;
    document.getElementById(`sample_vote_average`).innerHTML = result.vote_average;

      document.getElementById('cocoensliderone').src = "https://image.tmdb.org/t/p/original" + result.backdrop_path;
      document.getElementById('cocoenslidertwo').src = "https://image.tmdb.org/t/p/original" + result.backdrop_path;
    document.getElementById(`moviewebsitehref`).innerHTML = result.homepage;
    })
  }