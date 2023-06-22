import jwt, { JsonWebTokenError, JwtPayload, TokenExpiredError } from "jsonwebtoken";
import config from "../config";

function sign(data: any) {
    return jwt.sign({ admin: data }, config.jwt.jwt_secret as string, { expiresIn: config.jwt.jwt_expire });
}

function verify(token: string): {
    admin: JwtPayload | string|null,
    error: TokenExpiredError | JsonWebTokenError | null
} {
    try {
        const decoded:any = jwt.verify(token, config.jwt.jwt_secret as string);
        return {
            // @ts-ignore
            data: decoded,
            error: null
        };
    } catch (error) {
        return {
            // @ts-ignore
            data: null,
            error: error as TokenExpiredError | JsonWebTokenError | null
        };
    }
}


export { sign, verify };