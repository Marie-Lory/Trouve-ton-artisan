import express from'express';
const router = express.Router();
import ServicesController from'../controllers/ServicesController.js';

router.get('/', ServicesController.getAllServicess);
router.post('/', ServicesController.createServices);
router.get('/:id', ServicesController.getServicesById);
router.put('/:id', ServicesController.updateServices);
router.patch('/:id', ServicesController.patchServices);
router.delete('/:id', ServicesController.deleteServices);

export default router;