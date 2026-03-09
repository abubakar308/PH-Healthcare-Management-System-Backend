import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { multerUpload } from "../../config/multer.config";

const router = Router();

router.post("/",
    //  checkAuth(Role.ADMIN, Role.SUPER_ADMIN), 
     multerUpload.single("file"), SpecialtyController.createSpecialty);
router.get("/", SpecialtyController.getAllSpecialties);
router.get("/:id", SpecialtyController.getSpecialty);
router.delete('/:id', SpecialtyController.deleteSpecialty);

export const SpecialtyRoute = router;