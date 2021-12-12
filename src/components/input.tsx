import React from "react";
import { Field} from 'formik';
import '../styles/input.scss';
interface Props {
    id:string;
    name:string;
    placeholder:string;
    type:string
  }
  
  const Input: React.FC<Props> = ({ 
    id,
    name,
    placeholder,
    type
    }) => { 

    return(
        <Field id={id} name={name} placeholder={placeholder} type={type} className="input" />
    )
    
    }
    
    export default Input