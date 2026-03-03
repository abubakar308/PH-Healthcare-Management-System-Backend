import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";


const createSpecialty = async (req: Request, res: Response) =>{
   
    try{
            const payload = req.body;

    const result = await SpecialtyService.createSpecialty(payload);

    res.status(200).json({
        success: true,
        message: "specialty created successfully",
        data: result
    })
    
    } catch(err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create specialty",
            error: err.message
        })
    }

}


const catchAsync = (fn: RequestHandler) =>{
    return async(req: Request, res: Response, next: NextFunction) =>{
        try{
        await fn(req, res, next);
        } catch(err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch",
            error: err.message
        })
    }
    }
}

const GetAllSpecialty = catchAsync(
    async (req: Request, res: Response) =>{

    const result = await SpecialtyService.getAllSpecialty()

    res.status(200).json({
        success: true,
        message: "specialty fetched successfully",
        data: result
    })
}
)


const GetSpecialty = async (req: Request, res: Response) =>{

    const id = req.params.id

    const result = await SpecialtyService.getSpecialty(id as string);

    res.status(200).json({
        success: true,
        message: "specialty fetched successfully",
        data: result
    })
}

export const SpecialtyController = {
createSpecialty,
GetAllSpecialty,
GetSpecialty
}