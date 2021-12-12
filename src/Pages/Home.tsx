import React, {useState} from 'react';
import { Header,Logout,Button ,AddTask, ToDoTask} from "../components";
import '../styles/home.scss';

//Redux
import { RootState } from '../redux/store';
import { useSelector} from 'react-redux';


const Home = () => {

    const todoList = useSelector((state: RootState) => state.todo);


    const [modelVisible,setModelVisible]=useState(false)

    const handleModel=()=>{
           setModelVisible(!modelVisible)
    }
    return (
    <div >
       <Header/>
       <Logout />
       <div className="container_home">
       <div className="top">
       <p className="title">Liste des tâches</p> 
       <Button name='Ajouter une tâche' onClick={()=>{handleModel()}} color={'#1E00DA'} radius={'0px'}/>
       </div>
       {
           todoList.map((task)=>{
              return <ToDoTask data={task}/>
           })
       }
       {
           modelVisible && <AddTask onClick={()=>{handleModel()}} description='' name='' id=''/>
       }
       </div>
      
    </div>)

    
 
}

export default Home;