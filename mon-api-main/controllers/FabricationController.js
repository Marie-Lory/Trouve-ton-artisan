import FabricationService from "../services/FabricationService.js";
import { handleSequelizeError } from "../utils/sequelizeErrorHandler.js";

const FabricationController = {
  getAllFabrications: async (req, res) => {
    try {
      const Fabrications = await FabricationService.getAllFabrications();
      res.json(Fabrications);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  getFabricationById: async (req, res) => {
    try {
      const Fabrication = await FabricationService.getFabricationById(req.params.id);
      if (!Fabrication)
        return res.status(404).json({ message: "Fabrication introuvable" });
      res.json(Fabrication);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  createFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.createFabrication(req.body);
      res.status(201).json(Fabrication);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  updateFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.updateFabrication(req.params.id, req.body);
      if (!Fabrication)
        return res.status(404).json({ message: "Fabrication introuvable" });
      res.json(Fabrication);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  patchFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.patchFabrication(req.params.id, req.body);
      if (!Fabrication)
        return res.status(404).json({ message: "Fabrication introuvable" });
      res.json(Fabrication);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  deleteFabrication: async (req, res) => {
    try {
      const deleted = await FabricationService.deleteFabrication(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Fabrication introuvable" });
      res.status(204).send();
    } catch (error) {
      handleSequelizeError(error, res);
    }
  }
};

export default FabricationController;