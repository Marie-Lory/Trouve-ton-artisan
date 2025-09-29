import "../assets/CSS_JS/Mentions-legales.css";
import { Routes, Route, Link } from "react-router-dom";
import Bâtiment from "./pages/Bâtiment";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Accessibilité from "./Accessibilité";
import Alimentation from "./Alimentation";
import Cookies from "./Cookies";
import Donnée_personnelles from "./Données_personnelles";
import Fabrication from "./Fabrication";
import NotFound from "./NotFound";

const Mentions_legales = () => {
    return (
        <div style={{fontfamily: '"Nunito-Sans", sans-serif'}}>
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
                        <li className="nav-item text-uppercase"><Link className="nav-link active" aria-current="page" to="/Home">home</Link></li>
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
                {/* Mise en page de la présentation  */}
                <div classeName="presentation">
                  <h1 classeName="text-presentation">Mentions légales</h1>
                  <hr></hr>
                </div>

                {/* Mise en page du contenu déroulant grâce aux classe d'accordéons de Bootstrap */}
                <div classeName="accordéon-position">
                  <div classeName="accordion" id="accordionExample">
                    <section classeName="accordion-item">
                      {/* Espace : Editeur du site */}
                      <h2 classeName="accordion-header">
                        <button classeName="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Editeur du site
                        </button>
                      </h2>
            
                      {/* Espace : John Doe */}
                      <div id="collapseOne" classeName="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div classeName="accordion-body">
                          <h3>John Doe</h3>
                          <div><img classeName="taille-pictogramme" src="/Contenu/télécharger/images/carte.png" alt="Icone d'une carte de localisation"> 40 rue Laure Diebold</img></div>
                          <div><img classeName="taille-pictogramme" src="/Contenu/télécharger/images/localisateur.png" alt="Icone du localisateur"> 69009 Lyon, France</img></div>
                          <div><img classeName="taille-pictogramme" src="/Contenu/télécharger/images/telephone-intelligent.png" alt="Icone d'un téléphone"> 10 20 30 40 50</img></div>
                          <div><img classeName="taille-pictogramme" src="/Contenu/télécharger/images/adresse-email.png" alt="Icone d'une envellope mail"> john.doe@gmail.com</img></div>
                        </div>
                      </div>
                    </section>
                    <section classeName="accordion-item">
                      {/* Espace : Hébergeur */}
                      <h2 classeName="accordion-header">
                        <button classeName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Hébergeur
                        </button>
                      </h2>
                      <div id="collapseTwo" classeName="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div classeName="accordion-body">
                          <h3 classeName="gras-h3">alwaysdata</h3>
                          <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                          <a href="www.alwaysdata.com"><img classeName="taille-pictogramme" src="/Contenu/télécharger/images//globe.png" alt="Icone du globe représentant le web"></img><span classeName="espacement-text-pictogramme">www.always.com</span></a>
                        </div>
                      </div>
                    </section>
                    {/* Espace : Crédits */}
                    <section classeName="accordion-item">
                      <h2 classeName="accordion-header">
                        <button classeName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Crédits
                        </button>
                      </h2>
                      <div id="collapseThree" classeName="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div classeName="accordion-body">
                          <h3 classeName="gras-h3">Crédits</h3>
                          <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a></p>
                          <p>Les images utiliséessur ce site snt libre de droits et ont été obtenu sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                          <p>La flavicon de ce site a été fournie par <a href="https://www.flaticon.com/">John does Icons erstellt von Freepik - Flaticon</a></p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
            </main>

            <footer>
                {/* Séparation en plusieurs parties du footer */}
                <div className="row justify-content-center">
                  <section className="footer-section-1 col-12 col-md-4 mb-4">
                    <h4>John Doe</h4>
                    <a href="https://www.google.com/maps?&ty=18&q=40%20rue%20Laure%20Diebold%20%2069009%20Lyon%2C%20France&mb=45.782462~4.790229~45.77473~4.807968&cardbg=%23F98745&dt=1750716000000&tt=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&tsts1=%2526ty%253D18%2526q%253D40%252520rue%252520Laure%252520Diebold%252520%25252069009%252520Lyon%25252C%252520France%2526mb%253D45.782462~4.790229~45.77473~4.807968%2526cardbg%253D%252523F98745%2526dt%253D1750716000000&tstt1=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&cp=45.778596~4.794836&lvl=16.32&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027" target="_blank" rel="nofollow noreferrer">40 rue Laure Diebold <br /> 69009 Lyon, France</a>
                    <address>
                      <a href="mailto:john.doe@gmail.com" target="_blank" rel="nofollow noreferrer">john.doe@gmail.com</a>
                      <a href="tel:10-20-30-40-50" target="_blank" rel="nofollow noreferrer">10 20 30 40 50</a>
                    </address>
            
                    {/* Mise en page des icones ainsi que du changement de couleur au survol */}
                    <a className="Icone-image-position" href="https://github.com/" target="_blank" rel="nofollow noreferrer">
                    <img src="/Contenu/télécharger/images/github.png" alt="Icone Github" className="icon"></img>
                    <img src="/Contenu/télécharger/images/github-Hover.png" alt="Icone Github blanc au survol" className="icon-hover"></img>
                    </a>
            
                    <a className="Icone-image-position" href="https://x.com/" target="_blank" rel="nofollow noreferrer">
                    <img src="/Contenu/télécharger/images/twitter.png" alt="Icone Twitter" className="icon"></img>
                    <img src="/Contenu/télécharger/images/twitter-Hover.png" alt="Icone Twitter blanc au survol" className="icon-hover"></img>
                    </a>
            
                    <a className="Icone-image-position" href="https://www.linkedin.com/login" target="_blank" rel="nofollow noreferrer">
                    <img src="/Contenu/télécharger/images/logo-linkedin.png" alt="Icone linkedin" className="icon"></img>
                    <img src="/Contenu/télécharger/images/logo-linkedin-Hover.png" alt="Icone linkedin blanc au survol" className="icon-hover"></img>
                    </a>
                  </section>
            
                  <section className="footer-section-2 col-12 col-md-4 mb-4">
                    <h4>Liens utiles</h4>
                    <Link to="/Home">Acceuil</Link>
                    <Link to="/Service">Services</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Contact">Me contacter</Link>
                    <Link to="#">Mentions légales</Link>
                    
                  </section>
            
                  <section className="footer-section-3 col-12 col-md-4 mb-4">
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
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Bâtiment" element={<Bâtiment/>}></Route>
                <Route path="/Services" element={<Services/>}></Route>
                <Route path="/Accessibilité" element={<Accessibilité/>}></Route>
                <Route path="/Alimentation" element={<Alimentation/>}></Route>
                <Route path="/Cookies" element={<Cookies/>}></Route>
                <Route path="/Données_personnelles" element={<Donnée_personnelles/>}></Route>
                <Route path="/Fabrication" element={<Fabrication/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

       </div>
    )
}

export default Mentions_legales;