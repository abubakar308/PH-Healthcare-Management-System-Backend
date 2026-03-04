import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post("/", SpecialtyController.createSpecialty);
router.get("/", SpecialtyController.getAllSpecialties);
router.get("/:id", SpecialtyController.getSpecialty);
router.delete('/:id', SpecialtyController.deleteSpecialty);

export const SpecialtyRoute = router;