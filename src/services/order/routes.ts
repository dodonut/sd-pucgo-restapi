import { Request, Response } from 'express';
import { user } from './controller';
import { checkUserParams } from '../../middleware/checks';

export default [
    {
        path: '/api/user/:id/orders',
        method: 'get',
        handler: [
            async ({ params }: Request, res: Response) => {
                const result = await user(parseInt(params.id));
                res.status(200).send(result);
            },
        ],
    },
];
