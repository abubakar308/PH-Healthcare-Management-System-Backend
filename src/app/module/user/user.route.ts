import { Router } from "express";
import { UserController } from "./user.controller";
import { createAdminZodSchema, createDoctorZodSchema } from "./user.validation";
import { validateRequest } from "../../middleware/validateRequest";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";



const router = Router();


router.post("/create-doctor",
    validateRequest(createDoctorZodSchema),
    UserController.createDoctor);


router.post("/create-admin",
    validateRequest(createAdminZodSchema),
    checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
    UserController.createAdmin);

export const UserRoutes = router;