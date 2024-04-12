import { ReactElement, useEffect } from "react";
import { getPosts } from "../../api/services/PostsService";
import MainLayout from "../../layouts/MainLayout";
import { usePostStore } from "../../store/postSlice";
import PostListContainer from "../../posts/containers/PostListContainer";

export default function Posts(): ReactElement {
  const { setPosts, posts } = usePostStore()
  const fetchPosts = async () => {
    setPosts(await getPosts())
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <MainLayout>
      <div >
        <PostListContainer filter posts={posts}></PostListContainer>
      </div>
    </MainLayout>
  )
}