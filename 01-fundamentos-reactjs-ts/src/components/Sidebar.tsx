import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilSimpleLine} from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=30" 
            />
            <div className={styles.profile}>

                <Avatar hasBorder={true} className={styles.avatar} src="https://avatars.githubusercontent.com/u/102063068?v=4" />
                <strong>Elias Medeiros</strong>
                <span>Junior Developer</span>
            </div>

            <footer className={styles.button}>
                
                <a href="#">
                <PencilSimpleLine size={20}/>    
                Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}