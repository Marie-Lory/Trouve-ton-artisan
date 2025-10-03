import express from'express';
const router = express.Router();
import FabricationController from'../controllers/FabricationController.js';

router.get('/', FabricationController.getAllFabrications);
router.post('/', FabricationController.createFabrication);
router.get('/:id', FabricationController.getFabricationById);
router.put('/:id', FabricationController.updateFabrication);
router.patch('/:id', FabricationController.patchFabrication);
router.delete('/:id', FabricationController.deleteFabrication);

export default router;