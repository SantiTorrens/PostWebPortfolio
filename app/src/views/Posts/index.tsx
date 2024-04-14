import { ReactElement, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { usePostStore } from "../../store/postSlice";
import PostListContainer from "../../posts/containers/PostListContainer";

export default function Posts(): ReactElement {
  const { setPosts, posts, setPostsUsers } = usePostStore()

  const fetchData = async () => {
    if (!posts.length) {
      await setPostsUsers();
      await setPosts()
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <MainLayout>
      <div >
        <PostListContainer filterByTitle filterByUser posts={posts}></PostListContainer>
      </div>
    </MainLayout>
  )
}