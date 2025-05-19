import { PrismaClient } from './generated/prisma';

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
}

export const db = globalForPrisma.prisma;
