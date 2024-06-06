import CabinCard from '@/components/cabins/CabinCard';
import prisma from '@/lib/prisma';

async function CabinList({ filter }: { filter: string }) {
  const cabins = await prisma.cabins.findMany();

  if (cabins.length === 0) return null;

  let displayedCabins;

  if (filter === 'all') displayedCabins = cabins;

  if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin?.maxCapacity! <= 3);

  if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin?.maxCapacity! >= 4 && cabin?.maxCapacity! <= 7
    );

  if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin?.maxCapacity! >= 8);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
