import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import {Avatar} from './Avatar'
import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, publishedAt, content}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale:ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix: true

    })

    const [comments,setComments] = useState([
        
        
    ])

    function hadleCreateNewComment(){
        event.preventDefault();
        setComments([...comments,comments.length+1])
        console.log(comments);
    }

    

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>

                {content.map(line =>{
                    if(line.type == 'paragraph'){
                        return <p>{line.text}</p>
                    }
                    else if(line.type == 'link'){
                        
                        return <p>
                            <a href="#">{line.text}</a>
                        </p>

                    }

                })}

            

                
            </div>

            <form onSubmit={hadleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                placeholder='Escreva um comentário...'/>
                <footer>
                   <button type="submit">Publicar</button> 
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comments => {
                    return <Comment />
                })}
            </div>

        </article>
        )
}