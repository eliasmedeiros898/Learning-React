import { useState } from 'react';
import { Header } from './components/Header/Header';
import {Tasks} from './components/Tasks/Tasks';


export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle : string){
    setTasks([
      ...tasks,{
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTask(taskId:string){
    const newTasks = tasks.filter((task)=> task.id != taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompleted(taskId:string){
    const newTasks = tasks.map(task =>{
      if(task.id == taskId){
        return{...task, isCompleted:!task.isCompleted} 
      }
      return task;
    });
    setTasks(newTasks);
  }

  
  return (
    
      <div>
          <Header
            onAddTask={addTask}
          />

          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onComplete={toggleTaskCompleted}
          />

          
      </div>
      
     
   
  )
}


