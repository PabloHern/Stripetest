import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_API_SECRET);
  const prices = await stripe.prices.list();
  return NextResponse.json(prices.data);
}
