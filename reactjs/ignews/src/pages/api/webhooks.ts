import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => { 
    console.log('Novo Evento');
    
    res.status(200).json({ok: true})
}