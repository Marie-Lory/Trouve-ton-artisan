import "../assets/CSS_JS/Cookies.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Bâtiment from "./pages/Bâtiment";
import MentionsLegales from "./Mentions_legales";
import Accessibilité from "./Accessibilité";
import Alimentation from "./Alimentation";
import Services from "./Services";
import Donnée_personnelles from "./Données_personnelles";
import Fabrication from "./Fabrication";
import NotFound from "./NotFound";

const Cookies = () => {
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
                    <Link to="#">Services</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Contact">Me contacter</Link>
                    <Link to="/Mentions-legales">Mentions légales</Link>
                    
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
                <Route path="/Mentions_Legales" element={<MentionsLegales/>}></Route>
                <Route path="/Accessibilité" element={<Accessibilité/>}></Route>
                <Route path="/Alimentation" element={<Alimentation/>}></Route>
                <Route path="/Services" element={<Services/>}></Route>
                <Route path="/Données_personnelles" element={<Donnée_personnelles/>}></Route>
                <Route path="/Fabrication" element={<Fabrication/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        
        </div>
    )
}

export default Cookies;