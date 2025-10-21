import 'dotenv/config'; // ✅ Charge automatiquement les variables du fichier .env
import express from "express";
import cors from "cors";
import router from "./routes/ArtisansRoutes.js"; // adapte si ton dossier diffère
import sequelize from "./config/db.js"; // ton fichier de connexion MySQL/Sequelize

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Configuration CORS explicite
const allowedOrigins = [
  "http://localhost:5173", // ton environnement de développement local
  "https://trouve-ton-artisan-pi.vercel.app" // ton frontend Vercel
];

app.use(cors({
  origin: function (origin, callback) {
    // Autorise les requêtes sans origine (comme Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json());

// Routes principales
app.use("/api/Artisans", router);

// Test de connexion à MySQL
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion MySQL réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  }
})();

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});

export default app;
