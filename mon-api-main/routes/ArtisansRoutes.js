import express from'express';
const router = express.Router();
import ArtisansController from'../controllers/ArtisansController.js';

// ⚠️ La route spéciale pour les 3 meilleurs artisans
router.get("/top", ArtisansController.getTopArtisans);
router.get('/', ArtisansController.getAllArtisanss);
router.post('/', ArtisansController.createArtisans);
router.get('/:id', ArtisansController.getArtisansById);
router.post("/:id/contact", ArtisansController.envoyerMessage);
router.put('/:id', ArtisansController.updateArtisans);
router.patch('/:id', ArtisansController.patchArtisans);
router.delete('/:id', ArtisansController.deleteArtisans);

export default router;