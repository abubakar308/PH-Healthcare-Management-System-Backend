import { prisma } from "../../lib/prisma";
import { IUpdateDoctorPayload } from "./doctor.interface";

const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctors;
}

const getDoctorById = async (id: string) => {
    const doctor = await prisma.doctor.findUniqueOrThrow({
        where: {
            id: id
        }
    })
    return doctor;
}

const updateDoctor = async (id: string, payload: IUpdateDoctorPayload) => {

     const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: {
           id
        },
        select: {
            id: true
        }
    })

       const doctor = await prisma.doctor.update({
        where: {
           id: doctorData.id
        },
        data: {
            ...payload
        }
    })

    return doctor;

}

const deleteDoctor = async (id: string) => {
    const deleteDoctor = await prisma.doctor.delete({
        where: {
            id
        }
    })

    return deleteDoctor;
}

export const DoctorService = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}