import { ReactElement } from "react";
import { Post, PostCommentInterface } from "../../types/post";
import Card from "../../components/Card";

interface PostItemProps {
  postComments: PostCommentInterface[] | [];
  post: Post | null
}

export default function PostComments({ postComments, post }: PostItemProps): ReactElement {
  const comments = postComments as PostCommentInterface[]
  const localPost = post as Post;

  const renderComments = (): ReactElement[] => {
    return comments.map((comment, index) => {
      return (
        <div key={index} className={`flex rounded-lg p-5 flex-col text-black transition duration-500 cursor-default ${index % 2 ? 'bg-blue-200' : 'bg-blue-100'}`}>
          <h4 className="text-lg text-bold">{comment.name}</h4>
          <p className="text-gray-500 text-md">{comment.body}</p>
          <span className="mt-5 ml-auto">{comment.email}</span>

        </div>

      )
    })
  }

  return (
    <Card classes="p-5  flex flex-col p-5">
      <div className="flex flex-col w-2/3 gap-4 mx-auto">

        <h2 className="text-4xl text-center text-bold">{localPost.title}</h2>
        <p className="text-lg text-center">{localPost.body}</p>
      </div>
      <div className="flex flex-col py-4">
        <span className="w-full mb-2 text-2xl text-center text-bold">
          Comments:
        </span>
        <div className="flex flex-col gap-2 px-5 max-h-[400px] overflow-y-scroll">
          {renderComments()}
        </div>

      </div>
    </Card>
  )

}