import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MySQL
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",       // adapte selon ton installation
  password: "",       // idem
  database: "trouve_ton_artisan"
});

// Route API artisans
app.get("/api/artisans", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM artisanentreprise");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend API sur http://localhost:5000");
});