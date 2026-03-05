
import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { UserController } from "./admin.controller";
import { UserValidation } from "./admin.validation";

const router = Router();

router.post(
  "/create-admin",
//   checkAuth("SUPER_ADMIN"), // Only super admin can create admin
  validateRequest(UserValidation.createAdminValidationSchema),
  UserController.createAdmin,
);

export const AdminRoutes = router;