import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function Category(){

    const products = useLoaderData();

    return (

        <div>
            {products.map((product) => {
               return <ProductDetails key={product.name} product={product}/>
            }
            )}
        </div>
    )


}

export async function loader({ request , params}) {
    const data = await request.formData();

    console.log(data);

    const productData = {
        name: data.get('name'),
        category: data.get('category'),
        description: data.get('description'),
        price: data.get('price'),
    }

    let category = productData.category;

    const response = await fetch('http://localhost:1920/api/v1/product/filter/:' + category, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    });

    if (!response.ok) {
        console.log("Error Occurred")
        console.log(response)
    } else {
        const resData = await response.text();
        return resData;
    }
}