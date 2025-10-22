import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Artisan = sequelize.define("artisanentreprise", {
  id_artisan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  specialite: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  note: {
    type: DataTypes.FLOAT(3,1),
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  a_propos: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  categorie: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false,
  tableName: "artisanentreprise",
});

export default Artisan;
