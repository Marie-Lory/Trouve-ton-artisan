import "../assets/CSS_JS/Alimentation.css";
import "../assets/CSS_JS/global.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Alimentation = () => {
  const [artisans, setArtisans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Charger les artisans ayant la catégorie "Alimentation"
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/Artisans?categorie=Alimentation")
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const normalized = Array.isArray(data)
          ? data.map((item) => (item.dataValues ? item.dataValues : item))
          : [];
        const filtered = normalized.filter((a) => {
          const cat = (a.categorie ?? a.Categorie ?? "").toString().trim().toLowerCase();
          return cat === "alimentation";
        });
        setArtisans(filtered);
      })
      .catch((err) => {
        console.error("Erreur de chargement :", err);
        setArtisans([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Affichage des étoiles
  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(note)) {
        stars.push(<FaStar key={i} color="#82b864" />);
      } else if (i - note < 1 && i > note) {
        stars.push(<FaStarHalfAlt key={i} color="#82b864" />);
      } else {
        stars.push(<FaRegStar key={i} color="#ccc" />);
      }
    }
    return stars;
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
      {/* ✅ SEO */}
      <Helmet>
        <title>Trouve ton artisan - Artisans du domaine Alimentation</title>
        <meta
          name="description"
          content="Découvrez les meilleurs artisans du domaine de l'Alimentation : boulangers, pâtissiers, traiteurs et plus encore. Trouvez un professionnel près de chez vous."
        />
        <meta
          name="keywords"
          content="artisan alimentation, boulanger, pâtissier, traiteur, cuisine, trouver artisan, France"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ===== HEADER ===== */}
      <header>
        <nav className="navbar navbar-expand-md custom-navbar">
          <div className="container-fluid nav-content">
            <Link className="navbar-brand" to="/">
              <img
                src="/src/assets/img/Logo.png"
                alt="Logo du site Trouve ton artisan"
              />
            </Link>

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

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/Batiment">
                    Bâtiment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fabrication">
                    Fabrication
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Alimentation">
                    Alimentation
                  </Link>
                </li>
              </ul>

              {/* ✅ Barre de recherche universelle */}
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

      {/* ===== MAIN ===== */}
      <main>
        <h1 className="titre-principal">Artisans du domaine Alimentation</h1>
        {loading ? (
          <p>Chargement…</p>
        ) : artisans.length === 0 ? (
          <p>Aucun artisan trouvé pour cette catégorie.</p>
        ) : (
          <div className="artisans-container">
            {artisans.map((artisan) => (
              <Link
                to={`/Fiche_artisan/${artisan.id_artisan ?? artisan.id}`}
                key={artisan.id_artisan ?? artisan.id}
              >
                <article className="artisan-card">
                  <h3>{artisan.nom}</h3>
                  <p>{artisan.specialite}</p>
                  <p>{artisan.ville}</p>
                  <div className="stars">{renderStars(Number(artisan.note))}</div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-container">
          <section>
            <a
              href="https://www.bing.com/maps?&cp=45.740688~4.819364&lvl=16.32"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Lyon <br /> 101 cours Charlemagne <br /> CS 20033 <br /> 69269 LYON
              CEDEX 02 <br /> France
            </a>
            <address>
              <a
                href="tel:+33-(0)4-26-73-40-00"
                target="_blank"
                rel="nofollow noreferrer"
              >
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

export default Alimentation;