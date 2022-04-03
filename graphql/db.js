export let movies = [
    {
        id: 1,
        name:"영화 1",
        score:3
    },
    {
        id: 2,
        name:"반지의 제왕",
        score:8
    },
    {
        id: 3,
        name:"해리포터",
        score:9
    },
];

export const getMovies = () => movies


export const getById = (id) => {
  const filteredMovies = movies.filter(movie=>movie.id === id)
    return filteredMovies[0]
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie=>movie.id !== id)
  if(movies.length > cleanedMovies.length){
    movies = cleanedMovies
    return true
  }else{
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}

