
// import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from './components/MainLayout'
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {

  const isLoading = useSelector( state => state.loader )

  return (
    <HashRouter>
      { isLoading && <Loader /> }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={ <MainLayout /> } >
            <Route path="/pokedex" element={<Home />} />
            <Route path="/pokedex/:id" element={<Pokemon />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
