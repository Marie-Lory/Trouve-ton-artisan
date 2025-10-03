import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // on importe bien sequelize ici

const Batiment = sequelize.define(
  "Batiment",
  {
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
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: { msg: "La note doit être un nombre ou un nombre à virgule" },
        min: 0,
        max: 5,
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
        isEmail: { msg: "L'email doit être valide" },
      },
    },
    Site_Web: {
      type: DataTypes.STRING,
      allowNull: true,   // facultatif
      validate: {
        isUrl: {
          msg: "Le site web doit être une URL valide",
        },
      },
    },
    Top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "artisanentreprise",
    timestamps: true,
  }
);

export default Batiment;