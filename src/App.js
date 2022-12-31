import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Admin from "./page/Admin";
import Home from "./page/Home";
import Login from "./page/Login";
import Nomatch from "./page/Nomatch";
import Order from "./page/Order";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
