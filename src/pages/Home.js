import {  useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const navigateNewProductForm = () => {
        navigate('/new');
      };


    const products = useLoaderData();


    return (

       
        <div>
             <button onClick={navigateNewProductForm}>New Product</button>
            {products.map((product) => {
               return <ProductDetails key={product.name} product={product}/>
            }
            )}
        </div>

    )

}

export async function loader() {

    const response = await fetch('http://localhost:1920/api/v1/product/', {
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