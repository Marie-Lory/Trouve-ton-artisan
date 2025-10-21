import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Artisans = sequelize.define(
  "Artisans",
  {
    id_artisan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
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
    ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a_propos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "L'email doit être valide",
        },
      },
    },
    site_web: {
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
    categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "artisanentreprise",
    timestamps: false,
  }
);

export default Artisans;