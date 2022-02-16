import "./home.css";
import React, { useEffect, useState, useCallback } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GiGlassHeart } from "react-icons/gi";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.pathname = "/";
  });

  const goToCreatePost = () => {
    if (isAuth) {
      navigate("/crear-mensaje");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className='homePage'>
      <>
        {isMobile && (
          <button className='redirect-write-msgs-btn' onClick={goToCreatePost}>
            Dejar saludo
          </button>
        )}
        {/* harcoded */}
        <div className='post'>
          <div className='postHeader'>
            {/* <div className='deletePost'> */}
            {/* </div> */}
            <div className='title'>
              <h1> ¡Bienvenidos! 👋</h1>
            </div>
          </div>
          <div className='postTextContainer'>
            Nos casamos y armamos está app para que nos dejes tus mensajes y
            deseos en esta nueva etapa! Los queremos
            <span className='postTextIcon'>
              <GiGlassHeart />
            </span>
          </div>
          <h3>@Fran y @Flavia</h3>
        </div>
        {postLists.map((post) => {
          return (
            <div className='post' key={post.id.toString()}>
              <div className='postHeader'>
                {/* <div className='deletePost'> */}
                {/* </div> */}
                <div className='title'>
                  <h1> {post.title}</h1>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className='delete-post-button'
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      <BsTrash />
                    </button>
                  )}
                </div>
              </div>
              <div className='postTextContainer' key={post.id.toString()}>
                {post.postText}
              </div>
              <h3>@{post.author.name}</h3>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Home;
