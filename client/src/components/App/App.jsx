import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './App.css'


import Navigation from "../Navigation/Navigation";
import Home from '../Home/Home';
import Game from "../Game/Game";

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} /> 
         <Route path="*" element={<Error404 />} /> 
        
        </Routes>
      </BrowserRouter>
    </Provider>
        
  );
}

export default App;
