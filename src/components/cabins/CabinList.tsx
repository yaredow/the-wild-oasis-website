import CabinCard from '@/components/cabins/CabinCard';
import prisma from '@/lib/prisma';

async function CabinList() {
  const cabins = await prisma.cabins.findMany();

  if (cabins.length === 0) return null;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
