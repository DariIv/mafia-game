import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import style from './App.module.css'


import Navigation from "../Navigation/Navigation";
import Registration from "../Registration/Registration";
import Footer from "../Footer/Footer";
import Rules from "../Rules/Rules"
import Home from '../Home/Home';
import Room from '../Room/Room';


// import Chat from "../Chat/Chat";
import Error404 from '../Error404/Error404'


function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        
        <div className={style.width}>
        <Navigation /> 

        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/rules" element={<Rules />} /> 
         <Route path="*" element={<Error404 />} /> 
         <Route path="/registration" element={<Registration />} />
         <Route path="/room/:id" element={<Room />} />
         {/* <Route path="/video" element={<Main />} /> */}
        </Routes>

        {/* <Footer /> */}
        </div>
      </BrowserRouter>

    </Provider>

  );
}

export default App;
