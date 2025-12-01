import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    // 1. Prepare Attachments
    let attachments = [];
    if (file && file instanceof Blob && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // 2. Send Email
    // CRITICAL FIXES FOR SANDBOX MODE:
    const data = await resend.emails.send({
      
      // MUST use this specific email until you verify '14ucapital.in' in Resend Dashboard
      from: 'contact@14ucapital.in', 
      
      // MUST send to the Boss's email (the account owner) only
      to: 'hello@14ucapital.in', 
      
      reply_to: email, 
      subject: `New 14U Inquiry: ${subject}`,
      text: `You have received a new message via the 14U Capital website.\n\nFrom: ${email}\n\nMessage:\n${message}`,
      attachments: attachments,
    });

    if (data.error) {
        console.error("Resend API Error:", data.error);
        return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Server Internal Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}