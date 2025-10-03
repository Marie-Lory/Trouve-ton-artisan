import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // on importe bien sequelize ici

const Services = sequelize.define(
  "Services", {
  id_artisan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Spécialité: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Note: {
    type: DataTypes.FLOAT, // accepte que des nombres entiers et décimaux
    allowNull: false,
    validate: {
      isFloat: {
        msg: "La note doit être un nombre ou un nombre à virgule",
      },
      min: 0,
      max: 5, // par exemple si tu veux une note entre 0 et 5
    },
  },
  Ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  A_propos: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "L'email doit être valide",
      },
    },
  },
  Site_Web: {
    type: DataTypes.STRING,
    allowNull: true,   // facultatif
  },
  Top: {
    type: DataTypes.BOOLEAN, // TRUE / FALSE
    defaultValue: false,
  },
}, {
  tableName: "artisanentreprise",
  timestamps: true,
});

export default Services;