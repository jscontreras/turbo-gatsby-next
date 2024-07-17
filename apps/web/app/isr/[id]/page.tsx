import { revalidatePath } from 'next/cache';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default async function Page({ params }: { params: { id: string } }) {
  if (parseInt(params.id) > 60) {
    revalidatePath(`/isr/${params.id}`);
    return <h1>Should not be cached Ever!!!</h1>;
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 60, tags: ['collection'] } },
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div className="container mx-auto lg:max-w-screen-lg px-4">
      <div className="grid grid-cols-6 gap-x-6 gap-y-3 ">
        <div className="col-span-full space-y-3 lg:col-span-4">
          <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
            {data.title}
          </h1>
          <p className="font-medium text-gray-500">{data.body}</p>
        </div>
        <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
          <p>ISR Page</p>
        </div>
      </div>
</div>

  );
}
