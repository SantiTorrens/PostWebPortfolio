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
    <div className="h-full overflow-y-auto grid grid-cols-4 gap-3">
      {renderPosts()}
    </div>
  )

}