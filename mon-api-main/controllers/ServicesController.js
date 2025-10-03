import ServicesService from "../services/ServicesService.js";

const ServicesController = {
  getAllServicess: async (req, res) => {
    try {
      const Servicess = await ServicesService.getAllServicess();
      res.json(Servicess);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  getServicesById: async (req, res) => {
    try {
      const Services = await ServicesService.getServicesById(req.params.id);
      if (!Services) {
        return res.status(404).json({ message: "Services introuvable" });
      }
      res.json(Services);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  createServices: async (req, res) => {
    try {
      const Services = await ServicesService.createServices(req.body);
      res.status(201).json(Services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateServices: async (req, res) => {
    try {
      const Services = await ServicesService.updateServices(req.params.id, req.body);
      if (!Services) {
        return res.status(404).json({ message: "Services introuvable" });
      }
      res.json(Services);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  patchServices: async (req, res) => {
    try {
      const Services = await ServicesService.patchServices(req.params.id, req.body);
      if (!Services) {
        return res.status(404).json({ message: "Services introuvable" });
      }
      res.json(Services);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },

  deleteServices: async (req, res) => {
    try {
      const deleted = await ServicesService.deleteServices(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Services introuvable" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};

export default ServicesController;