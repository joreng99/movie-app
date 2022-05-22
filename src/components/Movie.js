import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //새로고침 없이 detail페이지로 이동



function Movie({id,coverImg,title, year,summary,genres}) {
  return (      
    <div>
      <img src={coverImg} alt={title}/>
      <h2><Link to={`/movie/${id}`}>{title}</Link> ({year})</h2>
      <p>{summary}</p>
      <ul>
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