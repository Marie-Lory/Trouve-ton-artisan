import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // <-- 🔥 importe ton composant Home

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
      <div>
        <h1>Trouve ton artisan</h1>

        {/* ✅ Déclaration des routes */}
        <Routes>
          {/* Page d’accueil */}
          <Route path="/" element={<Home />} />

          {/* Exemple d’autres pages ou routes futures */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        {/* ✅ Exemple d’affichage local de la liste */}
        <ul>
          {Artisans.map((a) => (
            <li key={a.id_artisan}>
              {a.nom} — {a.specialite} ({a.ville})
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;