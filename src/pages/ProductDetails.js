export default function ProductDetails(props) {
    
    return (

        <div style={{ textAlign:"center"}}> 
            <h2>{props.product.category}</h2>

            <h3>{props.product.name}</h3>
            <h3>{props.product.description}</h3>
            <h3>{props.product.price}</h3>
            <hr></hr>
            <br></br>
        </div>
    )
}

