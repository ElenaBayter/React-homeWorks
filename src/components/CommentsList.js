import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий1" },
    { id: 2, text: "Это второй комментарий2" },
    { id: 3, text: "Это третий комментарий3" },
  ]);
  const deleteEl = (indexToDelete) => {
    setComments(comments.filter((_, index) => index !== indexToDelete));
  };
  return (
    <>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            <button onClick={() => deleteEl(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;
