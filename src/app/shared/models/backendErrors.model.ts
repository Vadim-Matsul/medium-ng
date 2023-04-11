import { z } from 'zod';

export const backendErrorsModelSchema = z.record(z.array(z.string()));

export type BackendErrorsModel = z.infer<typeof backendErrorsModelSchema>;
