import "../assets/CSS_JS/Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-md custom-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#"><img src="/src/assets/img/Logo.png" alt="Logo du site Trouve ton artisan"></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li><Link className="nav-link" to="/Batiment">Bâtiment</Link></li>
                <li><Link className="nav-link" to="/Services">Services</Link></li>
                <li><Link className="nav-link" to="/Fabrication">Fabrication</Link></li>
                <li><Link className="nav-link" to="/Alimentaion">Alimentation</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Section présentation */}
        <div className="presentation">
          <h1 className="titre-principal">Comment trouver son artisan ?</h1>

          <h2 className="etape etape1">
            Étape 1 : <span>Choisir la catégorie d'artisanat dans le menu (header)</span>
          </h2>
          <h2 className="etape etape2">
            Étape 2 : <span>Choisir son artisan/entreprise pour avoir ses informations sur son nom, sa spécialité, sa note (sur 5 étoiles) et sa localisation</span>
          </h2>
          <h2 className="etape etape3">
            Étape 3 : <span>Le contacter via le formulaire de contact qui se trouve sur la page de chaque artisan/entreprise</span>
          </h2>
          <h2 className="etape etape4">
            Étape 4 : <span>Une réponse sera apportée sous 48H</span>
          </h2>
        </div>
      </main>

      {/* Pied de page */}
      <footer>
        <div className="footer-container">
          <section className="footer-section-1">
            <a href="https://www.bing.com/maps?&cp=45.740688~4.819364&lvl=16.32"
              target="_blank" rel="nofollow noreferrer">
              Lyon <br /> 101 cours Charlemagne <br /> CS 20033 <br /> 69269 LYON CEDEX 02 <br /> France
            </a>
            <address>
              <a href="tel:+33-(0)4-26-73-40-00" target="_blank" rel="nofollow noreferrer">
                +33 (0)4 26 73 40 00
              </a>
            </address>
          </section>

          {/* Liens du footer horizontalement */}
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