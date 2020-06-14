import { orders } from "./provider";
import { HTTP404Error, HTTP500Error } from "../../utils/httpErrors";

export const user = async (id: number) => {
    try {
        return await orders(id);
    } catch (err) {
        console.log(err)
        switch (err.name) {
            case "EntityNotFound": {
                throw new HTTP404Error
            }
            default: {
                throw new HTTP500Error;
            }
        }
    }

};
