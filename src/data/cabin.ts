import prisma from '@/lib/prisma';

export async function getCabinWithId(id: number) {
  try {
    const cabin = await prisma.cabins.findUnique({ where: { id } });

    return cabin;
  } catch (error) {
    console.error(error);
    return null;
  }
}
