import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import './App.css'


function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
