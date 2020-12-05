import React, { useState } from 'react'; 
import axios from 'axios';

import { Formik } from 'formik';

const Signup = (props) => {

    const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

    const initialValues = {
        cpf: '',
        email: '',
        name: '',
        lastname: '',
        password: '',
    }

    const redirectToList = () => {
        setTimeout(() => {
            props.history.push('/adv/clientes/lista')
        }, 2000)
    }

    const handleSubmitMethod = async (formValues) => {
        console.log(formValues);
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/customers/private/create`,
            formValues);

            setIsSignupSuccessful(true);

            redirectToList();
        } 

        catch (error) {
            console.log(error);
        }
    }

    return(
        <main>
            {isSignupSuccessful && <h2>Cliente cadastrado com sucesso!</h2>}
        <h1>Cadastro de novo cliente</h1>
        <Formik initialValues={initialValues}
        onSubmit={handleSubmitMethod}
        >
        {(props) => (
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="cpf" onChange={props.handleChange} value={props.values.cpf} placeholder="CPF" />
                <input type="text" name="email" onChange={props.handleChange} value={props.values.email} placeholder="Email" />
                <input type="text" name="name" onChange={props.handleChange} value={props.values.name} placeholder="Nome" />
                <input type="text" name="lastname" onChange={props.handleChange} value={props.values.lastname} placeholder="Sobrenome" />
                <input type="password" name="password" onChange={props.handleChange} value={props.values.password} placeholder="Senha" />
                <button type="submit">Cadastrar</button>
            </form>
        )}
        </Formik>
        </main>
    )
};

export default Signup;