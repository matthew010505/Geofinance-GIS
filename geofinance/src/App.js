import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Feautres from "./pages/feautres";
import Services from "./pages/services";
import Login from "./pages/login";
import Users from "./pages/users";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/feautre" element={<Feautres/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
