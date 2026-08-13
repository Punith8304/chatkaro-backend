import type { Request, Response } from "express";
export declare const loginController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const signUpController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const checkAuthentication: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const logout: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=authenticationController.d.ts.map