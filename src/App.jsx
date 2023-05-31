import { useState } from "react";
// import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from './components/MainLayout'

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
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
