import PokemonList from "../components/PokemonList";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { changeDisplay } from "../store/slices/loader.slice";
import Pagination from "../components/Pagination";


const Home = () => {
  const user = useSelector((state) => state.user);
  const [str, setStr] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const getData = async (type) => {
    //  dispatch(changeDisplay('none'))
      setPage(1)
      if (type === 0) {
       await  axios
          .get(`https://pokeapi.co/api/v2/pokemon/`)
          .then((result) => {
            setData(result.data.results)
            dispatch(changeDisplay('none'))
          })
          .catch(
            (error) =>
              error.response.status === 404 &&
              console.error(error.response.status)
          );
      } else {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${str}`)
          .then((result) => {
            dispatch(changeDisplay('none'))
            navigate(`/pokedex/${result.data.id}`)
            // console.log(result.status)
          })
          .catch(
            (error) =>
            
              dispatch(changeDisplay('none'))
          );
      }
   
   
  };

  const getType = async (type) => {
    if (type === 0) {
      try {
        const resp = await axios.get("https://pokeapi.co/api/v2/type");
        setType(resp.data.results);
      } catch (error) {
        console.error(error);
      }
    } else if (type > 0) {
      setPage(1)
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        let arr = [];
        resp.data.pokemon.map((item) =>
          arr.push({ name: item.pokemon.name, url: item.pokemon.url })
        );
        setData(arr);
        // console.log(arr);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getType(0);
    getData(0)
    dispatch(changeDisplay('flex'))
  }, []);

  const handleClick = () => {
    // console.log(str)
    // setData([])
    // dispatch(changeDisplay('none'))
    str === "" || str === " " ? alert("ingrese datos a buscar") : getData(2);
  };

  const perPage = 10;
  const quantyPage =
    data.length > 0 ? Math.ceil(data.length / perPage) : 0;
  const firstIndex = (page - 1) * perPage;
  const dataOfi =
    data.length > 0
      ? data.slice(firstIndex, firstIndex + perPage)
      : 0;

  return (
    <>
    {
      dataOfi.length > 0 ? (
        <>
        
        <div className="container">
        <div className="main">
          <div className="main-content">
            <p>
              <strong>Bienvenido {user},</strong> aquí podras encontrar a tu
              pokemon favorito
            </p>
            <div className="main-search">
              <div className="search-input">
                <input
                  onChange={(e) => setStr(e.target.value)}
                  type="text"
                  placeholder="Ingresa tu nombre"
                />
                <button onClick={handleClick}>Buscar</button>
              </div>
              <div className="search-select">
                <select name="" id="" onChange={(e) => getType(e.target.value)}>
                  <option value="0">--Select Type--</option>
                  {type.map((item) => (
                    <option key={item.name} value={item.url.split("/")[6]}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {<Pagination page={page} setPage={setPage} quantyPage={quantyPage} />}
            <div className="container-list">
            
              {dataOfi.map((item) => (
                <PokemonList key={item.name} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div> </>
      ) : <Loader />
    }
      
    </>
  );
};

export default Home;
