import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';


export async function POST(req, res) {
  if (req.method === 'POST') {
    const body = await req.json();
    console.log("post resquest", body)
    const { name, email, phone, companyName, service, message } = body;
    const services = service.join(', ')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "arjun@fastcode.ai",
      subject: 'Contact message(Fast Code AI Website)',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company Name: ${companyName}
       Services : ${services}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      // res.status(200).json({ message: 'Email sent successfully' });
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      })
    } catch (error) {
      // res.status(500).json({ error: 'Error sending email' });
      return new Response(JSON.stringify({ error: 'Error sending email' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500
      })
    }
  } else {
    // res.status(405).json({ message: 'Method not allowed' });
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    })
  }
}
