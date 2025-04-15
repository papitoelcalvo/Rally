import { prisma } from "@/database/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = parseInt(searchParams.get("id") || "")
  const state = searchParams.get("state") // puede ser "active" o "inactive"

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
  }

  // Buscar el rol por ID
  const role = await prisma.roles.findUnique({
    where: { Id: id },
  })

  if (!role) {
    return NextResponse.json({ error: "Role not found" }, { status: 404 })
  }

  if (!state && role.state !== "active") {
    return NextResponse.json({ error: "This role is inactive" }, { status: 403 })
  }

  if (state && role.state !== state) {
    return NextResponse.json({ error: `Role not found with state "${state}"` }, { status: 404 })
  }

  return NextResponse.json({ role })
}
