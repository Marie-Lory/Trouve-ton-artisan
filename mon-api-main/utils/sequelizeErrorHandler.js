// utils/sequelizeErrorHandler.js
export const handleSequelizeError = (error, res) => {
  if (error.name === "SequelizeValidationError") {
    const details = error.errors.map(err => ({
      field: err.path,
      message: err.message,
      value: err.value
    }));
    return res.status(400).json({
      message: "Erreur de validation Sequelize",
      details
    });
  }

  if (error.name === "SequelizeUniqueConstraintError") {
    const details = error.errors.map(err => ({
      field: err.path,
      message: "Valeur déjà utilisée (doit être unique)",
      value: err.value
    }));
    return res.status(400).json({
      message: "Erreur de contrainte unique Sequelize",
      details
    });
  }

  // Autres erreurs génériques
  return res.status(500).json({ message: "Erreur serveur", error: error.message });
};