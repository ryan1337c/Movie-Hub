import Movie from "../models/Movie.js";

/* READ */
export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMoviesByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    const movies = await Movie.find({ genre: genre });
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getTrendingMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ isTrending: true });
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
