import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import { tokenUtils } from "../../utils/token";
// import { envVars } from "../../config/env";


const registerPatient = catchAsync(
    async (req: Request, res: Response) => {
        //  const maxAge = ms(envVars.ACCESS_TOKEN_EXPIRES_IN as StringValue);
        const payload = req.body;


        const result = await AuthService.registerPatient(payload);

         const { accessToken, refreshToken, token, ...rest } = result;

           tokenUtils.setAccessTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBetterAuthSessionCookie(res, token as string);



        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message: "Patient registered successfully",
           data: {
                token,
                accessToken,
                refreshToken,
                ...rest,
            }
        })
    }
)


const loginPatient = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;

        const result = await AuthService.loginPatient(payload);

         const { accessToken, refreshToken, token, ...rest } = result

        tokenUtils.setAccessTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBetterAuthSessionCookie(res, token);

        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message: "Patient login successfully",
            data: {
                token,
                accessToken,
                refreshToken,
                ...rest,
            }
        })
    }
)

export const AuthController = {
    registerPatient,
    loginPatient
}