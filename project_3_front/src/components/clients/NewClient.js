import React from 'react'; 
import axios from 'axios';

import { Formik } from 'formik';

const Signup = () => {
    const initialValues = {
        cpf: '',
        email: '',
        name: '',
        lastname: '',
        password: '',
    }

    const handleSubmitMethod = async (formValues) => {
        console.log(formValues);
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/customer/private/create`,
            formValues);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main>
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