import { ReactElement } from "react";
import { Post } from "../../types/post";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[]
}
export default function PostList({ posts }: PostListProps): ReactElement {
  const renderPosts = () => {
    return (
      posts.map((post, index) => {
        return <PostItem key={index} post={post} />
      }
      )
    )
  }

  return (
    <div className="grid h-full grid-cols-4 gap-3 pr-2 overflow-y-auto">
      {renderPosts()}
    </div>
  )

}