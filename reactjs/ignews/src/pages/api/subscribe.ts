import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { stripe } from '../../services/stripe';

export function (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })

    const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
    })   

    if (req.method === 'POST') {
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types:  ['card'],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1IoE1HC2yAI0vrUjJRV5iL3V', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })    

        return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    } else {
        res.setHeader('ALLOW', 'POSTx')
        res.status(405).end({'Method not allowed'})
    }
}