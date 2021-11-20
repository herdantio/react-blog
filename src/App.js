import {Route, Routes} from "react-router-dom";

import FirebaseReactBlog from "./utils/FirebaseReactBlog";

import './App.css';
import Home from "./atomic/pages/Home";
import MyBlog from "./atomic/pages/MyBlog";
import MenuBar from "./atomic/organisms/MenuBar";
import Login from "./atomic/pages/Login";
import WebBodyWrapper from "./atomic/templates/WebBodyWrapper";

new FirebaseReactBlog()

function App() {
  return (
      <div>
        <MenuBar/>
        <WebBodyWrapper>
          <Routes>
              <Route path="/" index element={<Home/>}/>
              <Route path="/blog" element={<MyBlog/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
        </WebBodyWrapper>
      </div>
  );
}

export default App;
