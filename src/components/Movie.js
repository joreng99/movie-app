import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //새로고침 없이 detail페이지로 이동
import styles from "./Movie.module.css";


function Movie({id,coverImg,title, year,summary,genres}) {
  return (      
    <div class={styles.movie}>
      <img class={styles.movie__img} src={coverImg} alt={title}/>
      <div><span class={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></span><span class={styles.movie__title}> ({year})</span></div>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul class={styles.movie__genres}>
        {genres.map( (genre) => <li key={genre}>{genre}</li> )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;