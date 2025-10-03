import Alimentation from "../models/AlimentationModel.js";

const AlimentationService = {
  // Récupérer tout
  getAllAlimentations: async () => {
    return await Alimentation.findAll();
  },

  // Récupérer par ID
  getAlimentationById: async (id) => {
    return await Alimentation.findByPk(id);
  },

  // Créer
  createAlimentation: async (data) => {
    return await Alimentation.create(data);
  },

  // Mettre à jour (remplace tout)
  updateAlimentation: async (id, data) => {
    const [updated] = await Alimentation.update(data, { where: { id } });
    if (updated) {
      return await Alimentation.findByPk(id);
    }
    return null;
  },

  // Patch (mise à jour partielle)
  patchAlimentation: async (id, data) => {
    const [updated] = await Alimentation.update(data, { where: { id } });
    if (updated) {
      return await Alimentation.findByPk(id);
    }
    return null;
  },

  // Supprimer
  deleteAlimentation: async (id) => {
    return await Alimentation.destroy({ where: { id } });
  },
};

export default AlimentationService;