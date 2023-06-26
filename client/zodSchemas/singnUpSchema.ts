import z from "zod";

export const zodFirstName = z.string().min(3);
export const zodSecondName = z.string().min(3);
export const zodPhoneNO = z.string().min(10);
export const zodEmail = z.string().email();
