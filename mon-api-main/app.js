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
  origin: [
    "http://localhost:5173", // ton frontend local
    "https://trouve-ton-artisan-pi.vercel.app" // ton frontend Vercel
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Permet de répondre aux prérequis de CORS (préflight)
app.options("*", cors());

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
