import ServicesService from "../services/ServicesService.js";
import { handleSequelizeError } from "../utils/sequelizeErrorHandler.js";

const ServicesController = {
  getAllServicess: async (req, res) => {
    try {
      const Servicess = await ServicesService.getAllServicess();
      res.json(Servicess);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  getServicesById: async (req, res) => {
    try {
      const Services = await ServicesService.getServicesById(req.params.id);
      if (!Services)
        return res.status(404).json({ message: "Services introuvable" });
      res.json(Services);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  createServices: async (req, res) => {
    try {
      const Services = await ServicesService.createServices(req.body);
      res.status(201).json(Services);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  updateServices: async (req, res) => {
    try {
      const Services = await ServicesService.updateServices(req.params.id, req.body);
      if (!Services)
        return res.status(404).json({ message: "Services introuvable" });
      res.json(Services);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  patchServices: async (req, res) => {
    try {
      const Services = await ServicesService.patchServices(req.params.id, req.body);
      if (!Services)
        return res.status(404).json({ message: "Services introuvable" });
      res.json(Services);
    } catch (error) {
      handleSequelizeError(error, res);
    }
  },

  deleteServices: async (req, res) => {
    try {
      const deleted = await ServicesService.deleteServices(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Services introuvable" });
      res.status(204).send();
    } catch (error) {
      handleSequelizeError(error, res);
    }
  }
};

export default ServicesController;