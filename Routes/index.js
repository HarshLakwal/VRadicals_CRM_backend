import express from 'express'
import auth from '../middleware/auth.js'
import fileUploader from '../middleware/fileUploader.js'
import { addContentController } from '../controller/index.js'

const router = express.Router();

router.post("/addContent", fileUploader.fields([
    { name: 'ourVentureLogos', maxCount: 5 },
    { name: 'ourProductsLogos', maxCount: 5 },
    { name: 'ourPartnerLogos', maxCount: 5 },
    {name:'teamImg', maxCount:1}
]), addContentController.addContent);

export default router;