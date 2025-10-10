import ArtisansService from "../services/ArtisansService.js";
import { handleSequelizeError } from "../utils/sequelizeErrorHandler.js";

const ArtisansController = {
  getAllArtisanss: async (req, res) => {
    try {
      const Artisanss = await ArtisansService.getAllArtisanss();
      res.json(Artisanss);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  getArtisansById: async (req, res) => {
    try {
      const Artisans = await ArtisansService.getArtisansById(req.params.id);
      if (!Artisans)
        return res.status(404).json({ message: "Artisans introuvable" });
      res.json(Artisans);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  createArtisans: async (req, res) => {
    try {
      const Artisans = await ArtisansService.createArtisans(req.body);
      res.status(201).json(Artisans);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  updateArtisans: async (req, res) => {
    try {
      const Artisans = await ArtisansService.updateArtisans(req.params.id, req.body);
      if (!Artisans)
        return res.status(404).json({ message: "Artisans introuvable" });
      res.json(Artisans);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  patchArtisans: async (req, res) => {
    try {
      const Artisans = await ArtisansService.patchArtisans(req.params.id, req.body);
      if (!Artisans)
        return res.status(404).json({ message: "Artisans introuvable" });
      res.json(Artisans);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  deleteArtisans: async (req, res) => {
    try {
      const deleted = await ArtisansService.deleteArtisans(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Artisans introuvable" });
      res.status(204).send();
    } catch (error) {
      handleSequelizeError(error, res);
    }
  }
};

export default ArtisansController;