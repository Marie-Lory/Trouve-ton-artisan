import Artisan from "../models/ArtisansModel.js";

const ArtisansService = {
  getAllArtisanss: (categorie) => {
    let where = {};
    if (categorie) where.categorie = categorie;
    return Artisan.findAll({ where });
  },
  getArtisansById: (id) => Artisan.findByPk(id),
  createArtisans: (data) => Artisan.create(data),
  updateArtisans: async (id, data) => {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;
    return artisan.update(data);
  },
  deleteArtisans: async (id) => {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;
    await artisan.destroy();
    return true;
  },
  getTopArtisans: () => {
    return Artisan.findAll({
      where: { top: true },
      order: [["note", "DESC"]],
      limit: 3,
    });
  },
};

export default ArtisansService;
