import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './App.css'


import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Game from "../Game/Game";
import Rules from "../Rules/Rules"
import Registration from "../Registration/Registration";
import Home from '../Home/Home';
import Room from '../Room/Room';
import Footer from "../Footer/Footer";


// import Chat from "../Chat/Chat";
import Error404 from '../Error404/Error404'
import Logout from "../Logout/Logout";


function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
          <Route path="/rules" element={<Rules />} />

          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/logout" element={<Logout />} />


        </Routes>

        <Footer />

      </BrowserRouter>

    </Provider>

  );
}

export default App;
