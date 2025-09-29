import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import NotFound from "./pages/NotFound"
import MentionsLegales from "./pages/Mentions_legales"
import Accessibilité from "./Accessibilité";
import Alimentation from "./Alimentation";
import Cookies from "./Cookies";
import Donnée_personnelles from "./Données_personnelles";
import Fabrication from "./Fabrication";

function App() {
  return (
    <BrowserRouter>
      <Header title="Trouve ton artisan"/>
      <Routes>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Bâtiment" element={<Bâtiment/>}></Route>
        <Route path="/Mentions_Legales" element={<MentionsLegales/>}></Route>
        <Route path="/Accessibilité" element={<Accessibilité/>}></Route>
        <Route path="/Alimentation" element={<Alimentation/>}></Route>
        <Route path="/Cookies" element={<Cookies/>}></Route>
        <Route path="/Données_personnelles" element={<Donnée_personnelles/>}></Route>
        <Route path="/Fabrication" element={<Fabrication/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
