import Services from "../models/ServicesModel.js";

const ServicesService = {
  // Récupérer tout
  getAllServicess: async () => {
    return await Services.findAll();
  },

  // Récupérer par ID
  getServicesById: async (id) => {
    return await Services.findByPk(id);
  },

  // Créer
  createServices: async (data) => {
    return await Services.create(data);
  },

  // Mettre à jour (remplace tout)
  updateServices: async (id, data) => {
    const [updated] = await Services.update(data, { where: { id } });
    if (updated) {
      return await Services.findByPk(id);
    }
    return null;
  },

  // Patch (mise à jour partielle)
  patchServices: async (id, data) => {
    const [updated] = await Services.update(data, { where: { id } });
    if (updated) {
      return await Services.findByPk(id);
    }
    return null;
  },

  // Supprimer
  deleteServices: async (id) => {
    return await Services.destroy({ where: { id } });
  },
};

export default ServicesService;