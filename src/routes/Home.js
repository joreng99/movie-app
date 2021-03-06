
import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"))
    .json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(()=>{
    getMovies()
  },[]);
  return <div>
    {loading ? <div class={styles.loader}><h1>Loading...</h1></div> :     
    <div class={styles.container}>
      {/*Navbar*/}
      <Navbar />
      {/*Movie description*/}
      <span class={styles.guide}>Click the title to see more details</span>
      <div class={styles.movies}>
        {movies.map((movie) => (
        <Movie 
          key = {movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title = {movie.title}
          year = {movie.year}
          summary= {movie.summary}
          genres={movie.genres}
        />
        ))}
      </div>
    </div>}

  </div>;
}

export default Home;