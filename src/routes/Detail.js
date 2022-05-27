import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"; //앞에서 넘겨준 url id받아오기
import styles from "./Home.module.css";


function Detail() {
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id);
  const [details, setDetails] = useState([]);

  const getDetails = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      console.log(json);
      setLoading(false);
  };

  useEffect (()=> {
    getDetails();
  }, []);
  return (<div>
    
    {loading ? <div class={styles.loader}><h1>Loading to detail page...</h1></div> :     
    <div class={styles.container}>
      {/*Movie details*/}
      <img class={'styles.detial__img'} src={details.large_cover_image} alt={details.title}/>
      <div><h2>{details.title} ({details.year})</h2></div>
      <span>language: {details.language} </span>
      <span>rate: {details.rating} </span>
      <span>runtime: {details.runtime}</span>
      <p>{details.description_full}</p>
      <ul><span>genre</span>
        {details.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <button>Download</button>
    </div>}
  </div>);
}

export default Detail;