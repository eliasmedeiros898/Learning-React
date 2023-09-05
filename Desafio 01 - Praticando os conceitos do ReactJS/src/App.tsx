import styles from './App.module.css'
import { TaskBar } from './components/Taskbar'
import { Tasks } from './components/Tasks'
import { Header } from './components/header'

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
              <Tasks/>
        </main>
      </div>
      
     
   
  )
}


