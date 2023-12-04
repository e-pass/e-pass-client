import { z } from 'zod';

const numberSchema = z.number().nonnegative();

export const validateNumber = (val: string) => {
  return numberSchema.safeParse(+val).success;
}