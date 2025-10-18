import "../assets/CSS_JS/Accessibilite.css";
import "../assets/CSS_JS/global.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet"; // ✅ Import du module SEO


const Cookies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // 🔹 Gestion de la recherche intelligente
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    // ✅ Redirection vers les catégories
    const categories = ["alimentation", "bâtiment", "batiment", "services", "fabrication"];
    if (categories.includes(query)) {
      navigate(`/${query.charAt(0).toUpperCase() + query.slice(1)}`);
      return;
    }

    try {
      // ✅ Recherche d’un artisan par nom dans la BDD (API)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/Artisans`);
      const data = await res.json();

      const normalized = Array.isArray(data)
        ? data.map((item) => (item.dataValues ? item.dataValues : item))
        : [];

      // Recherche insensible à la casse et aux espaces
      const foundArtisan = normalized.find(
        (a) => a.nom.trim().toLowerCase() === query
      );

      if (foundArtisan) {
        navigate(`/Fiche_artisan/${foundArtisan.id_artisan ?? foundArtisan.id}`);
      } else {
        navigate("/Notfound");
      }
    } catch (err) {
      console.error("❌ Erreur lors de la recherche d’artisan :", err);
      navigate("/Notfound");
    }
  };

  return (
    <div className="App">
      {/* ✅ Balises SEO dynamiques */}
        <Helmet>
          <title>Trouve ton artisan - Trouvez un professionnel de qualité</title>
          <meta
            name="description"
            content="Cette page est en cours de construction et est actuellement vide"
          />
          <meta
            name="keywords"
            content="artisan, trouver artisan, bâtiment, alimentation, fabrication, services, professionnels, cookies, France"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      <header>
        <nav className="navbar navbar-expand-md custom-navbar">
          <div className="container-fluid nav-content">
            {/* Logo à gauche */}
            <Link className="navbar-brand" to="/">
              <img src="/public/img/Logo.png" alt="Logo du site Trouve ton artisan" />
            </Link>

            {/* Bouton burger pour mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
        
            {/* Zone de navigation principale */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                <li className="nav-item"><Link className="nav-link" to="/Batiment">Bâtiment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Fabrication">Fabrication</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Alimentation">Alimentation</Link></li>
              </ul>
        
              {/* ✅ Barre de recherche fonctionnelle */}
              <form className="search-form ms-auto" onSubmit={handleSearchSubmit}>
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher un artisan..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div>
          <h1 className="titre-principal">Page en construction...</h1>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <section>
            <a
              href="https://www.bing.com/maps?&cp=45.740688~4.819364&lvl=16.32"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Lyon <br /> 101 cours Charlemagne <br /> CS 20033 <br /> 69269 LYON CEDEX 02 <br /> France
            </a>
            <address>
              <a href="tel:+33-(0)4-26-73-40-00" target="_blank" rel="nofollow noreferrer">
                +33 (0)4 26 73 40 00
              </a>
            </address>
          </section>

          <section className="footer-section-2">
            <Link to="/MentionsLegales">Mentions légales</Link>
            <Link to="/Donnees_personnelles">Données personnelles</Link>
            <Link to="/Accessibilite">Accessibilité</Link>
            <Link to="#">Cookies</Link>
          </section>
        </div>
      </footer>
    </div>
  );
};
export default Cookies;