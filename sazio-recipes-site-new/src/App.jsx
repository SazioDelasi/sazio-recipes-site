import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import MainLayout from "./layout/main";
import RecipeDetails from "./pages/RecipeDetail";

function App() {
  return (
    <Routes>
      {/* Auth pages - no layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Main layout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes">
          <Route index element={<Recipes />}/>
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
