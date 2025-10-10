import Artisans from "../models/ArtisansModel.js";

const ArtisansService = {
  // Récupérer tout
  getAllArtisanss: async () => {
    return await Artisans.findAll();
  },

  // Récupérer par ID
  getArtisansById: async (id) => {
    return await Artisans.findByPk(id);
  },

  // Créer
  createArtisans: async (data) => {
    return await Artisans.create(data);
  },

  // Mettre à jour (remplace tout)
  updateArtisans: async (id, data) => {
    const [updated] = await Artisans.update(data, { where: { id_artisan: id } });
    if (updated) {
      return await Artisans.findByPk(id);
    }
    return null;
  },

  // Patch (mise à jour partielle)
  patchArtisans: async (id, data) => {
    const [updated] = await Artisans.update(data, { where: { id_artisan: id } });
    if (updated) {
      return await Artisans.findByPk(id);
    }
    return null;
  },

  // Supprimer
  deleteArtisans: async (id) => {
    return await Artisans.destroy({ where: { id_artisan: id } });
},
};

export default ArtisansService;