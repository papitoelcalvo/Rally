import { prisma } from "@/database/db"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const ids = searchParams.getAll("id").map(id => parseInt(id)).filter(id => !isNaN(id))

  if (ids.length === 0) {
    return NextResponse.json({ error: "No valid IDs provided" }, { status: 400 })
  }

  try {
    const update = await prisma.roles.updateMany({
      where: {
        Id: { in: ids },
      },
      data: {
        state: "inactive",
      },
    })

    return NextResponse.json({
      message: "Roles updated successfully",
      count: update.count,
      ids,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error deactivating roles" }, { status: 500 })
  }
}
