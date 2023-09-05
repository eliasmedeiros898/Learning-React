import styles from './header.module.css'
import logo from '../assets/Logo.svg'
export function Header(){
    return(
        <div className={styles.header}>
            <img src={logo}/>
        </div>
    )

}