import z from "zod";

export const zodUserName = z.string().min(4);
export const zodPass = z.string().min(5);
