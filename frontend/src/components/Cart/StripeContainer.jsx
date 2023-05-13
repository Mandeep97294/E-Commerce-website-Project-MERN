import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import Payment from './Payment'

const PUBLIC_KEY = "pk_test_51Mt74vSDAb0Wyae2mwdQ0akbBG2q8pNET9Fs8mVjrS03LKGtlOl92FMmxQ7gYLW5XTvnVppjm7esmvikLegdyWTz00np22ntAm"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Payment />
    </Elements>
  )
}

export default StripeContainer