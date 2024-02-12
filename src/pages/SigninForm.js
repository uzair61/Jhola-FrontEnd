import { Form, useNavigation, useNavigate, redirect } from "react-router-dom";



export default function SigninForm(event) {

    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const navigate = useNavigate();

    const signupNavigate = () => {
        navigate('/register');
    }


    return (

        <Form method="post" style={{ textAlign: "center", backgroundColor: "bisque", margin: "5px 350px 5px 350px" }}>
            <p>
                <label htmlFor="title">UserName</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    required
                    defaultValue={event ? event.title : ''}
                />
            </p>
            <p>
                <label htmlFor="title">Password</label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    required
                    defaultValue={event ? event.password : ''}
                />
            </p>
            <div>
                <button>Enter</button>
                <button onClick={signupNavigate}>Signup</button>
            </div>
        </Form>

    )


}




export async function action({ request }) {
    const data = await request.formData();

    const userData = {
        username: data.get('username'),
        password: data.get('password'),
    }

    console.log(userData);

    const response = await fetch('http://localhost:8085/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        console.log("Could not authenticate user")
        console.log(response)
    } else {
        const resData = await response.json();
        const token = resData.token;
        localStorage.setItem('token' , token);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() * 1);
        localStorage.setItem('expiration' , expiration.toISOString());
        
        return redirect("/");
    }
}