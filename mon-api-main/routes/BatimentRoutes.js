import express from'express';
const router = express.Router();
import BatimentController from'../controllers/BatimentController.js';

router.get('/', BatimentController.getAllBatiments);
router.post('/', BatimentController.createBatiment);
router.get('/:id', BatimentController.getBatimentById);
router.put('/:id', BatimentController.updateBatiment);
router.patch('/:id', BatimentController.patchBatiment);
router.delete('/:id', BatimentController.deleteBatiment);

export default router;