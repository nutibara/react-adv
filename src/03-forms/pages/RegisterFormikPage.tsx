import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe de tener al menos 2 caracteres')
                        .max(15, 'Debe de ser menor de 15 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('El correo no tiene un formato válido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .min(6, 'Debe de tener al menos 6 caracteres')
                        .required('Requerido'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Contrasenas no coinciden')
                        .required('Requerido'),

                })
                }>

                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            placeholder="Max DOleo"
                        />

                        <MyTextInput
                            label="Correo"
                            name="email"
                            type="email"
                            placeholder="max@mail.com"
                        />

                        <MyTextInput
                            label="Contrasena"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput
                            label="Repetir contrasena"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />


                        <button type="submit">Create</button>
                        <button type="reset">Reset Form</button>

                    </Form>
                )
                }


            </Formik>


        </div>
    )
}