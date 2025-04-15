import { prisma } from "@/database/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextResponse) {
    const body = await req.json()
    await prisma.roles.create({
     data: {
        name: body.name,
        descripcion: body.description,
    }
})
    return NextResponse.json({ message: "Role created successfully", role: body })
}

export async function GET() {
    const roles = await prisma.roles.findMany({
        where: { state: "active" },
        orderBy: { name: "asc" },
    })
    return NextResponse.json({ roles })
}

export async function PUT(req: NextRequest) {
    const body = await req.json()
    const { id, name, description } = body
    await prisma.roles.update({
        where: { Id: id },
        data: {
            name: name,
            descripcion: description,
            state: body.state,
        },
    })
    return NextResponse.json({ message: "Role updated successfully", role: body })
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const ids = searchParams.getAll("id").map(id => parseInt(id)).filter(id => !isNaN(id))

    // Verifica si no se proporcionaron IDs
    if (ids.length === 0) {
      return NextResponse.json({ error: "No valid IDs provided" }, { status: 400 })
    }

    const forceDelete = searchParams.get("force") === "true"

    try {
      if (!forceDelete) {
        const activeRoles = await prisma.roles.findMany({
          where: {
            Id: { in: ids },
            state: "active",
          },
        })

        if (activeRoles.length > 0) {
          return NextResponse.json({
            error: "Cannot delete active roles unless forced. Use ?force=true to bypass this.",
            activeRoles,
          }, { status: 403 })
        }
      }
      const deleted = await prisma.roles.deleteMany({
        where: {
          Id: { in: ids },
        },
      })

      return NextResponse.json({
        message: "Roles permanently deleted",
        count: deleted.count,
        ids,
      })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: "Failed to delete roles" }, { status: 500 })
    }
  }
