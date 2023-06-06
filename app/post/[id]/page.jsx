"use client";

import ReadersNav from "../../../components/ReadersNav";
import Recommendations from "../../../components/Recommendations";
import ArticleMain from "../../../components/ArticleMain.jsx";
import { useContext, useEffect, useState } from "react";
import { WWContext } from "../../../context/context";
import { usePathname } from "next/navigation";

const styles = {
  content: `flex`
};

const Post = () => {
  const { posts, users } = useContext(WWContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    // guard clause
    if (posts.length === 0 || users.length === 0) {
      return;
    }

    setPost(posts.find((post) => post.id === pathname.split("/")[2]));

    setAuthor(users.find((user) => user.id === post.data?.author));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations author={author} />
    </div>
  );
};

export default Post;
