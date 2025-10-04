import express from'express';
const router = express.Router();
import AlimentationController from'../controllers/AlimentationController.js';

router.get('/', AlimentationController.getAllAlimentations);
router.post('/', AlimentationController.createAlimentation);
router.get('/:id', AlimentationController.getAlimentationById);
router.put('/:id', AlimentationController.updateAlimentation);
router.patch('/:id', AlimentationController.patchAlimentation);
router.delete('/:id', AlimentationController.deleteAlimentation);

export default router;