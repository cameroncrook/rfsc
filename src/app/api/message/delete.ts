import prisma from '@/lib/prisma';

export async function deleteMessage(request: Request) {
  if (request.method !== 'DELETE') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { message_id } = await request.json();
    const message = await prisma.message.delete({
      where: {
        message_id,
      },
    });

    return new Response(JSON.stringify({message: "Message deleted"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to delete message ${error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}