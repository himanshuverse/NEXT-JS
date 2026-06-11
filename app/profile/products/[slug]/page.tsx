import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Phone",
    price: 25000,
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
  },
];

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) 
{
  const {slug}= await params
  const product=products.find((p)=>p.id===Number(slug))
  if(!product) {
    notFound()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-black">
          {product.name}
        </h1>

        <p className="text-xl text-green-600 mt-4">
          ₹{product.price}
        </p>

        <p className="mt-4 text-gray-600">
          Product ID: {product.id}
        </p>
      </div>
    </div>
  );
}