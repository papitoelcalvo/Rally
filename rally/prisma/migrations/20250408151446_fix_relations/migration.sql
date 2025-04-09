-- CreateTable
CREATE TABLE "usuario" (
    "Id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Grado" (
    "id" SERIAL NOT NULL,
    "grado_nombre" TEXT NOT NULL,

    CONSTRAINT "Grado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" SERIAL NOT NULL,
    "seccion_nombre" TEXT NOT NULL,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "numero_lista" INTEGER NOT NULL,
    "grado_id" INTEGER NOT NULL,
    "seccion_id" INTEGER NOT NULL,
    "grupo_id" INTEGER NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maestro" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Maestro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "maestro_id" INTEGER NOT NULL,

    CONSTRAINT "Estacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovimientoEstacion" (
    "id" SERIAL NOT NULL,
    "grupo_id" INTEGER NOT NULL,
    "estacion_origen_id" INTEGER NOT NULL,
    "estacion_destino_id" INTEGER NOT NULL,
    "hora_salida" TIMESTAMP(3) NOT NULL,
    "hora_llegada" TIMESTAMP(3),
    "tiempo_recorrido" INTEGER,

    CONSTRAINT "MovimientoEstacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Grado_grado_nombre_key" ON "Grado"("grado_nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Seccion_seccion_nombre_key" ON "Seccion"("seccion_nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_grado_id_seccion_id_numero_lista_key" ON "Estudiante"("grado_id", "seccion_id", "numero_lista");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_role_fkey" FOREIGN KEY ("role") REFERENCES "Roles"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_grado_id_fkey" FOREIGN KEY ("grado_id") REFERENCES "Grado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_seccion_id_fkey" FOREIGN KEY ("seccion_id") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estacion" ADD CONSTRAINT "Estacion_maestro_id_fkey" FOREIGN KEY ("maestro_id") REFERENCES "Maestro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoEstacion" ADD CONSTRAINT "MovimientoEstacion_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoEstacion" ADD CONSTRAINT "MovimientoEstacion_estacion_origen_id_fkey" FOREIGN KEY ("estacion_origen_id") REFERENCES "Estacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoEstacion" ADD CONSTRAINT "MovimientoEstacion_estacion_destino_id_fkey" FOREIGN KEY ("estacion_destino_id") REFERENCES "Estacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
