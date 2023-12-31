import { Task } from '../Task/Task'
import styles from './Tasks.module.css'
import { ITask } from '../../App';
import {TbClipboardText} from 'react-icons/tb'

interface Props{
    tasks: ITask[];
    onDelete: (taskId:string) => void;
    onComplete: (taskId:string) => void;
}

export function Tasks({tasks,onDelete,onComplete}:Props){

    const taskQuantity = tasks.length
    const completedTasks = tasks.filter((tasks)=>tasks.isCompleted).length

    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className={styles.doneTasks}>Concluidas</p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task)=>(
                    <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete}
                    onComplete={onComplete}
                    />
                ))}

                    {tasks.length <= 0 &&(
                        <section className={styles.empty}>
                            <TbClipboardText size={50}/>
                            <div>
                                <p>
                                    Você ainda não tem tarefas cadastradas
                                </p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </section>
                    )}
            </div>
        </section>
    )
}