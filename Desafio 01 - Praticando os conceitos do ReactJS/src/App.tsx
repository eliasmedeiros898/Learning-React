import styles from './App.module.css'
import { TaskBar } from './components/Taskbar'
import { TaskList } from './components/TaskList'
import { Header } from './components/Header'

export function App() {
  

  return (
    
      <div className={styles.wrapper}>
        <header className={styles.header}>
              <Header/>
        </header>
        <div className={styles.taskbar}>
              <TaskBar/>
        </div>
        <main className={styles.main}>
              <TaskList/>
        </main>
      </div>
      
     
   
  )
}


