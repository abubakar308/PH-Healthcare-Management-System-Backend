import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { UserService } from "./admin.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createAdmin(req.body);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

// Update the export
export const UserController = {
  createAdmin,
};