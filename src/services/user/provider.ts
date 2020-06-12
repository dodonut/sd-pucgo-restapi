import { conn } from '../../config/typeORM'
import User from '../../entities/user';

export const userData = async (id: number) => {
    return await conn.getRepository(User).findOneOrFail(id)
};
