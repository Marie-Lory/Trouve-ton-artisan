import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Services = sequelize.define(
  "Services",
  {
    id_artisan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Note: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: "La note doit être un nombre ou un nombre à virgule",
        },
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
        isEmail: {
          msg: "L'email doit être valide",
        },
      },
    },
    Site_Web: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrlOrEmpty(value) {
          // ✅ si vide ou null, ne rien valider
          if (value && value.trim() !== "" && !/^https?:\/\/.+/.test(value)) {
            throw new Error("Le site web doit être une URL valide");
          }
        },
      },
      set(value) {
        this.setDataValue("Site_Web", value && value.trim() !== "" ? value : null);
      },
    },
    Top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "artisanentreprise",
    timestamps: false,
  }
);

export default Services;