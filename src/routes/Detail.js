import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"; //앞에서 넘겨준 url id받아오기
import styles from "./Detail.module.css";
import Navbar from "../components/Navbar";

function Detail() {
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const [details, setDetails] = useState([]);

  const getDetails = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      setLoading(false);
      console.log(json)
  };

  useEffect (()=> {
    getDetails();
  }, []);
  return (<div>
    
    {loading ? <div class={styles.loader}><h1>Loading to detail page...</h1></div> :     
    <div class={styles.container}>
      {/*Navbar*/}
      <Navbar />
      {/*Movie details*/}
      <img class={styles.detail__img} src={details.medium_cover_image} alt={details.title}/>
      <h2>{details.title} ({details.year})</h2>
      <div class={styles.detail__info}>
        <span>language: {details.language} </span>
        <span>rate: {details.rating} / 10</span>
        <span>runtime: {details.runtime} min</span>
      </div>
      <ul  class={styles.detail__genres}>
        {details.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <div class={styles.detail__summary}><p>{details.description_full}</p></div>
      <a href = "https://yts.mx/torrent/download/2AEDED408119B4882E8D9AC0C5811B2731585CB1"><button  class={styles.detail__download}>Download</button></a>
    </div>}
  </div>);
}

export default Detail;