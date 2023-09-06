//import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'
import { ClipboardText } from '@phosphor-icons/react'


export function TaskList(){
    
    /*const [tasks, setTasks]:any = useState([]);
    const [newTaskText, setNewTaskText] = useState('');*/

    



    return(
        <div className={styles.body}>
            <header className={styles.tasksInfo}>
                <div className={styles.createdTasks}>
                    Tarefas criadas
                    <div className={styles.counter}>0</div>
                </div>
                <div className={styles.doneTasks}>
                    Concluidas
                    <div className={styles.counter}>0</div>
                </div>
            </header>
            <div className={styles.taskList}>
                    {/*<div className={styles.icon}>
                        <ClipboardText size={56} />
                    </div>*/}
                    {/*<div className={styles.message}>
                        
                         <div>Você ainda não possui tarefas cadastradas </div>
                        Crie e organize seus itens a fazer 
                    </div>*/}

                    <Task/>
                    <Task/>
            </div>
        </div>
    )
}