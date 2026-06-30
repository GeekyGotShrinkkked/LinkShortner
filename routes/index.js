import express from "express";
import { redirectToUrl } from "../controllers/urlController.js";

const router = express.Router();

router.get('/:code', (req,res)=>{
    const {code} = req.params;

    res.status(200).json({
        success: true,
        message: 'Redirect route is working',
        captureCode: code,
    });

});


export default router;
