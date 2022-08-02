import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
export const history = createBrowserHistory();
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
