//Libraries
import { type ReactNode } from 'react'
import {useForm} from 'react-hook-form';

interface FormProps{
    children: ReactNode;
    onSubmit: ()=> void;
}

//Form component
export default function Form({children, onSubmit}:FormProps) {
    const {handleSubmit} = useForm();

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="h-10/12 text-gray-800 rounded-sm shadow-md bg-gray-50 border border-gray-300"
        >
            {children}
        </form>
    )
}