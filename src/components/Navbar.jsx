


const Navbar = () => {

  const modeDark = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="navbar">
        <div className="navbar-half">
            <img src="/assets/img/pokeapi.svg" alt="pokeapi-diego-tuesta" />
            <div onClick={modeDark} className="navbar-central">
              <i className='bx bxs-moon'></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar