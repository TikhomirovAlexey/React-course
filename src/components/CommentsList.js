import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const removeComment = (event) => {
        setComments(comments.filter(el => el.id !== Number(event.target.id)));
    }

    return (
        <ul className="comment-list">
            {comments.map((comment) =>
                <li key={comment.id} >
                    <p>{comment.id} - {comment.text}</p>
                    <button id={comment.id} onClick={removeComment} className="btn-remove-comment">Удалить</button>
                </li>)}
        </ul>
    );
}

export default CommentsList;