import AlimentationService from "../services/AlimentationService.js";
import { handleSequelizeError } from "../utils/sequelizeErrorHandler.js";

const AlimentationController = {
  getAllAlimentations: async (req, res) => {
    try {
      const Alimentations = await AlimentationService.getAllAlimentations();
      res.json(Alimentations);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  getAlimentationById: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.getAlimentationById(req.params.id);
      if (!Alimentation)
        return res.status(404).json({ message: "Alimentation introuvable" });
      res.json(Alimentation);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  createAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.createAlimentation(req.body);
      res.status(201).json(Alimentation);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  updateAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.updateAlimentation(req.params.id, req.body);
      if (!Alimentation)
        return res.status(404).json({ message: "Alimentation introuvable" });
      res.json(Alimentation);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  patchAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.patchAlimentation(req.params.id, req.body);
      if (!Alimentation)
        return res.status(404).json({ message: "Alimentation introuvable" });
      res.json(Alimentation);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  deleteAlimentation: async (req, res) => {
    try {
      const deleted = await AlimentationService.deleteAlimentation(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Alimentation introuvable" });
      res.status(204).send();
    } catch (error) {
      handleSequelizeError(error, res);
    }
  }
};

export default AlimentationController;