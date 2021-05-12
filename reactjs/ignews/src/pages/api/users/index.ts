import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Lilyia'},
        {id: 2, name: 'Mei'},
        {id: 3, name: 'Himeko'},
        {id: 4, name: 'Seele'},
        {id: 5, name: 'Kiana'}

    ]

    return response.json(users);
}