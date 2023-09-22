import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function Tablet(){

    const TabletProducts = useLoaderData();


    return (

       
        <div>
            {TabletProducts.map((product) => {
               return <ProductDetails key={product.name} product={product}/>
            }
            )}
        </div>

    )


}

export async function loader() {

    const response = await fetch('http://localhost:1920/api/v1/product/filter/Tablet', {
        method: 'GET'
    });

    if (!response.ok) {
        console.log("Error Occurred")
        console.log(response)
    } else {
        const resData = await response.json();
        return resData;
    }

}