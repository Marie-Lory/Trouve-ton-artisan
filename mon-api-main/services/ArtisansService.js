import Artisans from "../models/ArtisansModel.js";

const ArtisansService = {
  // ✅ Récupération de tous les artisans, avec filtrage par catégorie si présent
  getAllArtisanss: async (categorie) => {
    const whereClause = categorie ? { categorie } : {};
    return await Artisans.findAll({ where: whereClause });
  },

  getArtisansById: async (id) => {
    return await Artisans.findByPk(id);
  },

  createArtisans: async (data) => {
    return await Artisans.create(data);
  },

  updateArtisans: async (id, data) => {
    const artisan = await Artisans.findByPk(id);
    if (!artisan) return null;
    return await artisan.update(data);
  },

  patchArtisans: async (id, data) => {
    const artisan = await Artisans.findByPk(id);
    if (!artisan) return null;
    return await artisan.update(data);
  },

  deleteArtisans: async (id) => {
    const artisan = await Artisans.findByPk(id);
    if (!artisan) return null;
    await artisan.destroy();
    return true;
  },

  // ✅ Récupération des 3 meilleurs artisans
  getTopArtisans: async () => {
    return await Artisans.findAll({
      order: [["note", "DESC"]],
      limit: 3,
    });
  },
};

export default ArtisansService;