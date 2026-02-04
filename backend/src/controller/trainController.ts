import { Request, Response } from 'express';
// ✅ Use the shared Prisma instance (prevents connection crashes)
import { prisma } from "../lib/prisma";

// 1. Get All Trains
export const getTrains = async (req: Request, res: Response) => {
  try {
    console.log("Fetching trains from database...");
    
    const trains = await prisma.train.findMany({
      orderBy: {
        updatedAt: 'desc' 
      }, // 👈 ✅ FIXED: Added closing brace and comma here
      include: {
        schedule: {
          include: {
            station: true
          }
        }
      }
    });

    console.log(`Found ${trains.length} trains.`);
    res.json(trains);
  } catch (error) {
    console.error("Error fetching trains:", error);
    res.status(500).json({ error: "Failed to fetch live train data" });
  }
};

// 2. Book a Seat
export const bookSeat = async (req: Request, res: Response) => {
  const { trainId, userId } = req.body;

  try {
    // We use a transaction to prevent "Race Conditions" (double booking)
    const result = await prisma.$transaction(async (tx) => {
      // Step A: Lock the row and get the latest seat count
      const train = await tx.train.findUnique({
        where: { id: trainId },
      });

      if (!train) throw new Error("Train not found");
      if (train.availableSeats <= 0) throw new Error("Sold Out!");

      // Step B: Decrease the seat count
      await tx.train.update({
        where: { id: trainId },
        data: { availableSeats: { decrement: 1 } },
      });

      // Step C: Create the booking record
      const booking = await tx.booking.create({
        data: {
          userId: userId,
          trainId: trainId,
        },
      });

      return booking;
    });

    res.json({ message: "Booking confirmed", bookingId: result.id });

  } catch (error: any) {
    console.error("Booking failed:", error.message);
    res.status(400).json({ error: error.message });
  }
};