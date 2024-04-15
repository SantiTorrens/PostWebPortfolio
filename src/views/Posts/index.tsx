import { ReactElement, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { usePostStore } from "../../store/postSlice";
import PostListContainer from "../../posts/containers/PostListContainer";

export default function Posts(): ReactElement {
  const { setPosts, posts, setPostsUsers } = usePostStore()

  useEffect(() => {
    const fetchData = async () => {
      if (!posts.length) {
        await Promise.all([setPostsUsers(), setPosts()]);
      }
    };

    fetchData();
  }, [setPostsUsers, setPosts, posts]);


  return (
    <MainLayout>
      <div >
        <PostListContainer filterByTitle filterByUser posts={posts}></PostListContainer>
      </div>
    </MainLayout>
  )
}