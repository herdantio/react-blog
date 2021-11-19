import {Route, Routes} from "react-router-dom";

import './App.css';
import Home from "./atomic/pages/Home";
import MyBlog from "./atomic/pages/MyBlog";
import MenuBar from "./atomic/organisms/MenuBar";


function App() {
  return (
      <div>
        <MenuBar/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/blog" element={<MyBlog/>}/>
        </Routes>
      </div>
  );
}

export default App;
