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

export async function loader({params}) {
   
    let category = params.category;

    console.log(category);
  
    const response = await fetch('http://localhost:1920/api/v1/product/filter/' + category , {
        method: 'GET',
        
    });

    if (!response.ok) {
        console.log("Error Occurred")
        console.log(response)
    } else {
        const resData = await response.json();
        return resData;
    }
}