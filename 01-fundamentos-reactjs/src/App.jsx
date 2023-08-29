import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

const posts = [
  {
  id: 1,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/102063068?v=4',
    name: 'Elias Medeiros',
    role: 'Desenvolvedor Junior'
    },
  content: [
    {type: 'paragraph', text:'Fala galeraa 👋'},
    {type: 'paragraph', text:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type:'link',text:'jane.design/doctorcare'},

  ],
  publishedAt: new Date('2023-08-28 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/saulojustiniano1.png',
      name: 'Saulo Justiniano',
      role: 'Desenvolvedor Junior'
      },
    content: [
      {type: 'paragraph', text:'Hello 👋'},
      {type: 'paragraph', text:'Follow My channel! 🚀'},
      {type:'link',text:'youtube.com/saulosclub'},
  
    ],
    publishedAt: new Date('2023-08-28 17:00:00')
    }


]


export function App() {
  return (

      <div>
        
        <Header />
        
        <div className={styles.wrapper}>
            
            <Sidebar />
            
            <main>
              
              {posts.map(post => {
                return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}

                  />)
              })}
              
            </main>
        </div>
        
        

      </div>
    
  )
}



