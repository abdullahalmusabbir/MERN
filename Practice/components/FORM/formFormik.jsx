import React, {useState} from 'react';
import { Formik, useFormik } from 'formik';

export default function FormFormik() {


        const formik = useFormik({
            initialValues: {
                name: '',
                email: '',
                password: ''
            },
            onSubmit: (values, { resetForm }) => {
                console.log('Form data', values);
                resetForm({values: ''});
            }
        });   

     
    return (
        <div>
            <h1 className="text-2xl font-bold">Get Started with Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}