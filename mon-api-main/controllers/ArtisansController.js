import ArtisansService from "../services/ArtisansService.js";
import { handleSequelizeError } from "../utils/sequelizeErrorHandler.js";

const ArtisansController = {

  getTopArtisans: async (req, res) => {
    try {
      const artisans = await ArtisansService.getTopArtisans();
      res.json(artisans);
    } catch (error) {
      res.status(500).json({
        message: "Erreur serveur",
        error: "Erreur lors de la récupération des meilleurs artisans : " + error.message,
      });
    }
  },

  // ✅ Filtrage par catégorie ajouté ici
  getAllArtisanss: async (req, res) => {
    try {
      const { categorie } = req.query;
      const artisans = await ArtisansService.getAllArtisanss(categorie);
      res.json(artisans);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  getArtisansById: async (req, res) => {
    try {
      const artisan = await ArtisansService.getArtisansById(req.params.id);
      if (!artisan)
        return res.status(404).json({ message: "Artisan introuvable" });
      res.json(artisan);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  createArtisans: async (req, res) => {
    try {
      const artisan = await ArtisansService.createArtisans(req.body);
      res.status(201).json(artisan);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  updateArtisans: async (req, res) => {
    try {
      const artisan = await ArtisansService.updateArtisans(req.params.id, req.body);
      if (!artisan)
        return res.status(404).json({ message: "Artisan introuvable" });
      res.json(artisan);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  patchArtisans: async (req, res) => {
    try {
      const artisan = await ArtisansService.patchArtisans(req.params.id, req.body);
      if (!artisan)
        return res.status(404).json({ message: "Artisan introuvable" });
      res.json(artisan);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  deleteArtisans: async (req, res) => {
    try {
      const deleted = await ArtisansService.deleteArtisans(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Artisan introuvable" });
      res.status(204).send();
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  envoyerMessage: async (req, res) => {
    const { id } = req.params;
    const { nom, email, objet, message } = req.body;

    try {
      // 🔹 Vérifie que l’artisan existe
      const artisan = await ArtisansService.getArtisansById(id);
      if (!artisan) {
        return res.status(404).json({ message: "Artisan introuvable" });
      }

     // 🔹 Simule l'envoi (aucun email réel)
      console.log(`📨 Message reçu de ${nom} pour ${artisan.nom}`);
      console.log(`Objet: ${objet}`);
      console.log(`Message: ${message}`);

      // 🔹 Réponse immédiate
      return res.status(200).json({
        message: "Une réponse sera apportée sous 48h.",
      });
    } catch (error) {
      console.error("Erreur lors du traitement du message :", error);
      return res
        .status(500)
        .json({ message: "Erreur lors du traitement du message." });
    }
  },
};

export default ArtisansController;