// config/db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("trouve-ton-artisan", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // désactive les logs SQL
});

try {
  await sequelize.authenticate();
  console.log("✅ Connexion MySQL réussie !");
} catch (error) {
  console.error("❌ Impossible de se connecter :", error);
}

export default sequelize;