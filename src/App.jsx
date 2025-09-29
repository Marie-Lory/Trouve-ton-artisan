import { useEffect, useState } from "react";

function App() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("/api/artisans")
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trouve ton artisan</h1>
      <ul>
        {artisans.map(a => (
          <li key={a.id_artisan}>
            {a.Nom} — {a.Spécialité} ({a.Ville})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;