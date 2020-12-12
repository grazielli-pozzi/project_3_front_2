import React, { useState } from 'react'; 
import axios from 'axios';
import * as yup from 'yup';

import { Formik } from 'formik';
import { Form, Col, Button } from 'react-bootstrap';

import localStorageUtils from '../../utils/localStorage.utils';

const schema = yup.object({
    cpf: yup.string().min(11, 'Mínimo de 11 caracteres').required('Campo obrigatório'),
    email: yup.string().email('Email inválido').max(100, 'Máximo de 100 caracteres').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    lastname: yup.string().required('Campo obrigatório'),
    role: yup.string().required('Campo obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo obrigatório'),
  });

const Signup = (props) => {

    const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

    const initialValues = {
        cpf: '',
        email: '',
        name: '',
        lastname: '',
        role: '',
        password: '',
    }

    const redirectToList = () => {
        setTimeout(() => {
            props.history.push('/adv/clientes');
        }, 2000)
    }

    const handleSubmitMethod = async (formValues, helperMethods) => {
        console.log(formValues);
        const tokenObject = localStorageUtils.get();
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/customers/private/create`,
            formValues, { headers: {Authorization: `Bearer ${tokenObject.token}` }});

            setIsSignupSuccessful(true);

            redirectToList();
        } 

        catch (error) {
            console.log(error);
            if(error.response.data && error.response.data.type === "Auth-signup") {
                helperMethods.setFieldError('cpf', 'Usuário já cadastrado.'); 
            }

            if(error.response.data && error.response.data.status === 401) {
                localStorageUtils.delete();
        
                this.props.history.push('/login');
              }
        }
    }

    return(
        <main>
            {isSignupSuccessful && <h2>Cliente cadastrado com sucesso!</h2>}
        <h1>Cadastro de novo cliente</h1>
        <Formik initialValues={initialValues}
        onSubmit={handleSubmitMethod}
        validationSchema={schema}
        >
        {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
                { console.log(errors) }
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpf"
                            value={values.cpf}
                            onChange={handleChange}
                            isValid={touched.cpf && !errors.cpf}
                            isInvalid={touched.cpf && errors.cpf}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && errors.email}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            isValid={touched.name && !errors.name}
                            isInvalid={touched.name && errors.name}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            isValid={touched.lastname && !errors.lastname}
                            isInvalid={touched.lastname && errors.lastname}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                        <Form.Control onChange={handleChange} as="select" name="role">
                        <option value="">Selecione</option>
                        <option value="advogado">advogado</option>
                        <option value="cliente">cliente</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="text"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            iisValid={touched.password && !errors.password}
                            isInvalid={touched.password && errors.password}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
            </Form>
        )}
        </Formik>
        </main>
    )
};

export default Signup;