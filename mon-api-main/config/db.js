// ✅ config/db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // charge ton .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false,
  }
);

// ✅ Teste la connexion directement ici (utile sur Render)
try {
  await sequelize.authenticate();
  console.log("✅ Connexion MySQL réussie !");
} catch (error) {
  console.error("❌ Erreur de connexion MySQL :", error);
  process.exit(1); // stoppe le serveur en cas d'erreur
}

export default sequelize;

