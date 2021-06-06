import { query as q, } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
    subscriptionId: string, 
    customerId: string) {
        console.log(`subs: ${subscriptionId}`);
        
        const userRef = await fauna.query(
            q.Select(
                "ref",
                q.Get( 
                    q.Match(
                        q.Index('user_by_stripe_customer_id'), 
                        customerId
                    )
                )
            )
        );

        console.log(userRef);
        
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);

        const subscriptionData = {
            id: subscription.id,
            userId: userRef,
            status: subscription.status,
            price_id: subscription.items.data[0].price.id,
        }

        console.log(subscriptionData);

        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                {data:  subscriptionData }
            )
        )

       
}