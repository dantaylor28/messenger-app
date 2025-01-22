import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authenticatedUser } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <Routes>
        <Route
          path="/"
          element={authenticatedUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authenticatedUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authenticatedUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/profile"
          element={authenticatedUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
