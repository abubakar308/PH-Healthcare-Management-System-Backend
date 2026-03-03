import { Specialty } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createSpecialty = async (payload: Specialty): Promise<Specialty> =>{
    const specialty = await prisma.specialty.create({
        data: payload
    })

    return specialty;
}

const getAllSpecialty = async ()=>{
    const specialty = await prisma.specialty.findMany();
    
    return specialty;
}

const getSpecialty = async (specialtyId: string)=>{
    const specialty = await prisma.specialty.findUniqueOrThrow({
        where: {
            id: specialtyId
        }
    });

    return specialty;
}

export const SpecialtyService = {
    createSpecialty,
    getAllSpecialty,
    getSpecialty
}