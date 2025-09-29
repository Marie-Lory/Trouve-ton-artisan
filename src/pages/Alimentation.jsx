import "../assets/CSS_JS/Alimentation.css";
import { Routes, Route, Link } from "react-router-dom";
import Bâtiment from "./pages/Bâtiment";
import Services from "./pages/Services";
import MentionsLegales from "./pages/Mentions_legales";
import Accessibilité from "./Accessibilité";
import Home from "./Home";
import Cookies from "./Cookies";
import Donnée_personnelles from "./Données_personnelles";
import Fabrication from "./Fabrication";
import NotFound from "./NotFound";

const Alimentation = () => {
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
                <li className="nav-item text-uppercase"><Link className="nav-link" to="/Bâtiment">Bâtiment</Link></li>
                <li className="nav-item text-uppercase"><Link className="nav-link" to="#">Services</Link></li>
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
          <img className="image-presentation" src="/Contenu/télécharger/images/hero-bg.jpg" alt="représentation John DOE travaillant sur son ordinateur"></img>
            <h1 className="text-presentation-h1">Bonjour, je suis John DOE</h1>
            <h2 className="text-presentation-h2">Développeur web full stack</h2>
            {/* Bouton permettant d'ouvrir le modal */}
            <button id="openModalBtn" type="button" className="block-border">En savoir plus</button>
        </div>
        {/* Malheuresement je n'ai pas réussi à faire une mise en page responsive pour la div car lorsque je le fais les sections ne sont plus aligné horizontalement car je ne pouvais pas utilisé flexbox et les jauges disparaissent et je ne sais pas pourquoi */}
        <div className="div-espacement container my-4">
          <section className="col-12 col-md-6 mb-4 section-espacement">
            <h3>A propos</h3>
            <hr className="hr-position-gauche"></hr>
            <img src="/Contenu/télécharger/images/john-doe-about.jpg" alt="John DOE de profil qui est concentré"></img>
            {/* Espacement verticale entre l'image et le text */}
            <p className="text-espacement-image">
              J'ai 25 ans et je suis actuellement à la recherche d'un travail en alternance.
            </p>
          </section>

          <section className="col-12 col-md-6 mb-4 section-espacement">
            <h3>Mes compétences</h3>
            <hr className="hr-position-droite"></hr>
            <p className="text-espacement-jauge">HTLM 5 90%</p>
            {/* Mise en page des jauges colorés */}
            <div className="jauge-container">
              <div className="jauge-rouge-remplie"></div>
            </div>

            <p className="text-espacement-jauge">CSS3 80%</p>
            <div className="jauge-container">
              <div className="jauge-cyan-remplie"></div>
            </div>

            <p className="text-espacement-jauge">JAVASCRIPT 70%</p>
            <div className="jauge-container">
              <div className="jauge-jaune-remplie"></div>
            </div>

            <p className="text-espacement-jauge">PHP 60%</p>
            <div className="jauge-container">
              <div className="jauge-verte-remplie"></div>
            </div>

            <p className="text-espacement-jauge">REACT 50%</p>
            <div className="jauge-container">
              <div className="jauge-bleue-remplie"></div>
            </div>

          </section>
        </div>
      </main>
      <footer>
        <div>
          {/* Séparation en plusieurs parties du footer */}
          <section className="footer-section-1">
            <h4>John Doe</h4>
            <a href="https://www.google.com/maps?&ty=18&q=40%20rue%20Laure%20Diebold%20%2069009%20Lyon%2C%20France&mb=45.782462~4.790229~45.77473~4.807968&cardbg=%23F98745&dt=1750716000000&tt=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&tsts1=%2526ty%253D18%2526q%253D40%252520rue%252520Laure%252520Deboid%252520%25252069009%252520Lyon%25252C%252520France%2526mb%253D45.782462~4.790229~45.77473~4.807968%2526cardbg%253D%252523F98745%2526dt%253D1750716000000&tstt1=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&cp=45.778596~4.794836&lvl=16.32&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027" target="_blank" rel="nofollow noreferrer" >40 rue Laure Deboid <br /> 69009 Lyon, France</a>
            <address>
              <a href="mailto:john.doe@gmail.com" target="_blank" rel="nofollow noreferrer">john.doe@gmail.com</a>
              <a href="tel:10-20-30-40-50" target="_blank" rel="nofollow noreferrer">10 20 30 40 50</a>
            </address>

            {/* Mise en page des icones ainsi que du changement de couleur au survol */}
            <a className="Icone-image-position" href="https://github.com/" rel="nofollow noreferrer" target="_blank">
            <img src="/Contenu/télécharger/images/github.png" alt="Icone Github " rel="nofollow noreferrer" className="icon"></img>
            <img src="/Contenu/télécharger/images/github-Hover.png" alt="Icone Github blanc au survol" rel="nofollow noreferrer" className="icon-hover"></img>
            </a>

            <a className="Icone-image-position" href="https://x.com/" target="_blank" rel="nofollow noreferrer">
            <img src="/Contenu/télécharger/images/twitter.png" alt="Icone Twitter" rel="nofollow noreferrer" className="icon"></img>
            <img src="/Contenu/télécharger/images/twitter-Hover.png" alt="Icone Twitter blanc au survol" rel="nofollow noreferrer" className="icon-hover"></img>
            </a>

            <a className="Icone-image-position" href="https://www.linkedin.com/login" target="_blank" rel="nofollow noreferrer">
            <img src="/Contenu/télécharger/images/logo-linkedin.png" alt="Icone linkedin" className="icon"></img>
            <img src="/Contenu/télécharger/images/logo-linkedin-Hover.png" alt="Icone linkedin blanc au survol" className="icon-hover"></img>
            </a>
          </section>

          <section className="footer-section-2">
            <h4>Liens utiles</h4>
            <Link to="/">Acceuil</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Me contacter</Link>
            <Link to="/MentionsLegales">Mentions légales</Link>
          </section>

          <section className="footer-section-3">
            <h4>Mes dernières réalisations</h4>
            <Link to="/Portfolio">Fresh Food</Link>
            <Link to="/Portfolio">Restaurant Akira</Link>
            <Link to="/Portfolio">Espace Bien-être SEO</Link>
            <Link to="/Portfolio">création d'une API</Link>
          </section>
        </div>
      </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

      <Routes>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Bâtiment" element={<Bâtiment/>}></Route>
        <Route path="/Mentions_Legales" element={<MentionsLegales/>}></Route>
        <Route path="/Accessibilité" element={<Accessibilité/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Cookies" element={<Cookies/>}></Route>
        <Route path="/Données_personnelles" element={<Donnée_personnelles/>}></Route>
        <Route path="/Fabrication" element={<Fabrication/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Alimentation;