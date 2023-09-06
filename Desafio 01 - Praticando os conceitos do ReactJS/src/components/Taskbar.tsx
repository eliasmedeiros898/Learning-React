import styles from './Taskbar.module.css'
import icon from '../assets/plusicon.svg'
import { TaskList } from './TaskList'
export function TaskBar(){
    


    

    return(
        <div className={styles.taskbar}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button type="submit" >
                Criar
                <img src={icon} alt=""/>
            </button>

        </div>
    )
}