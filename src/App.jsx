import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Users from "./components/Users.jsx";

function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        {" | "}

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          About
        </NavLink>

        {" | "}

        <NavLink
          to="/users/101"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Users
        </NavLink>

        {" | "}

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Login
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;