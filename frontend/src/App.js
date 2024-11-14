import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
