interface Product {
    id :Number;
    title:string;
    price:Number;
    category:string
}

interface ProductsResponse{
    products:Product[];
    total :Number

}

async function getProducts():Promise<ProductsResponse>{
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok){
        throw new Error("not able to fetch data")
    }
return response.json()
}




export default async function serverFetch(){
    const products =await getProducts()

    return(
        <div className="p-4 items-center flex ">
            <h1>server page data fetching </h1>
            <h3>{products?.total} no of products</h3>
            <div className="flex flex-col gap-2.5"
            
            >
                {
                products?.products?.map(product=>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                    </div>
                ))
            }
            </div>





        </div>
    )
}