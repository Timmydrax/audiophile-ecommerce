// src/app/api/send-confirmation/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, orderId, items, total } = await request.json();

  try {
    await resend.emails.send({
      from: "orders@yourdomain.com",
      to: email,
      subject: `Order Confirmation - ${orderId}`,
      html: `
        <h1>Thank you for your order, ${name}!</h1>
        <p>Your order ID is: <strong>${orderId}</strong></p>
        <h2>Order Summary</h2>
        <ul>
          ${items
            .map(
              (item: any) => `
            <li>${item.name} x ${item.quantity} - $${item.price * item.quantity}</li>
          `
            )
            .join("")}
        </ul>
        <p><strong>Total: $${total}</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
