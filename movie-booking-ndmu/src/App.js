import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
export const history = createBrowserHistory();
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
        <Route path="/news" element={<News />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route index element={<Home />} />
        </Route>
        <Route path="/contact" element={<Login />}/>
        <Route path="/contact" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
