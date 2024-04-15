import { ReactElement } from "react";
import { Post } from "../../types/post";
import Card from "../../components/Card";
import { usePostStore } from "../../store/postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as FilledHeart } from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "../../store/userSlice";

interface PostItemProps {
  post: Post
}

export default function PostItem({ post }: PostItemProps): ReactElement {
  const { savedPosts, setPostComments, deletePost, savePost, unSavePost } = usePostStore();
  const { isLoggedIn } = useUserStore();
  const isSaved = (): boolean => {
    if (savedPosts.length > 0) {
      return savedPosts.some((savedPost) => savedPost.id === post.id,)
    } else {
      return false
    }
  }
  return (
    <Card classes="hover:bg-blue-500  flex flex-col min-h-60 relative h-fit text-black transition duration-500 cursor-default">

      {isLoggedIn ? isSaved() ?
        <FontAwesomeIcon
          title="unSave"
          onClick={() => unSavePost(post)}
          className="absolute text-lg text-red-500 cursor-pointer top-4 right-4"
          icon={FilledHeart}
        />
        :
        <FontAwesomeIcon
          title="save"
          onClick={() => savePost(post)}
          className="absolute text-lg text-red-500 cursor-pointer top-4 right-4"
          icon={faHeart}
        />
        : null}
      <h4 className="mr-5 text-lg text-bold line-clamp-2 min-h-14">{post.title}</h4>
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