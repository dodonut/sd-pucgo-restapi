import { Request, Response } from 'express';
import { user } from './controller';
import { checkUserParams } from '../../middleware/checks';

export default [
    {
        path: '/api/user/:id',
        method: 'get',
        handler: [
            checkUserParams,
            async ({ params }: Request, res: Response) => {
                console.log('EHE')

                const result = await user(parseInt(params.id));
                res.status(200).send(result);
            },
        ],
    },
];
