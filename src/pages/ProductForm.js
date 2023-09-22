import { useActionData, useNavigate, useNavigation, json, redirect, Form } from "react-router-dom";


export default function ProductForm({ method , event}){
       
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting' ;
    
    function cancelHandler(){
        navigate('..');
    }

    return (
        <Form method='post' style={{textAlign:"center", backgroundColor:"bisque", margin:"5px 350px 5px 350px"}}>
            <p>
                <label htmlFor="title">Name</label>
                <input
                      id="name"
                      type="text"
                      name="name" 
                      required
                      defaultValue={event ? event.title : ''}
                      style={{ margin:'5px 5px 5px 30px'}}
                />
            </p>
            <p>
            <label htmlFor="title">Category</label>
                <input
                      id="category"
                      type="text"
                      name="category" 
                      required
                      defaultValue={event ? event.category : ''}
                      style={{ margin:'5px 5px 5px 30px'}}
                />
            </p>
            <p>
            <label htmlFor="title">Description</label>
                <input
                      id="description"
                      type="text"
                      name="description" 
                      required
                      defaultValue={event ? event.description : ''}
                      style={{ margin:'5px 5px 5px 30px'}}
                />
            </p>
            <p>
            <label htmlFor="title">Price</label>
                <input
                      id="price"
                      type="number"
                      name="price" 
                      required
                      defaultValue={event ? event.price : ''}
                      style={{ margin:'5px 5px 5px 30px'}}
                />
            </p>
                <div>
                    <button type="button" onClick={cancelHandler}>
                        Cancel
                    </button>
                    <button >
                       Submit
                    </button>
                </div>
            
        </Form> 
    )
      
}

export async function action({ request , params}) {
    const method = request.method;
    const data = await request.formData();

    const productData = {
        name: data.get('name'),
        category: data.get('category'),
        description: data.get('description'),
        price: data.get('price'),
    }

    const response = await fetch('http://localhost:1920/api/v1/product', {
        method: 'POST',
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