// ✅ server.js - version stable Render + CORS
import 'dotenv/config';
import express from "express";
import cors from "cors";
import router from "./routes/ArtisansRoutes.js";
import sequelize from "./config/db.js";

const app = express();

// ✅ CORS robuste et global (avant les routes)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(cors({
  origin: [
    "mysql://root:znRZDsiadOadgzPbHWLFNmpiZDYuGAoq@metro.proxy.rlwy.net:46073/railway",
    "https://trouve-ton-artisan-pi.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());

// ✅ Route principale
app.use("/api/Artisans", router);

// ✅ Test de connexion MySQL
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion MySQL réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  }
})();

// ✅ Vérification santé pour Render
app.get("/", (req, res) => {
  res.send("✅ API Trouve Ton Artisan en ligne !");
});

// 🚀 Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Serveur lancé sur le port ${PORT} (Render prêt)`);
});

export default app;
