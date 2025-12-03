import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    // 1. Check API Key immediately
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ ERROR: RESEND_API_KEY is missing in .env.local file");
      return NextResponse.json({ error: 'Missing API Key' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.formData();
    
    // Log the data receiving (for debugging)
    console.log("📨 Received form submission from:", formData.get('email'));

    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    // 2. Prepare Attachments
    let attachments = [];
    if (file && file instanceof Blob && file.size > 0) {
      // Log file size to ensure it's not too big (Vercel limit is 4MB)
      console.log(`📎 Attachment detected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // 3. Send Email
    const data = await resend.emails.send({
      from: 'contact@14ucapital.in', // Ensure this EXACT domain is verified in Resend
      to: '14ucapital@gmail.com',     // Make sure this email works, or change to your personal Gmail for testing
      reply_to: email,
      subject: `New 14U Inquiry: ${subject}`,
      text: `You have received a new message via the 14U Capital website.\n\nFrom: ${email}\n\nMessage:\n${message}`,
      attachments: attachments,
    });

    // 4. Handle Resend Specific Errors
    if (data.error) {
      console.error("❌ RESEND API ERROR:", JSON.stringify(data.error, null, 2));
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    console.log("✅ Email sent successfully:", data.data?.id);
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error('❌ SERVER INTERNAL ERROR:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}