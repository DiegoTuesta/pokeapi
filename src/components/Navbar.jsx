
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { isDark } from "../store/slices/dark.slice";
const Navbar = () => {

  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();
  const modeDark = () => {
    document.documentElement.classList.toggle('dark')
    dispatch( isDark()  )
  }

  return (
    <div className="navbar">
        <div className="navbar-half">
            <Link to={'/pokedex'} >
              <img src="/assets/img/pokeapi.svg" alt="pokeapi-diego-tuesta" />
            </Link>
            <div onClick={modeDark} className="navbar-central">
              <i className={ dark ? "fa-regular fa-sun fa-beat" : "fa-solid fa-moon fa-bounce"}></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar