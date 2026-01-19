import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // This imports the helper we created earlier

// 1. GET: Fetch all users with Pagination
export async function GET(req: Request) {
  try {
    // Parse the URL to get page and limit
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Fetch data from DB
    // IMPORTANT: If your table is named 'Train', change 'prisma.user' to 'prisma.train'
    const data = await prisma.user.findMany({
      skip: skip,
      take: limit,
    });

    // Get total count for pagination info
    const total = await prisma.user.count();

    // Return the formatted JSON response
    return NextResponse.json({
      page,
      limit,
      total,
      data: data
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

// 2. POST: Create a new user
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic Validation: Check if data exists
    if (!body) {
      return NextResponse.json({ error: 'Missing request body' }, { status: 400 });
    }

    // Create the record in DB
    // IMPORTANT: Change 'prisma.user' to your actual model name
    const newData = await prisma.user.create({
      data: body,
    });

    return NextResponse.json({ message: 'Created successfully', data: newData }, { status: 201 });

  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json({ error: 'Error creating record' }, { status: 500 });
  }
}