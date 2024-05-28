import prisma from '@/lib/prisma';

export async function getCabinWithId(cabinId: number) {
  try {
    const cabin = await prisma.cabins.findUnique({ where: { id: cabinId } });

    return cabin;
  } catch (error) {
    console.error(error);
    return null;
  }
}
