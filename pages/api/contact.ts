import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).send({ message: 'Email and message are required' });
  }

  try {
    await sendgrid.send({
      to: process.env.MY_EMAIL as string,
      from: process.env.SENDGRID_SENDER_EMAIL as string,
      subject: `New message from ${email}`,
      text: message,
    });
    return res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Failed to send email' });
  }
}
