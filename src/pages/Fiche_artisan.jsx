import "../assets/CSS_JS/Fiche_artisan.css";
import "../assets/CSS_JS/global.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // ✅ Import du module SEO

const Fiche_artisan = () => {
  const { id } = useParams(); // récupère l'ID de l'artisan depuis l'URL
  const [artisan, setArtisan] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Charger les infos de l’artisan
  useEffect(() => {
    fetch(`http://localhost:5000/api/Artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error("Erreur lors du chargement de l’artisan :", err));
  }, [id]);

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

  // Fonction pour générer les étoiles (avec demi-étoile)
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

  // Formulaire de contact
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
   e.preventDefault();

    fetch(`http://localhost:5000/api/Artisans/${id}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
       if (!res.ok) throw new Error("Erreur lors de l’envoi");
       return res.json();
      })
      .then((data) => {
        alert(`✅ ${data.message}`);
        setFormData({ nom: "", email: "", objet: "", message: "" });
      })
      .catch(() => alert("❌ Impossible d’envoyer le message."));
  };

  if (!artisan) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Chargement...</h2>;
  }

  return (
    <div className="App">
      {/* ✅ Balises SEO dynamiques */}
        <Helmet>
          <title>Trouve ton artisan - Trouvez un professionnel de qualité</title>
          <meta
            name="description"
            content="Cette page affiche plus de détaille sur l'artisant et ou entreprise que vous avez selectionné dans la page de métier ou dans la barre de recherche. "
          />
          <meta
            name="keywords"
            content="artisan, trouver artisan, bâtiment, alimentation, fabrication, services, professionnels, France"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      {/* ====== HEADER ====== */}
      <header>
        <nav className="navbar navbar-expand-md custom-navbar">
          <div className="container-fluid nav-content">
            <Link className="navbar-brand" to="/">
              <img src="/public/img/Logo.png" alt="Logo du site Trouve ton artisan" />
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
                <li className="nav-item"><Link className="nav-link" to="/Batiment">Bâtiment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Fabrication">Fabrication</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Alimentation">Alimentation</Link></li>
              </ul>

              {/* ✅ Barre de recherche */}
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

      {/* ====== CONTENU ====== */}
      <main>
        <div className="fiche-artisan">
          <h1 className="artisan-nom">{artisan.nom}</h1>

          <img src="/public/img/Logo.png" alt={artisan.nom} className="artisan-img" />

          <div className="artisan-infos">
            <div className="stars">{renderStars(artisan.note)}</div>
            <p><strong>Spécialité :</strong> {artisan.specialite}</p>
            <p><strong>Ville :</strong> {artisan.ville}</p>
            {artisan.site_web && (
              <p>
                <strong>Site web :</strong>{" "}
                <a href={artisan.site_web} target="_blank" rel="noreferrer">
                  {artisan.site_web}
                </a>
              </p>
            )}
            <h3>À propos</h3>
            <p className="artisan-description">{artisan.a_propos}</p>
          </div>

          {/* ====== FORMULAIRE DE CONTACT ====== */}
          <div className="contact-form-container">
            <h2>Contacter {artisan.nom}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="objet"
                placeholder="Objet"
                value={formData.objet}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </main>

      {/* ====== FOOTER ====== */}
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
            <Link to="/Mentions_legales">Mentions légales</Link>
            <Link to="/Donnees_personnelles">Données personnelles</Link>
            <Link to="/Accessibilite">Accessibilité</Link>
            <Link to="/Cookies">Cookies</Link>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Fiche_artisan;