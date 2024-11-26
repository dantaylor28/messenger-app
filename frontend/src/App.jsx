import { Navigate, Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authenticatedUser } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <Routes>
        <Route path="/" element={authenticatedUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authenticatedUser ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={authenticatedUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
