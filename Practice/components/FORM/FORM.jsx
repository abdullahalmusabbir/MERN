import React from 'react';
import bgImage from '../../assets/bg.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FORM() {

    const formik = useFormik({
            initialValues: {
                name: '',
                email: '',
                password: ''
            },
            validationSchema: Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .min(6, 'Must be at least 6 characters')
                    .required('Required'),
            }),
            onSubmit: (values, { resetForm }) => {
                console.log('Form data', values);
                resetForm({values: ''});
            }
        }); 

        const renderForm = (
            <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="text-gray-500 inline-block pb-4">Name:</label>
                    <input  className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" 
                        type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} required/>
                    <span className="text-red-600">{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</span>    
                </div>

                <div>
                    <label htmlFor="email" className="text-gray-500 inline-block pb-4">Email:</label>
                    <input  className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" 
                        type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} required/>
                    <span className="text-red-600">{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</span>    
                </div>
                
                <div>
                    <label htmlFor="password" className="text-gray-500 inline-block pb-4">Password:</label>
                    <input  className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" 
                        type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} required/>
                    <span className="text-red-600">{formik.errors.password && formik.touched.password ? formik.errors.password : ''}</span>
                </div>

                <button type="submit" className="bg-[#0082DF] w-full py-4 font-bold text-white rounded-md mt-6">Register</button>
            </form>
        )

    return (
        <div className="w-screen min-h-screen  flex justify-center items-center">
            <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-6  bg-white p-10 rounded-xl shadow-2xl">
                <div className="w-full md:w-1/2 bg-[#E2ECFF] flex justify-center items-center rounded-md">
                    <div className="flex flex-col justify-center items-center p-10 text-center">
                        <img src={bgImage} alt="Code Abc" className="w-20 h-20 rounded-xl"/>
                        <h1 className="text-2xl font-bold py-6">Let us help you run your own platform</h1>
                        <p className="text-sm text-gray-600">Our registration process is quicker than other edtech platform</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Get Started</h1>
                    <p className="text-gray-500 pb-10">Create your account now!</p>
                    {renderForm}
                    <p className="text-center pt-10">Already a member? <span className="text-[#0082DF] font-bold">Sign in</span></p>
                </div>
                
            </div>
        </div>
    );
}