import { useEffect, useState } from "react";
import Home from "./pages/Home"; // <-- 🔥 importe ton composant Home
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/CSS_JS/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Batiment from "./pages/Batiment.jsx";
import Services from "./pages/Services.jsx";
import Fabrication from "./pages/Fabrication.jsx";
import Fiche_artisan from "./pages/Fiche_artisan";
import Alimentation from "./pages/Alimentation.jsx";
import MentionsLegales from "./pages/Mentions_legales.jsx";
import Accessibilite from "./pages/Accessibilite.jsx";
import Cookies from "./pages/Cookies.jsx";
import Donnee_personnelles from "./pages/Donnees_personnelles.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [Artisans, setArtisans] = useState([]);

  // ✅ Récupère automatiquement l’URL du backend depuis .env
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/Artisans`) // 🔥 port backend corrigé (5173 = Vite)
      .then((res) => res.json())
      .then((data) => setArtisans(data))
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Batiment" element={<Batiment />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Fabrication" element={<Fabrication />} />
        <Route path="/Fiche_artisan/:id" element={<Fiche_artisan />} />
        <Route path="/Alimentation" element={<Alimentation />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/Accessibilite" element={<Accessibilite />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Donnees_personnelles" element={<Donnee_personnelles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;