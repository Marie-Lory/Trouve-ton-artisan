import Batiment from "../models/BatimentModel.js";

const BatimentService = {
  // Récupérer tout
  getAllBatiments: async () => {
    return await Batiment.findAll();
  },

  // Récupérer par ID
  getBatimentById: async (id) => {
    return await Batiment.findByPk(id);
  },

  // Créer
  createBatiment: async (data) => {
    return await Batiment.create(data);
  },

  // Mettre à jour (remplace tout)
  updateBatiment: async (id, data) => {
    const [updated] = await Batiment.update(data, { where: { id } });
    if (updated) {
      return await Batiment.findByPk(id);
    }
    return null;
  },

  // Patch (mise à jour partielle)
  patchBatiment: async (id, data) => {
    const [updated] = await Batiment.update(data, { where: { id } });
    if (updated) {
      return await Batiment.findByPk(id);
    }
    return null;
  },

  // Supprimer
  deleteBatiment: async (id) => {
    return await Batiment.destroy({ where: { id } });
  },
};

export default BatimentService;