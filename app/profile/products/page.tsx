import Link from "next/link";

export default function products() {
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

  return (

    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>

            <p className="text-2xl font-bold text-green-600 mt-3">
              ${product.price}
            </p>


            <Link className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" href={`/profile/products/${product.id}`}>see details</Link>

          </div>
        ))}
      </div>
    </div>
  )
}