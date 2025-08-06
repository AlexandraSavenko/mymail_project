import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import HomePage from "./pages/homePage/HomePage";




function App() {
  
 return <div>
<NavBar/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/products" element={<Products/>} />
  <Route path="/Users" element={<Users/>}/>
</Routes>

  </div>
  }

export default App;