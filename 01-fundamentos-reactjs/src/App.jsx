import { Post } from './Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (

      <div>
        
        <Header />
        
        <div className={styles.wrapper}>
            
            <Sidebar />
            
            <main>
              <Post 
                author='Elias Medeiros'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo blanditiis pariatur sequi illo tempora vero doloribus facere non corrupti, expedita aliquam explicabo sapiente. Ea cum esse adipisci fuga eligendi?'
              />
              <Post 
                author='Anna Ellen'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo blanditiis pariatur sequi illo tempora vero doloribus facere non corrupti, expedita aliquam explicabo sapiente. Ea cum esse adipisci fuga eligendi?'
              />
            </main>
        </div>
        
        

      </div>
    
  )
}



