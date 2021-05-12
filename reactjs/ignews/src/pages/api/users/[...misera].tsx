import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

    console.log(request.query);
    
    const users = [
        {id: 1, name: 'Durandal'},
        {id: 2, name: 'Bronya'},
        {id: 3, name: 'Rosalyia'}
    ];

    return response.json(users);
}