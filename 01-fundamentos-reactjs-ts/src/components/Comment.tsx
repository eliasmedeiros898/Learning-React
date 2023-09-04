import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount+1);
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/82901702?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexandre Star</strong>
                            <time dateTime="2023-08-24 18:58:59">
                                Cerca de 1hr atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                        </button> 
                </footer>
            </div>
        </div>
    )
}
