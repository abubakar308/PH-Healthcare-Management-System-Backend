import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post("/", SpecialtyController.createSpecialty);
router.get("/", SpecialtyController.GetAllSpecialty);
router.get("/:id", SpecialtyController.GetSpecialty);

export const SpecialtyRoute = router;