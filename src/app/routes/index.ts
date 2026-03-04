import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRoutes } from "../module/user/user.route";


const router = Router();

router.use("/auth", AuthRoutes)
router.use("/specialties", SpecialtyRoute)
router.use("/users", UserRoutes)
// router.use("/doctors", DoctorRoutes)

export const IndexRoutes = router;