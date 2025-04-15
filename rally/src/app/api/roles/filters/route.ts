import { prisma } from "@/database/db"
import { NextResponse } from "next/server"

export async function GET() {
    const inactive = await prisma.roles.findMany({
        where: { state: 'inactive' },
      })
    return NextResponse.json({ inactive })
}
