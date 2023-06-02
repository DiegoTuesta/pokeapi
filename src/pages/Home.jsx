import PokemonList from "../components/PokemonList";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isLoading } from "../store/slices/loader.slice";
// import Pagination from "../components/Pagination";
import Pagination2 from "../components/Pagination2";
import {
  getPokemonThunk,
  getPokemonXTypeThunk,
} from "../store/slices/pokemon.slice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.pokemon);

  const [str, setStr] = useState("");
  const [type, setType] = useState([]);
  // const [page, setPage] = useState(1);


  const getPokemonXNameThunk = (name) => {
    dispatch(isLoading(true));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((result) => {
        navigate(`/pokedex/${result.data.id}`);
      })
      .catch(console.error)
      .finally(() => dispatch(isLoading(false)));
  };
  useEffect(() => {
    dispatch(getPokemonThunk());
    // console.log(data)
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((result) => setType(result.data.results))
      .catch(console.error);
  }, []);

  // const perPage = 10;
  // const quantyPage = data.length > 0 ? Math.ceil(data.length / perPage) : 0;
  // const firstIndex = (page - 1) * perPage;
  // const dataOfi =
  //   data.length > 0 ? data.slice(firstIndex, firstIndex + perPage) : 0;

    //LOGICA DE PAGINACION
    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(6)
    const initialPoke = (page - 1) * pokePerPage
    const finalePoke = page * pokePerPage
    //se pone && porque pokemon es undefinden
    const maxPage = data && data.length / pokePerPage

     

  return (
    <div className="container">
      {data.length > 0 && (
        <div className="main">
          <div className="main-content">
            <p>
              <strong>Welcome {user},</strong> here are found your favorites pokemon 
            </p>
            <div className="main-search">
              <div className="search-input">
                <input
                  required
                  onChange={(e) => setStr(e.target.value)}
                  type="text"
                  placeholder="Input.."
                />
                <button onClick={() => getPokemonXNameThunk(str)}>
                  Search
                </button>
              </div>
              <div className="search-select">
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    dispatch(getPokemonXTypeThunk(e.target.value))
                  }
                >
                  <option value="0">All Pokemon</option>
                  {type.map((item) => (
                    <option key={item.name} value={item.url.split("/")[6]}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {
              // <Pagination
              //   page={page}
              //   setPage={setPage}
              //   quantyPage={quantyPage}
              // />
                <Pagination2 page={page} maxPage={maxPage} setPage={setPage} />
            }
            <div className="container-list">
              {data.slice(initialPoke, finalePoke).map((item) => (
                <PokemonList key={item.name} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
