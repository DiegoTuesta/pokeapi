import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const PokemonList = ({url}) => {
  const [data, setData] = useState([])

  const getData = async() => {
    try {
       await axios.get(url).then(
        result => setData(result.data)
      ).catch(console.error)
    } catch (error) {
      
    }
  }

  useEffect( () =>{
    getData()
  },[])

  return (
    
    <Link to={`/pokedex/${data.id}`} >
      <article className="card" >
        <div className="card-half">
          <img
            src={data.sprites?.other.dream_world.front_default}
            alt={
              data.name
             }
          />
          <h2>{data.name}</h2>
          <h3>{ data.types?.map( (item, index) => index=== 0 && item.type.name  ) }</h3>
          <p>type</p>
          <div className="hr"></div>
          <div className="card-central">
            <div className="row">
              <div>
                <p>HP</p>
                <p>{ data.stats?.map( (item, index) => index=== 0 && item.base_stat  ) }</p>
              </div>
              <div>
                <p>Defensa</p>
                <p>{ data.stats?.map( (item, index) => index=== 2 && item.base_stat  ) }</p>
              </div>
            </div>
            
            <div className="row">
              <div>
                <p>Ataque</p>
                <p>{ data.stats?.map( (item, index) => index=== 1 && item.base_stat  ) }</p>
              </div>
              <div>
                <p>Speed</p>
                <p>{ data.stats?.map( (item, index) => index=== 5 && item.base_stat  ) }</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      </Link>
  );
};

export default PokemonList;
