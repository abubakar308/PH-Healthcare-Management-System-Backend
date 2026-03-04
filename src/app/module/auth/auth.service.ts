import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface IRegisterPatientPayload {
    name: string;
    email: string;
    password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            //default values
            // needsPasswordChange: false,
            // role: Role.PATIENT
        }
    })

    if (!data.user) {
        throw new Error("Failed to register patient");
    }

    //TODO : Create Patient Profile In Transaction After Sign Up Of Patient In USer Model
    const patient = await prisma.$transaction( async (tx) => {

       const patientTx = await tx.patient.create({
            data:{
                userId: data.user.id,
                name: payload.name,
                email: payload.email,
            }
        })

        return patientTx
    })

    return {
        ...data,
        patient
    }
}



interface ILoginPatientPayload {
    email: string;
    password: string;
}

const loginPatient = async (payload: ILoginPatientPayload) => {
    const { email, password } = payload;

    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })

    if (!data.user) {
        throw new Error("Failed to login patient");
    }
    return data

}

export const AuthService = {
    registerPatient,
    loginPatient
}