import { ReactElement } from "react";
import { Post } from "../../types/post";
import Card from "../../components/Card";
import { usePostStore } from "../../store/postSlice";

interface PostItemProps {
  post: Post
}

export default function PostItem({ post }: PostItemProps): ReactElement {
  const { getPostComments } = usePostStore()
  return (
    <Card classes="hover:bg-blue-500  flex flex-col min-h-60 h-fit text-black transition duration-500 cursor-default">
      <h4 className="text-lg text-bold line-clamp-2 min-h-14">{post.title}</h4>
      <p className="mt-auto text-gray-700 line-clamp-4">{post.body}</p>
      <button
        className="p-0 mt-auto ml-auto text-blue-700 bg-transparent border-none focus:border-none hover:border-none"
        onClick={() => getPostComments(post.id)}
      >
        read more
      </button>
    </Card>
  )

}