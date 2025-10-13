import { useEffect, useState } from "react";
import Home from "./pages/Home"; // <-- 🔥 importe ton composant Home
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Batiment from "./pages/Batiment.jsx";
import Services from "./pages/Services.jsx";
import Fabrication from "./pages/Fabrication.jsx";
import Alimentation from "./pages/Alimentation.jsx";
import MentionsLegales from "./pages/Mentions_legales.jsx";
import Accessibilite from "./pages/Accessibilite.jsx";
import Cookies from "./pages/Cookies.jsx";
import Donnee_personnelles from "./pages/Donnees_personnelles.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [Artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Artisans") // 🔥 port backend corrigé (5173 = Vite)
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
        <Route path="/Alimentation" element={<Alimentation />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/Accessibilite" element={<Accessibilite />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Donnees_personnelles" element={<Donnee_personnelles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        {/* ✅ Déclaration des routes */}
        <Routes>
          {/* Page d’accueil */}
          <Route path="/*" element={<Home />} />

          {/* Exemple d’autres pages ou routes futures */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        {/* ✅ Exemple d’affichage local de la liste */}
        {/* <ul> */}
          {/* {Artisans.map((a) => ( */}
            {/* <li key={a.id_artisan}> */}
              {/* {a.nom} — {a.specialite} ({a.ville}) */}
            {/* </li> */}
          {/* ))} */}
        {/* </ul> */}
      </div>
    </Router>
  );
}

export default App;