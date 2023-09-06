import styles from './Tasks.module.css'
import { ClipboardText } from '@phosphor-icons/react'
export function Tasks(){
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
                    <div className={styles.icon}>
                        <ClipboardText size={128} />
                    </div>
                    <div className={styles.message1}>
                        Você ainda não possui tarefas cadastradas Crie e organize seus itens a fazer
                    </div>
                    
            </div>
        </div>
    )
}