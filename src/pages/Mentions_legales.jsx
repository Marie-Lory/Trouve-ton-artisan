import "../assets/CSS_JS/Mentions-legales.css";
import { Routes, Route, Link } from "react-router-dom";
import Batiment from "./Batiment";
import Services from "./Services";
import Home from "./Home";
import Accessibilite from "./Accessibilite";
import Alimentation from "./Alimentation";
import Cookies from "./Cookies";
import Donnee_personnelles from "./Donnees_personnelles";
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
                        <li className="nav-item text-uppercase"><Link className="nav-link" to="/Batiment">Batiment</Link></li>
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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Batiment" element={<Batiment/>}></Route>
                <Route path="/Services" element={<Services/>}></Route>
                <Route path="/Accessibilite" element={<Accessibilite/>}></Route>
                <Route path="/Alimentation" element={<Alimentation/>}></Route>
                <Route path="/Cookies" element={<Cookies/>}></Route>
                <Route path="/Données_personnelles" element={<Donnee_personnelles/>}></Route>
                <Route path="/Fabrication" element={<Fabrication/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

       </div>
    )
}

export default Mentions_legales;