import "./createPost.css";
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

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
            placeholder='Título'
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className='inputGp'>
          <label> Mensaje:</label>
          <textarea
            placeholder='Tu mensaje...'
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Enviar</button>
      </div>
      <button className='view-messages-btn' onClick={viewMessages}>
        {" "}
        Ver mensajes{" "}
      </button>
    </div>
  );
}

export default CreatePost;
