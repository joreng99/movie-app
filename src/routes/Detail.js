import { useEffect } from "react";
import {useParams} from "react-router-dom"; //앞에서 넘겨준 url id받아오기

function Detail() {
  const {id} = useParams();
  console.log(id);
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
  };

  useEffect(()=> {
    getMovie();
  }, [])
  return <h1>Detail</h1>
}

export default Detail;