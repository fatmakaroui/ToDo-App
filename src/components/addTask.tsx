import React,{useState} from "react";
import '../styles/addTask.scss';
import {Formik,Form,} from 'formik';
//components
import { Input,Button } from './index';

//Redux
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { addTask,updateTask } from '../redux/slices/taskSlice';
import { Task } from "../shared/Models/Task";

interface Props {
  description:string,
name:string,
id:string,
  onClick: () => void;
}

const AddTask: React.FC<Props> = ({ 
onClick, 
name,
id,
description
  }) => { 
    const [error,setError]=useState('');
    const initialValues: any = {description:description,name:name};
    const dispatch = useDispatch<AppDispatch>();

    const add =(values:any)=>{
console.log(values)
 if(values.description==='' ||values.name===''){
     setError('Titre et description sont obligatoire !!')
 }else{
   if(id===''){
    dispatch(addTask(values.name,values.description));
   }else{
     dispatch(updateTask({id:id,name:values.name,description:values.description}))
   }
    
     onClick();
 }
    }
  return (
   <div className="container" > 
       <div className="add_form">
           <p className="title">Ajouter une tâche</p> 
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
            add(values)
           actions.setSubmitting(false);
         }}
       >
         <Form className='form'>
         <Input id='name' name='name' placeholder='Titre' type='text'/>
           <Input id='description' name='description' placeholder='Description' type='text'/>
         
           <p className='error'>{error}</p>
           <Button name='Enregistrer' onClick={()=>{}} color={'#060000'} radius={'0px'}/>
         </Form>
       </Formik>
       </div>

   </div>
  );
  };

export default AddTask;