import "../assets/CSS_JS/Batiment.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MentionsLegales from "./Mentions_legales";
import Accessibilite from "./Accessibilite";
import Alimentation from "./Alimentation";
import Cookies from "./Cookies";
import Donnee_personnelles from "./Donnees_personnelles";
import Fabrication from "./Fabrication";
import NotFound from "./NotFound";

const Batiment = () => {
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
                    <li className="nav-item text-uppercase"><Link className="nav-link active" aria-current="page" to="/home">home</Link></li>
                    <li className="nav-item text-uppercase"><Link className="nav-link" to="#">Batiment</Link></li>
                    <li className="nav-item text-uppercase"><Link className="nav-link" to="/Services">Services</Link></li>
                    <li className="nav-item text-uppercase"><Link className="nav-link" to="/Fabrication">Fabrication</Link></li>
                    <li className="nav-item text-uppercase"><Link className="nav-link" to="/Alimentation">Alimentation</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

            <main>
                {/* Mise en page de l'image et du texte de présentation */}
                <img className="image-presentation" src="/Contenu/télécharger/images/banner.jpg" alt=" représentation John DOE travaillant sur son ordinateur"></img>
                <div className="presentation">
                  <h1 className="text-presentation">Mon offre de services</h1>
                  <p className="text-presentation">Voici les prestations sur lesquels je peux internvenir</p>
                  <hr></hr>
                </div>
                {/* Mise en page des 3 Cards Bootstrap de façon ordonnées */}
                <div className="row justify-content-center section-espacement">
                  <section className="col-12 col-md-4 mb-4">
                    <div className="card card-hover">
                      {/* Mise page des picctogrammes */}
                      <img className="card-img-top" src="/Contenu/télécharger/images/pinceau.png" alt="Icone de pinceau représentant UX Design" style={{width: "50px", height: "50px", objectFit: "contain", marginleft: "45%", margintop: "10%", marginbottom: "10%"}}></img>
                      <div className="card-body">
                        {/* Mise en gras du titre */}
                        <h5 className="card-title" style={{fontweight: "bold"}}>UX Design</h5>
                        <p className="card-text">L'Ux Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible</p>
                      </div>
                    </div>
                  </section>
            
                  <section className="col-12 col-md-4 mb-4">
                    <div className="card card-hover">
                      {/* Mise page des picctogrammes */}
                      <img className="card-img-top" src="/Contenu/télécharger/images/developpeur.png" alt="Icone développeur" style={{width: "50px", height: "50px", objectfit: "contain", marginleft: "45%", margintop: "10%", marginbottom: "10%"}}></img>
                      <div className="card-body">
                        {/* Mise en gras du titre */}
                        <h5 className="card-title" style={{fontweight: "bold,"}}>Développement web</h5>
                        <p className="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages et programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (bootstrap, React, Angular, etc.)</p>
                     </div>
                  </div>
                  </section>
            
                  <section className="col-12 col-md-4 mb-4">
                    <div className="card card-hover">
                      {/* Mise page des picctogrammes */}
                      <img className="card-img-top" src="/Contenu/télécharger/images/loupe.png" alt="Icone Référencement" style={{width: "50px", height: "50px", objectfit: "contain", marginleft: "45%", margintop: "10%", marginbottom: "10%"}}></img>
                      <div className="card-body">
                        {/* Mise en gras du titre */}
                        <h5 className="card-title" style={{fontweight: "bold"}}>Référencement</h5>
                        <p className="card-text">L'Ux Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible</p>
                      </div>
                    </div>
                  </section>
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
                <Route path="/Mentions_Legales" element={<MentionsLegales/>}></Route>
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

export default Batiment;