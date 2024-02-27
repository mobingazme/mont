import * as yup from "yup"

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/


export const FormSchema = yup.object().shape({
    phone: yup.string().required('لطفاً شماره تلفن را وارد کنید').min(11, 'شماره تلفن باید  11 رقم باشد').matches(phoneRegExp, 'فرمت وارد شده نادرست است'),
    first_name: yup.string().required(' لطفا نام خودرا وارد کنید'),
    last_name: yup.string().required(' لطفا نام خانوادگی خودرا وارد کنید'),

})



