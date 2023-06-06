'use client';

import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import { WWContext } from "../context/context";
import { useContext } from "react";

const styles = {
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,

  container: `max-w-7xl flex-1`,

  main: `flex justify-center`,
  wrapper: `mx-auto`
};

export default function Home() {
  const { posts } = useContext(WWContext);

  console.log(posts, "🔥");

  type Post = {
    data: {
      author: string;
      bannerImage: string;
      body: string;
      brief: string;
      category: string;
      postLength: string;
      postedOn: Date;
      title: string;
    };
    id: string;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            {posts.map((post:Post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
