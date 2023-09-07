import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb'

export function Task(){
    return(
       <div className={styles.task}>
        <button className={styles.checkContainer}>
            <div>

            </div>
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button className={styles.deleteButton}><TbTrash size={24}/></button>
        </div>
 
    )
}    