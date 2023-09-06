import { Check,Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task(){
    return(
        <div className={styles.task}>
            <input type="checkbox" className={styles.checkbox} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            <div className={styles.icon}><Trash size={24}/></div>
        </div>
    )
}