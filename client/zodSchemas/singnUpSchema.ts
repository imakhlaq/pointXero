import z from "zod";

export const zodFirstName = z.string();
export const zodSecondName = z.string();
export const zodPhoneNO = z.string();
export const zodEmail = z.string().email();
