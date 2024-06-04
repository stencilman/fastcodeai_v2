// pages/api/sendMail.js
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST (req, res)  {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers);
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');

    const parsedData = parseMultipartFormData(data, boundary);
    const { name, email, file } = parsedData;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'recipient@example.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}`,
      attachments: file ? [{
        filename: file.filename,
        content: Buffer.from(file.content, 'binary'),
        contentType: file.contentType,
      }] : [],
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
};

const parseMultipartFormData = (data, boundary) => {
  const parts = data.toString().split(`--${boundary}`);
  const formData = {};
  parts.forEach((part) => {
    if (part.includes('Content-Disposition')) {
      const nameMatch = part.match(/name="([^"]+)"/);
      const filenameMatch = part.match(/filename="([^"]+)"/);
      const contentTypeMatch = part.match(/Content-Type: ([^\r\n]+)/);

      if (nameMatch) {
        const name = nameMatch[1];
        const content = part.split('\r\n\r\n')[1].replace(/\r\n--$/, '');

        if (filenameMatch && contentTypeMatch) {
          formData[name] = {
            filename: filenameMatch[1],
            contentType: contentTypeMatch[1],
            content,
          };
        } else {
          formData[name] = content;
        }
      }
    }
  });
  return formData;
};


