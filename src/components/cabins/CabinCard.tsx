import { cabins } from '@prisma/client';
import { User } from 'lucide-react';
import Image from 'next/image';

function CabinCard({ cabin }: { cabin: cabins }) {
  return (
    <div className='flex border-primary-800 border'>
      <div className='relative flex-1'>
        <Image
          src={cabin.image as string}
          fill
          className=' object-cover'
          alt={`Cabin ${cabin.name}`}
        />
      </div>

      <div className='flex-grow'>
        <div className='pt-5 pb-4 px-7 bg-primary-950'>
          <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
            Cabin {cabin.name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <User className='h-5 w-5 text-primary-600' />
            <p className='text-lg text-primary-200'>
              For up to <span className='font-bold'>{cabin?.maxCapacity}</span>{' '}
              guests
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {cabin.discount! > 0 ? (
              <>
                <span className='text-3xl font-[350]'>
                  ${cabin.regularPrice! - cabin.discount!}
                </span>
                <span className='line-through font-semibold text-primary-600'>
                  ${cabin.regularPrice}
                </span>
              </>
            ) : (
              <span className='text-3xl font-[350]'>
                ${cabin?.regularPrice}
              </span>
            )}
            <span className='text-primary-200'>/ night</span>
          </p>
        </div>

        <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
          <a
            href={`/cabins/${cabin.id}`}
            className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
