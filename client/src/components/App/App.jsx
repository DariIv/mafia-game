import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './App.css'



import Navigation from "../Navigation/Navigation";
import Registration from "../Registration/Registration";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import Home from '../Home/Home';
import Room from '../Room/Room';
import Main from '../Main/Main';
import Profile from "../Profile/Profile";

// import Chat from "../Chat/Chat";


function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/game" element={<Game />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/video" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>

        <Footer />

      </BrowserRouter>

    </Provider>

  );
}

export default App;
