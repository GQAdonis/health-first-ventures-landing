import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      replyTo: 'Health First Ventures <admin@healthfirstventures.com>',
      from: 'admin@prometheus-platform.io',
      to: [process.env.CONTACT_EMAIL!, 'tjames@skytok.net', 'stanley.lewis@a28therapeutics.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 20px; line-height: 1.5;">
            <div style="max-width: 600px; margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 8px;">
              <h1 style="color: #4f46e5; font-size: 24px; margin: 0 0 30px 0; text-align: center; font-weight: normal;">New Contact Form Submission</h1>
              
              <div style="background-color: #f9fafb; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
                <div style="margin-bottom: 10px;">
                  <span style="color: #4f46e5; margin-right: 8px;">Name:</span>
                  <span style="color: #1f2937;">${name}</span>
                </div>
                
                <div style="margin-bottom: 0;">
                  <span style="color: #4f46e5; margin-right: 8px;">Email:</span>
                  <span style="color: #1f2937;">${email}</span>
                </div>
              </div>
              
              <div style="margin-top: 20px;">
                <div style="color: #4f46e5; margin-bottom: 10px;">Message:</div>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; color: #1f2937;">
                  ${message}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; text-align: center;">
                This email was sent from the Health First Ventures contact form.
              </div>
            </div>
          </body>
        </html>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}
