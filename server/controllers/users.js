import User from "../models/User.js";
import Movie from "../models/Movie.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* READ */
export const getUserMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const { savedMovies } = await User.findById(id);
    // formatting saved movie list and returning it
    const savedMoviesObj = await Promise.all(
      savedMovies.map((id) => Movie.findById(id))
    );
    const formattedSavedMovies = savedMoviesObj.map(
      ({ _id, title, picturePath }) => {
        return { _id, title, picturePath };
      }
    );
    res.status(200).json(formattedSavedMovies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveMovies = async (req, res) => {
  try {
    const { id, movieId } = req.params;
    const user = await User.findById(id);

    if (user.savedMovies.includes(movieId)) {
      user.savedMovies = user.savedMovies.filter((id) => id !== movieId);
    } else {
      user.savedMovies.push(movieId);
    }
    await user.save();

    // formatting saved movie list and returning it
    const savedMovies = await Promise.all(
      user.savedMovies.map((id) => Movie.findById(id))
    );
    const formattedSavedMovies = savedMovies.map(
      ({ _id, title, picturePath }) => {
        return { _id, title, picturePath };
      }
    );
    res.status(200).json(formattedSavedMovies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
