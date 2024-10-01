import { useHomeViewLogic } from "~/views/home-view/home-view.logic";

export default async function HomeView() {
  const { data } = await useHomeViewLogic();

  return (
    <div
      className={[
        "gap-4",
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "p-8",
        "sm:p-10",
        "pb-20",
        "min-h-screen",
      ].join(" ")}
    >
      {data.products.map((product) => (
        <div
          key={product.id}
          className={[
            "flex",
            "flex-col",
            "items-center",
            "gap-4",
            "border-gray-300",
            "p-4",
            "border",
            "rounded-md",
            "text-center",
          ].join(" ")}
        >
          <h2 className='font-bold text-xl'>{product.title}</h2>
          <p className='text-gray-500'>{product.description}</p>
          <p className='mt-auto font-bold text-green-600'>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
