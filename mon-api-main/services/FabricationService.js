import Fabrication from "../models/FabricationModel.js";

const FabricationService = {
  // Récupérer tout
  getAllFabrications: async () => {
    return await Fabrication.findAll();
  },

  // Récupérer par ID
  getFabricationById: async (id) => {
    return await Fabrication.findByPk(id);
  },

  // Créer
  createFabrication: async (data) => {
    return await Fabrication.create(data);
  },

  // Mettre à jour (remplace tout)
  updateFabrication: async (id, data) => {
    const [updated] = await Fabrication.update(data, { where: { id } });
    if (updated) {
      return await Fabrication.findByPk(id);
    }
    return null;
  },

  // Patch (mise à jour partielle)
  patchFabrication: async (id, data) => {
    const [updated] = await Fabrication.update(data, { where: { id } });
    if (updated) {
      return await Fabrication.findByPk(id);
    }
    return null;
  },

  // Supprimer
  deleteFabrication: async (id) => {
    return await Fabrication.destroy({ where: { id } });
  },
};

export default FabricationService;