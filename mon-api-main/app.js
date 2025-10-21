// ✅ app.js — version finale
import 'dotenv/config';
import express from "express";
import cors from "cors";
import router from "./routes/ArtisansRoutes.js"; // ⚙️ assure-toi que ce fichier exporte `router`
import sequelize from "./config/db.js";

const app = express();

// ========================================
// 🛡️ CONFIGURATION CORS
// ========================================
const allowedOrigins = [
  "http://localhost:5173", // pour ton développement local
  "https://trouve-ton-artisan-pi.vercel.app", // ton frontend en ligne (Vercel)
  "https://trouve-ton-artisan-1-a584.onrender.com", // ton backend Render
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Autorise les requêtes internes (Postman, backend)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`❌ Requête bloquée par CORS depuis : ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ========================================
// ⚙️ MIDDLEWARES GLOBAUX
// ========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// 📡 ROUTES PRINCIPALES
// ========================================
app.use("/api/Artisans", router);

// ========================================
// 🧩 TEST DE CONNEXION MYSQL
// ========================================
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion MySQL réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  }
})();

// ========================================
// 🚀 LANCEMENT DU SERVEUR
// ========================================
const PORT = process.env.PORT || 5000;

// ⚠️ Render nécessite de se binder sur "0.0.0.0"
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Serveur lancé et accessible sur le port ${PORT}`);
  console.log("🌍 API disponible sur /api/Artisans");
});

export default app;
