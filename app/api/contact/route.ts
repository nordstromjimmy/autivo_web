import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await resend.emails.send({
    from: "Autivo <noreply@autivo.se>",
    to: "hej@autivo.se",
    replyTo: email,
    subject: `Nytt meddelande från ${name}`,
    text: message,
  });

  return Response.json({ success: true });
}
