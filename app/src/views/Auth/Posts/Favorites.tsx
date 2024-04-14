import { ReactElement } from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import PostListContainer from "../../../posts/containers/PostListContainer";
import { usePostStore } from "../../../store/postSlice";


export default function Favorites(): ReactElement {
  const { savedPosts } = usePostStore()

  return (
    <AuthLayout>
      <PostListContainer filterByTitle posts={savedPosts}></PostListContainer>
    </AuthLayout>
  )
}