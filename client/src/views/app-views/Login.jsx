import React from 'react';
import useTypingEffect from '../../hooks/typing-effect';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('El mail no es valido.')
		.required('Este campo es requerido.'),
	password: Yup.string().required('Este campo es requerido.'),
});

function Login() {
	const text = useTypingEffect('Metaltec', 200);

	const handleSubmit = () => {};
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center bg-primary">
			<h1 className="text-6xl text-center mb-8">{text}</h1>
			<h2 className="text-4xl text-center mb-8">Bienvenido!</h2>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className="bg-secondary m-1 p-5">
					<div className="flex my-2">
						<label
							htmlFor="email"
							className="mr-2"
						>
							Email:
						</label>
						<Field
							type="email"
							id="email"
							name="email"
							placeholder="Email aqui"
						/>
					</div>
					<ErrorMessage
						name="email"
						component="div"
						className="text-red-500 min-h-5 max-h-5"
					/>

					<div className="flex my-2">
						<label
							htmlFor="password"
							className="mr-2"
						>
							Contraseña:
						</label>
						<Field
							type="password"
							id="password"
							name="password"
							placeholder="Contraseña aqui"
						/>
					</div>
					<ErrorMessage
						name="password"
						component="div"
						className="text-red-500"
					/>
					<button
						type="submit"
						className="btnPrimary"
					>
						Iniciar sesión
					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default Login;
