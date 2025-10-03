import BatimentService from "../services/BatimentService.js";

const BatimentController = {
  getAllBatiments: async (req, res) => {
    try {
      const Batiments = await BatimentService.getAllBatiments();
      res.json(Batiments);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  getBatimentById: async (req, res) => {
    try {
      const Batiment = await BatimentService.getBatimentById(req.params.id);
      if (!Batiment) {
        return res.status(404).json({ message: "Batiment introuvable" });
      }
      res.json(Batiment);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  createBatiment: async (req, res) => {
    try {
      const Batiment = await BatimentService.createBatiment(req.body);
      res.status(201).json(Batiment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateBatiment: async (req, res) => {
    try {
      const Batiment = await BatimentService.updateBatiment(req.params.id, req.body);
      if (!Batiment) {
        return res.status(404).json({ message: "Batiment introuvable" });
      }
      res.json(Batiment);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  patchBatiment: async (req, res) => {
    try {
      const Batiment = await BatimentService.patchBatiment(req.params.id, req.body);
      if (!Batiment) {
        return res.status(404).json({ message: "Batiment introuvable" });
      }
      res.json(Batiment);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  deleteBatiment: async (req, res) => {
    try {
      const deleted = await BatimentService.deleteBatiment(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Batiment introuvable" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};

export default BatimentController;