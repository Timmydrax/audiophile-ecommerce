// app/api/send-confirmation/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export async function POST(req: Request) {
  const {
    email,
    name,
    orderId,
    items,
    total,
  }: {
    email: string;
    name: string;
    orderId: string;
    items: OrderItem[];
    total: number;
  } = await req.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: `Order Confirmation - ${orderId}`,
      html: `
        <h1>Thank you for your order, ${name}!</h1>
        <p>Your order ID is: <strong>${orderId}</strong></p>

        <h2>Order Summary</h2>
        <ul>
          ${items
            .map(
              (item) =>
                `<li>${item.name} × ${item.quantity} — $${item.price * item.quantity}</li>`
            )
            .join("")}
        </ul>

        <p><strong>Total: $${total}</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
