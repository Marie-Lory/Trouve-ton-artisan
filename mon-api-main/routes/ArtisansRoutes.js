import express from'express';
const router = express.Router();
import ArtisansController from'../controllers/ArtisansController.js';

router.get('/', ArtisansController.getAllArtisanss);
router.post('/', ArtisansController.createArtisans);
router.get('/:id', ArtisansController.getArtisansById);
router.put('/:id', ArtisansController.updateArtisans);
router.patch('/:id', ArtisansController.patchArtisans);
router.delete('/:id', ArtisansController.deleteArtisans);

export default router;