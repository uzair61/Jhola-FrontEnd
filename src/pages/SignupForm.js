import { Form, useNavigation, useNavigate } from "react-router-dom";

export default function SignupForm(event) {

	const navigation = useNavigation();

	const isSubmitting = navigation.state === 'submitting';

	const navigate = useNavigate();

	const signinNavigate = () => {
		navigate('/signin');
	}


	return (
		<Form method='post' style={{ textAlign: "center", backgroundColor: "aqua", margin: "5px 350px 5px 350px" }}>
			<p>
				<label htmlFor="title">FullName</label>
				<input
					id="fullname"
					type="text"
					name="fullname"
					required
					defaultValue={event ? event.title : ''}
					style={{ margin: '5px 5px 5px 30px' }}
				/>
			</p>
			<p>
				<label htmlFor="title">UserName</label>
				<input
					id="username"
					type="text"
					name="username"
					required
					defaultValue={event ? event.username : ''}
					style={{ margin: '5px 5px 5px 30px' }}
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
					style={{ margin: '5px 5px 5px 30px' }}
				/>
			</p>
			<p>
				<label htmlFor="title">ConfirmPassword</label>
				<input
					id="confirmpassword"
					type="text"
					name="confirmpassword"
					required
					defaultValue={event ? event.confirmpassword : ''}
					style={{ margin: '5px 5px 5px 30px' }}
				/>
			</p>
			<div>
				<button style={{ margin: '0px 100px 0px 0px' }} onClick={signinNavigate}>Signin</button>
				<button >
					Submit
				</button>
			</div>
		</Form>
	)
}

export async function action({ request }) {
	
	const data = await request.formData();

	const userData = {
		fullName: data.get('fullname'),
		username: data.get('username'),
		password: data.get('password'),
		confirmPassword: data.get('confirmpassword')
	}

	console.log(userData);

	const response = await fetch('http://localhost:8085/api/v1/users/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userData)
	});

	if (!response.ok) {
		console.log("Error Occurred")
		console.log(response)
	} else {
		<h1>User Registered, Plz login!!!!</h1>
		const resData = await response.json();
		console.log(resData);
		return resData;
	}
}