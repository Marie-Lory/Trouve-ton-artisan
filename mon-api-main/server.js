import 'dotenv/config';
import express from "express";
import cors from "cors";
import router from "./routes/ArtisansRoutes.js";
import sequelize from "./config/db.js";

const app = express();

// ✅ CORS ouvert (pour debug et Render)
app.use(cors({
  origin: "*",
}));

app.use(express.json());

// === ✅ ROUTES ===
app.use("/api/Artisans", router);

// ✅ Route test santé Render
app.get("/", (req, res) => {
  res.json({ status: "✅ API Online" });
});

// ✅ Connexion MySQL
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion MySQL réussie !");
  } catch (err) {
    console.error("❌ Connexion MySQL échouée :", err);
  }
})();

// ✅ Serveur Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 API opérationnelle sur port ${PORT}`)
);

export default app;
