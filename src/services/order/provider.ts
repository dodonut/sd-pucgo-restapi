import { conn } from '../../config/typeORM'
import Order from '../../entities/order';

export const orders = async (id: number) => {
    return await conn.getRepository(Order)
        .createQueryBuilder("order")
        .leftJoin("order.user_id", "userOrder", "order.user_id = user.id")
        .where("user.id = :id", { id: id })
        .getMany()
};
