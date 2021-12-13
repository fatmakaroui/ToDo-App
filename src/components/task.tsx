import React, { useState } from "react";
import '../styles/task.scss';
import { Button, Status, AddTask } from "./index";
//Redux
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { removeTask, setTaskStatus } from '../redux/slices/taskSlice';
import { Task } from "../shared/Models/Task";

interface Props {
  data: Task;
}

const ToDoTask: React.FC<Props> = ({
  data,
}) => {

  const [modelVisible, setModelVisible] = useState(false)

  const handleModel = () => {
    setModelVisible(!modelVisible)
  }

  const dispatch = useDispatch<AppDispatch>();


  return (
    <>

      <div className="containerTesk" >
        <div className="topTask">
          <div className="taskData">
            <p className="name">{data.name}</p>
            <p className="description">{data.description}</p>
          </div>
          <Status status={data.status} onClick={() => { dispatch(setTaskStatus({ status: !data.status, id: data.id })) }} />
        </div>
        <div className="bottomTask">
          <Button name='Supprimer' onClick={() => { dispatch(removeTask(data.id)) }} color={'#060000'} radius={'0px'} />
          <Button name='Modifier' onClick={() => { handleModel() }} color={'#060000'} radius={'0px'} />

        </div>

      </div>
      {
        modelVisible && <AddTask onClick={() => { handleModel() }} description={data.description} name={data.name} id={data.id} />
      }
    </>
  );
};

export default ToDoTask;