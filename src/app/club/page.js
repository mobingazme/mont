"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import toast, { Toaster } from 'react-hot-toast';
import 'animate.css';
import { ThreeDots } from 'react-loader-spinner';
import { FormSchema } from '@/validation/formSchima';


function SignupPage() {
    const [loading, setLoading] = useState(false);


    const { values, handleBlur, touched, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            phone: '',
            first_name: '',
            last_name: '',
        },
        validationSchema: FormSchema,
        onSubmit: async (values, action) => {
            console.log(values)
            try {
                const requestBody = {
                    phone: values.phone,
                    first_name: values.first_name,
                    last_name: values.last_name,
                }
                setLoading(true)
                const response = await fetch('https://admin.viemonte.com/api/v1/customerClub', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                })
                const data = await response.json();
                setLoading(false);
                console.log(data)
                toast.success(data.user_message || "عملیات با موفقیت انجام شد");
            } catch (error) {
                setLoading(false);
                console.error('Error:', error);
                toast.error(error.message || 'خطا در عضویت');

            }
            action.resetForm();
        },
    });



    return (
        <div className='bg-gray-200  w-full h-full p-2 border-8 border-B'>
            <div className='  max-w-full'>
                <Toaster position="top-center" />
                <img src='/images/9999.png' />
                <div className=' w-full h-full rounded-sm  '>
                    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                        <div className='px-4 mt-5'>
                            <label className='text-B font-bold text-  '>  نام  </label>
                            <input
                                id='first_name'
                                type='text'
                                value={values.first_name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name='first_name'
                                className={errors.first_name && touched.first_name
                                    ? "text-gr border border-B text-center  outline-none h-9 w-[260px] rounded-lg bg-none bg-transparent font-bold  animate__animated animate__bounce"
                                    : "border border-B h-9 w-[260px] text-center rounded-lg text-C bg-none bg-transparent font-bold outline-none  focus:border-B"}
                            />
                            {errors.first_name && touched.first_name && <p className='text-sm text-center text-B mt-1'>{errors.first_name}</p>}
                        </div>
                        <div className='px-4 my-4'>
                            <label className='text-B font-bold text- py-1'>  نام خانوادگی  </label>
                            <input
                                id='last_name'
                                type='text'
                                value={values.last_name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name='last_name'
                                className={errors.last_name && touched.last_name
                                    ? "text-gr border border-B text-B text-center outline-none h-9 w-[260px] rounded-lg bg-none bg-transparent font-bold  animate__animated animate__bounce"
                                    : "border border-B h-9 w-[260px] text-center text-C rounded-lg  bg-none bg-transparent font-bold outline-none  focus:border-B"}
                            />
                            {errors.last_name && touched.last_name && <p className='text-B text-sm text-center mt-1'>{errors.last_name}</p>}
                        </div>

                        <div className='flex flex-col px-4 my- mb-5'>
                            <label className='text-B font-bold text- py-1'>  تلفن  </label>
                            <input
                                id='phone'
                                type={'text'}
                                value={values.phone}

                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="phone"
                                className={errors.phone && touched.phone
                                    ? "text-gr border border-B text-center text-B outline-none h-9 w-[260px] rounded-lg bg-none bg-transparent font-bold  animate__animated animate__bounce"
                                    : "border border-B h-9 w-[260px] text-C text-center rounded-lg  bg-none bg-transparent font-bold outline-none "}
                            />
                            {errors.phone && touched.phone && <p className='text-B text-sm text-center mt-1'>{errors.phone}</p>}
                        </div>


                        {loading ?
                            (<ThreeDots
                                color="#006045"
                                height={20}
                                ariaLabel="three-dost-loading"
                                visible={true}
                                wrapperStyle={{ margin: '20' }}
                            />
                            ) : (
                                <button
                                    className="text-white bg-B hover:border-2 hover:border-B hover:bg-white hover:text-B font-bold rounded-lg w-40 h-9 mt-7 transition duration-300"
                                    type='submit'
                                    disabled={isSubmitting}
                                >
                                    عضویت
                                </button>
                            )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;