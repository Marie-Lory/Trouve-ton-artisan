import 'dotenv/config'; // ✅ Charge automatiquement les variables du fichier .env
import express from "express";
import cors from "cors";
import router from "./routes/ArtisansRoutes.js"; // adapte si ton dossier diffère
import sequelize from "./config/db.js"; // ton fichier de connexion MySQL/Sequelize

const app = express();

// Middleware
app.use(cors());
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
app.listen(PORT, () => {
  console.log(`✅ Backend API sur http://localhost:${PORT}`);
});

export default app;