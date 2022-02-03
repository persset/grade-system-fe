import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard"></Route>
      </Routes>
    </Router>
  );
}
