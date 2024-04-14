import { ReactElement } from "react";
import { Post } from "../../types/post";
import Card from "../../components/Card";
import { usePostStore } from "../../store/postSlice";

interface PostItemProps {
  post: Post
}

export default function PostItem({ post }: PostItemProps): ReactElement {
  const { setPostComments, deletePost } = usePostStore();

  return (
    <Card classes="hover:bg-blue-500  flex flex-col min-h-60 h-fit text-black transition duration-500 cursor-default">
      <h4 className="text-lg text-bold line-clamp-2 min-h-14">{post.title}</h4>
      <span className="mr-auto text-gray-500 text-md">{post.user?.name}</span>
      <p className="mt-auto text-gray-700 line-clamp-4">{post.body}</p>
      <div className="flex flex-row w-full mt-4">
        <span
          className="p-2 mt-auto mr-auto text-white bg-blue-600 rounded cursor-pointer"
          onClick={() => setPostComments(post.id)}
        >
          Read More
        </span>
        <span onClick={() => deletePost(post.id)} className="p-2 ml-auto text-white bg-red-500 rounded cursor-pointer ">Delete Post</span>
      </div>
    </Card>
  )

}