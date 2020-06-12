import { userData } from "./provider";
import { HTTP404Error, HTTP500Error } from "../../utils/httpErrors";

export const user = async (q: number) => {
    try {
        return await userData(q);
    } catch (err) {
        switch (err.name) {
            case "EntityNotFound": {
                throw new HTTP404Error
            }
            default:
                throw new HTTP500Error;
        }
    }

};
