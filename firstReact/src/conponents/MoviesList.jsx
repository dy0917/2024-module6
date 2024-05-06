import Movie from "./movie";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
    id: 1, // items in data collections need unique IDs
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
    },
    {
    id: 2, // unique ID
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
    },
    {
    id: 3, // unique ID
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
    },
    ];
  return (
    <div className="MoviesList componentBox">
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {movies.map((movie) => (
          <Movie key ={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis}></Movie>
        ))}
      </ul>
    </div>
  );
}
export default MoviesList;
