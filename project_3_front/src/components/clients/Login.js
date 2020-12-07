import React from 'react';
import axios from 'axios';
import * as yup from 'yup';

import { Formik } from 'formik';
import { Form, Col, Button } from 'react-bootstrap';

const schema = yup.object({
    cpf: yup.string().min(11, 'Mínimo de 11 caracteres').required('Campo obrigatório'),
    role: yup.string().required('Campo obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo obrigatório'),
  });

const login = (props) => {

    const initialValues = {
        cpf: '',
        role: '',
        password: '',
    }

    const redirectToLoggedArea = () => {
        // if(schema.role==='cliente') {
        //     props.history.push('/cliente');
        // }
        // if(schema.role==='advogado') {
        //     props.history.push('/adv');
        // }
    }

    const handleSubmitMethod = async (formValues, helperMethods) => {
        console.log(formValues);
        try {
            
            // await axios.post(`${process.env.REACT_APP_API_BASE_URL}/customers/private/list`,
            // formValues);

            // setIsSignupSuccessful(true);

            // redirectToLoggedArea();
        } 

        catch (error) {
            // if(error.response.data && error.response.data.type === "Auth-signup") {
            //     helperMethods.setFieldError('cpf', 'Usuário já cadastrado.'); 
            // }
        }
    }

    return (
        <main>
            <h1>Login</h1>
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
                    <Form.Label>Classe</Form.Label>
                        <Form.Control
                            type="text"
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            isValid={touched.role && !errors.role}
                            isInvalid={touched.role && errors.role}
                            onBlur={handleBlur}
                        />
                    <Form.Control.Feedback>Campo okay</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
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
                <Button type="submit">Login</Button>
            </Form>
        )}
        </Formik>
        </main>
    )
}

export default login;