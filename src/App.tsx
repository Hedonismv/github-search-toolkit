import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import Navigation from "./components/Navigation";


function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'/favourite'} element={<FavouritePage/>}/>
          </Routes>
      </>
  );
}

export default App;
