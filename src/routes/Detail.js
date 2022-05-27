import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"; //앞에서 넘겨준 url id받아오기
import Details from "../components/Details";


function Detail() {
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id);
  const [details, setDetails] = useState([]);

  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      console.log(json);
      setLoading(false);
  };

  useEffect (()=> {
    getMovie();
  }, []);
  return <div>
    {loading ? <div><h1>Loading to detail page...</h1></div> :     
    <div>
            {/*Movie details*/}
      <div>
        {details.map((detail) => (
        <Details 
          id={detail.id}
          coverImg={detail.large_cover_image}
          title = {detail.title}
          year = {detail.year}
          summary= {detail.description_full}
          genres={detail.genres}
          downloadUrl = {"https://yts.mx/torrent/download/2AEDED408119B4882E8D9AC0C5811B2731585CB1"}
          language = {detail.langage}
          rating = {detail.rating}
          runtime = {detail.runtime}
        />
        ))}
      </div>


    </div>}
  </div>
    
  }

export default Detail;