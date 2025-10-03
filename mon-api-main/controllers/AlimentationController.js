import AlimentationService from "../services/AlimentationService.js";

const AlimentationController = {
  getAllAlimentations: async (req, res) => {
    try {
      const Alimentations = await AlimentationService.getAllAlimentations();
      res.json(Alimentations);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  getAlimentationById: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.getAlimentationById(req.params.id);
      if (!Alimentation) {
        return res.status(404).json({ message: "Alimentation introuvable" });
      }
      res.json(Alimentation);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  createAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.createAlimentation(req.body);
      res.status(201).json(Alimentation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.updateAlimentation(req.params.id, req.body);
      if (!Alimentation) {
        return res.status(404).json({ message: "Alimentation introuvable" });
      }
      res.json(Alimentation);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  patchAlimentation: async (req, res) => {
    try {
      const Alimentation = await AlimentationService.patchAlimentation(req.params.id, req.body);
      if (!Alimentation) {
        return res.status(404).json({ message: "Alimentation introuvable" });
      }
      res.json(Alimentation);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  deleteAlimentation: async (req, res) => {
    try {
      const deleted = await AlimentationService.deleteAlimentation(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Alimentation introuvable" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};

export default AlimentationController;