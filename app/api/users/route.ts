// frontend/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleError } from '@/lib/errorHandler';
import { AppError } from '@/lib/AppError'; // <--- Import this

export async function GET(req: Request) {
  try {
    const userRole = req.headers.get("x-user-role");

    // Pagination logic
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    const data = await prisma.user.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        role: true, 
        createdAt: true,
      }
    });

    const total = await prisma.user.count();

    return NextResponse.json({
      success: true,
      currentUserRole: userRole,
      pagination: { page, limit, total },
      data: data
    });

  } catch (error) {
    return handleError(error, "GET /api/users");
  }
}

// Admin-only User Creation
export async function POST(req: Request) {
  try {
    // 1. SECURITY CHECK: Verify Admin Role
    const userRole = req.headers.get("x-user-role");
    if (userRole !== 'ADMIN') {
      // Throwing a 403 Forbidden error
      throw new AppError("Access Denied: Admins only.", 403);
    }

    const body = await req.json();

    // 2. VALIDATION CHECK: Missing Fields
    if (!body.email || !body.password || !body.name) {
      // Throwing a 400 Bad Request error
      throw new AppError("Missing required fields: name, email, or password", 400);
    }

    const newData = await prisma.user.create({
      data: body,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Created successfully', 
      data: newData 
    }, { status: 201 });

  } catch (error) {
    return handleError(error, "POST /api/users");
  }
}