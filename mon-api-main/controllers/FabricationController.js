import FabricationService from "../services/FabricationService.js";

const FabricationController = {
  getAllFabrications: async (req, res) => {
    try {
      const Fabrications = await FabricationService.getAllFabrications();
      res.json(Fabrications);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  getFabricationById: async (req, res) => {
    try {
      const Fabrication = await FabricationService.getFabricationById(req.params.id);
      if (!Fabrication) {
        return res.status(404).json({ message: "Fabrication introuvable" });
      }
      res.json(Fabrication);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  createFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.createFabrication(req.body);
      res.status(201).json(Fabrication);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.updateFabrication(req.params.id, req.body);
      if (!Fabrication) {
        return res.status(404).json({ message: "Fabrication introuvable" });
      }
      res.json(Fabrication);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  patchFabrication: async (req, res) => {
    try {
      const Fabrication = await FabricationService.patchFabrication(req.params.id, req.body);
      if (!Fabrication) {
        return res.status(404).json({ message: "Fabrication introuvable" });
      }
      res.json(Fabrication);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  deleteFabrication: async (req, res) => {
    try {
      const deleted = await FabricationService.deleteFabrication(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Fabrication introuvable" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};

export default FabricationController;