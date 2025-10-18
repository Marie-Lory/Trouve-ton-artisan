import "../assets/CSS_JS/Home.css";
import "../assets/CSS_JS/global.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // <-- Ajout FaStarHalfAlt
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // ✅ Import du module SEO

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${API_URL}/Artisans/top`)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Erreur API (${res.status}): ${text}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("⚠️ Réponse inattendue :", text);
          throw new Error("La réponse n'est pas du JSON valide.");
        }

        return res.json();
      })
      .then((data) => {
        console.log("✅ Réponse du serveur :", data);
        setTopArtisans(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("❌ Erreur de chargement :", err));
  }, []);

  // Fonction pour générer les étoiles
  const renderStars = (note, artisanId) => {
  const rating = Math.max(0, Math.min(5, parseFloat(note) || 0)); // sécurisé entre 0 et 5
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const key = `${artisanId}-${i}`;
    if (rating >= i) {
      // étoile pleine
      stars.push(<FaStar key={key} className="star full" />);
    } else if (rating >= i - 0.5) {
      // demi-étoile
      stars.push(<FaStarHalfAlt key={key} className="star half" />);
    } else {
      // étoile vide
      stars.push(<FaRegStar key={key} className="star empty" />);
    }
  }

  return <span className="stars-wrapper">{stars}</span>;
};

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
      const res = await fetch("http://localhost:5000/api/Artisans");
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
            content="Trouve ton artisan est une plateforme qui vous aide à trouver des artisans fiables dans les domaines : bâtiment, alimentation, services et fabrication. Consultez leurs notes et contactez-les directement."
          />
          <meta
            name="keywords"
            content="artisan, trouver artisan, bâtiment, alimentation, fabrication, services, professionnels, France"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      <header>
        <nav className="navbar navbar-expand-md custom-navbar">
          <div className="container-fluid nav-content">
            {/* Logo à gauche */}
            <Link className="navbar-brand" to="#">
              <img src="/src/assets/img/Logo.png" alt="Logo du site Trouve ton artisan" />
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
          <h1 className="titre-principal">Comment trouver son artisan ?</h1>

          <h2 className="etape etape1">
            Étape 1 : <span>Choisir la catégorie d'artisanat dans le menu (header)</span>
          </h2>
          <h2 className="etape etape2">
            Étape 2 : <span>Choisir son artisan/entreprise pour avoir ses informations sur son nom, sa spécialité, sa note et sa localisation</span>
          </h2>
          <h2 className="etape etape3">
            Étape 3 : <span>Le contacter via le formulaire de contact présent sur sa page</span>
          </h2>
          <h2 className="etape etape4">
            Étape 4 : <span>Une réponse sera apportée sous 48H</span>
          </h2>
        </div>
        <div>
          <h2 className="classement-artisans">
            Les 3 artisans/entreprises du mois sont :
          </h2>
          <ul>
            {topArtisans.map((artisan) => (
              <li key={artisan.Id_Artisan ?? artisan.id}>
                <strong>{artisan.Nom ?? artisan.nom}</strong> — {artisan.Specialite ?? artisan.specialite} ({artisan.Ville ?? artisan.ville})<br />
                {renderStars(artisan.Note ?? artisan.note, artisan.Id_Artisan ?? artisan.id)}
              </li>
            ))}
          </ul>
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
            <Link to="/Cookies">Cookies</Link>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Home;