import prisma from '@/lib/prisma';

export async function createMessage(request: Request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, subject, message } = await request.json();
    const post = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to create message ${error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}