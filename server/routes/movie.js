import express from "express";
import {
  getMovie,
  getMoviesByGenre,
  getTrendingMovies,
  getMovies,
} from "../controllers/movies.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/trending", verifyToken, getTrendingMovies);
router.get("/test", verifyToken, getMovies);
router.get("/", verifyToken, getMoviesByGenre);
router.get("/:id", verifyToken, getMovie);

export default router;
