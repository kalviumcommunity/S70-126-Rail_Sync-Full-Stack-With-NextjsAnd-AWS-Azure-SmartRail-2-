import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper to handle the "id" parameter
interface RouteParams {
  params: { id: string };
}

// 1. GET: Fetch a single user by ID
export async function GET(req: Request, { params }: RouteParams) {
  try {
    // We must convert the ID string to a Number because your schema uses Int
    const id = Number(params.id);

    const user = await prisma.user.findUnique({
      where: { id: id },
      include: { bookings: true } // Bonus: This fetches their bookings too!
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
  }
}

// 2. PUT: Update a user's details
export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const id = Number(params.id);
    const body = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name: body.name,
        email: body.email
      },
    });

    return NextResponse.json({ message: 'User updated', data: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}

// 3. DELETE: Remove a user
export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    const id = Number(params.id);

    // Note: If the user has Bookings, this might fail unless you delete bookings first.
    // For now, we will try to delete the user directly.
    await prisma.user.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error deleting user. They might have active bookings.' }, { status: 500 });
  }
}