import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import HomePage from "./pages/homePage/HomePage";
import LottieMicrophone from "./pages/lottieMicrophone/LottieMicrophone";
import "./App.css"




function App() {
  
 return <div className="appWrap">
<NavBar/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/products" element={<Products/>} />
  <Route path="/Users" element={<Users/>}/>
  <Route path="/lottiebtn" element={<LottieMicrophone/>}/>
</Routes>

  </div>
  }

export default App;