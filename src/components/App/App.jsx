import "./App.css";
// import moviesData from "../services/application";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/home'></Route>
          <Route path='/movies'></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
