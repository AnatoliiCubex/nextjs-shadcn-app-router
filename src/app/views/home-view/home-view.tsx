import Image from "next/image";

import { useHomeViewLogic } from "~/views/home-view/home-view.logic";

export default async function HomeView() {
  const { data } = await useHomeViewLogic();

  return (
    <div className='justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]'>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data.products.map((product: any) => (
        <div key={product.id} className='flex flex-col items-center gap-4'>
          <div className='text-center'>
            <h2 className='font-bold text-xl'>{product.title}</h2>
            <p className='text-gray-500'>{product.description}</p>
            <p className='text-gray-500'>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
