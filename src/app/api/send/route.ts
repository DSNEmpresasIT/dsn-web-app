import { EmailTemplate} from '@/componets/email-template/contact-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_7EZfZM1X_2bEJLi2uBoPWEFpn9BJso2ed');

export async function POST(req: NextRequest) {
  try {
    const name = req.headers.get('X-Name') || '';
    const email = req.headers.get('X-Email') || '';
    const question = req.headers.get('X-Question') || '';
    const comments = req.headers.get('X-Comments') || '';

    console.log('Datos recibidos - Name:', name);
    console.log('Datos recibidos - Email:', email);
    console.log('Datos recibidos - Question:', question);
    console.log('Datos recibidos - Comments:', comments);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['danielmino926@gmail.com'],
      subject: 'Email desde DSN Web',
      react: EmailTemplate({ name, email, question, comments }),
      text: '',
    });
    return NextResponse.json({
      message: "Email sent",
    }, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({
      message: `Error: ${error.message}`,
    }, {
      status: 500,
    });
  }
}
