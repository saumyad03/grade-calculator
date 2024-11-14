import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
