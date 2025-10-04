import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";

// Récupérer le __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import des routes
import AlimentationRoutes from "./routes/AlimentationRoutes.js";
import BatimentRoutes from "./routes/BatimentRoutes.js";
import FabricationRoutes from "./routes/FabricationRoutes.js";
import ServicesRoutes from "./routes/ServicesRoutes.js";

const app = express();

// Connexion MySQL
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",       // adapte selon ton installation
  password: "",       // idem
  database: "trouve-ton-artisan"
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes API
app.use("/api/Alimentation", AlimentationRoutes);
app.use("/api/Batiment", BatimentRoutes);
app.use("/api/Fabrication", FabricationRoutes);
app.use("/api/Services", ServicesRoutes);

// Route test : liste tous les artisans
app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM artisanentreprise");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Dossier public (statique)
app.use(express.static(path.join(__dirname, "public")));

// Middleware d’erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});

app.listen(5000, () => {
  console.log("✅ Backend API sur http://localhost:5000");
});