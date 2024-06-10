// const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQxNGFiN2UxZDkyOGI2Nzc0NTU0N2Q5YWVmYTY2MyIsInN1YiI6IjY2NTg2ZDNmYTU4YTMwMGUzOTUwNWVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqoAXJyY8_hZd1yTNNdCoMGcQ40lpoGmjBg1praQs3M'
//     }
//   };
  
//   fetch(`https://api.themoviedb.org/3/movie/505?api_key=89414ab7e1d928b67745547d9aefa663`, options)
//    .then(response => response.json())
//    .then(data => {
//       console.log(data);
  
//       // Poster Image URL
//       if (data.poster_path) {
//         console.log("Poster Image URL:", `https://image.tmdb.org/t/p/w500${data.poster_path}`);
//       }
  
//       // Backdrop Image URL
//       if (data.backdrops && data.backdrops.length > 0) {
//         console.log("Backdrop Images:");
//         data.backdrops.forEach(backdrop => {
//           console.log(`URL: https://image.tmdb.org/t/p/w500${backdrop.path}`);
//         });
//       }
//     })
//    .catch(err => console.error(err));
  
//    const baseUrl = `https://api.themoviedb.org/3/genre/movie/list`;
// const albumContainer = document.getElementById('container');


// const getAlbums = async () => {
//     const albumData = await fetch (`${baseUrl}/movie/1/photos`,{
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     }).then ( async (response) => {
//         const result = await response.json();
//         return result;
//     })
//     .catch(error=>{
//         throw new Error(error.message)
//     });
    

//     console.log({albumData});

//     albumData.forEach(item => {
//         const container = document.createElement('div');
//         container.setAttribute('key',item.id)
//         container.setAttribute('class','single-album-container')
//         const title = document.createElement('h3');
//         title.innerHTML = item.title;
//         const image = document.createElement('img');
//         image.setAttribute('alt','album-image')
//         image.src = item.url;
//         container.appendChild(image);
//         container.appendChild(title);
//         albumContainer.appendChild(container);
        
//     })
// };
// document.addEventListener('DOMContentLoaded',getAlbums)
const apiURL=`https://api.themoviedb.org/3/trending/all/week?api_key=89414ab7e1d928b67745547d9aefa663`;
const moviesContainer = document.getElementById("movies");

async function loadMovies(searchTerm){
  const URL = `https://api.themoviedb.org/3/trending/all/week?api_key=89414ab7e1d928b67745547d9aefa663` ;
  // `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
  const res = await fetch(`${URL}`);
  const data = await res.json();
  // console.log(data.Search);
  if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
  let searchTerm = (movieSearchBox.value).trim();
  if(searchTerm.length > 0){
      searchList.classList.remove('hide-search-list');
      loadMovies(searchTerm);
  } else {
      searchList.classList.add('hide-search-list');
  }
}

async function fetchMovies() {
  try{
    const response = await fetch(apiURL);
    const data = await response.json(); 

    data.results.forEach(media => {
      const movieCard = createMovieCard(media);
      moviesContainer.appendChild(movieCard);
    });
  }catch (error){
    cpnsole.error("Error feetching data", error);
  }
}
function createMovieCard(media){
  const{title,name,backdrop_path} = media;
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie_item")

  movieCard.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded>
  <div class = "title">${title || name}</div>`;
  return movieCard;
}
fetchMovies();

