import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './App.css'


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

        <Navigation /> 

        <Routes>
         <Route path="/game" element={<Home />} />
         <Route path="/" element={<Registration />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/rules" element={<Rules />} /> 
         <Route path="/room/:id" element={<Room />} />
         {/* <Route path="/video" element={<Main />} /> */}
         <Route path="*" element={<Error404 />} /> 
        </Routes>

        <Footer />

      </BrowserRouter>

    </Provider>

  );
}

export default App;
