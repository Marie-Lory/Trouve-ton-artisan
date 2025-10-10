import "../assets/CSS_JS/Home.css";
import { Routes, Route, Link } from "react-router-dom";
import Batiment from "./Batiment";
import Services from "./Services";
import MentionsLegales from "./Mentions_legales";
import Accessibilite from "./Accessibilite.jsx";
import Alimentation from "./Alimentation";
import Cookies from "./Cookies";
import Donnee_personnelles from "./Donnees_personnelles.jsx";
import Fabrication from "./Fabrication";
import NotFound from "./NotFound";

const Home = () => {
  return (
    <div className="App" style={{fontfamily: '"Nunito-Sans", sans-serif'}}>
        {/* La modale */}
        <div id="githubModal" className="modal">
            <div className="modal-content">
            <span className="close" id="closeModal">&times;</span>
            <h2>Profil GitHub</h2>
              <div id="profileInfo">
              {/* Les infos de votre profil seront insérées ici */}
            </div>
          </div>
        </div>
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">JOHN DOE</Link>
            {/* Bouton burger : visible sur petits écrans */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Menu collapsible : apparaissant en dessous de 768px */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-uppercase"><Link className="nav-link active" aria-current="page" to="#">home</Link></li>
                <li className="nav-item text-uppercase"><Link className="nav-link" to="/Batiment">Batiment</Link></li>
                <li className="nav-item text-uppercase"><Link className="nav-link" to="/Services">Services</Link></li>
                <li className="nav-item text-uppercase"><Link className="nav-link" to="/Fabrication">Fabrication</Link></li>
                <li className="nav-item text-uppercase"><Link className="nav-link" to="/Alimentaion">Alimentation</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* Mise en page de l'image et du texte de présentation */}
        <div className="presentation">
            <h1 className="text-presentation-h1">Comment trouver son artisan ?</h1>
            <h2 className="text-presentation-h2">Etape 1 : Choisir la catégorie d'artisanat dans le menu (header)</h2>
            <h2 className="text-presentation-h2">Etape 2 : Choisir son artisan/entreprise pour avoir ses informations sur son nom, sa spécialité, sa note (sur 5 étoiles) et sa localisation</h2>
            <h2 className="text-presentation-h2">Etape 3 : Le contacter via le formulaire de contact qui se trouve sur la page de chaque artisan/entreprise</h2>
            <h2 className="text-presentation-h2">Etape 4 : Une réponse sera apportée sous 48H</h2>
        </div>
        <div className="presentation">
            <h2 className="text-presentation-h2">Les 3 artisans/entreprises du mois sont :</h2>
            { <ul>
  
              </ul> }
        </div>
      </main>
      <footer>
        <div>
          {/* Séparation en plusieurs parties du footer */}
          <section className="footer-section-1">
            <a href="https://www.bing.com/maps?&cp=45.740688~4.819364&lvl=16.32&pi=0&v=2&sV=2&form=S00027" target="_blank" rel="nofollow noreferrer" >Lyon <br /> 101 cours Charlemagne <br /> CS 20033 <br /> 69269 LYON CEDEX 02 <br /> France</a>
            <address>
              <a href="tel:+33-(0)4-26-73-40-00" target="_blank" rel="nofollow noreferrer">+33 (0)4 26 73 40 00</a>
            </address>
          </section>

          <section className="footer-section-2">
            <Link to="/MentionsLegales">Mentions légales</Link>
            <Link to="/Donnees_personnelles">Donnees_personnelles</Link>
            <Link to="/Accessibilite">Accessibilite</Link>
            <Link to="/Cookies">Cookies</Link>
          </section>
        </div>
      </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>

      <Routes>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Batiment" element={<Batiment/>}></Route>
        <Route path="/Mentions_Legales" element={<MentionsLegales/>}></Route>
        <Route path="/Accessibilite" element={<Accessibilite/>}></Route>
        <Route path="/Alimentation" element={<Alimentation/>}></Route>
        <Route path="/Cookies" element={<Cookies/>}></Route>
        <Route path="/Données_personnelles" element={<Donnee_personnelles/>}></Route>
        <Route path="/Fabrication" element={<Fabrication/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Home;