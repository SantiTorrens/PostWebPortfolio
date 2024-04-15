import { ReactElement, useEffect } from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import PostListContainer from "../../../posts/containers/PostListContainer";
import { usePostStore } from "../../../store/postSlice";


export default function PostList(): ReactElement {
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
    <AuthLayout>
      <PostListContainer filterByTitle filterByUser posts={posts}></PostListContainer>
    </AuthLayout>
  )
}