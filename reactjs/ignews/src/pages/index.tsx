import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/strype';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount : number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>
            
            <p>
              Get access to all the publications <br />
              <span>for {product.amount} month</span>
            </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
  </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  // chamada a API de pagamentos STRIPE pegando todas informações de nosso produto incluíndo a que utilizaremos que é 
  // seu valor
  const price = await stripe.prices.retrieve('price_1IoE1HC2yAI0vrUjJRV5iL3V', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount:  new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }
    ).format(price.unit_amount / 100)
  }
  
  return {
    props: {
      product
    }
  }
}