import "./createPost.css";
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [disable, setDisable] = React.useState(false);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  const viewMessages = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Tu deseo 💘 </h1>
        <div className='inputGp'>
          <label> Título:</label>
          <input
            required
            placeholder='Título'
            onChange={(event) => {
              if (event.target.value.length <= 0) {
                alert("El título no puede estar vacío");
              }
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className='inputGp'>
          <label> Mensaje:</label>
          <textarea
            required
            placeholder='Tu mensaje...'
            onChange={(event) => {
              if (event.target.value.length <= 0) {
                alert("El mesasaje no puede estar vacío");
              }
              setPostText(event.target.value);
            }}
          />
        </div>
        <button
          disabled={title.length <= 0 || postText <= 0}
          onClick={createPost}
        >
          {" "}
          Enviar
        </button>
      </div>
      <button className='view-messages-btn' onClick={viewMessages}>
        {" "}
        Ver mensajes{" "}
      </button>
    </div>
  );
}

export default CreatePost;
