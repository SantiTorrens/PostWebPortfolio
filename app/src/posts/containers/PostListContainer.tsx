import { ReactElement, useState } from "react"
import { Post } from "../../types/post";
import PostList from "../components/PostList";
import { usePostStore } from "../../store/postSlice";
import Modal from "../../components/Modal";
import PostComments from "../components/PostComments";

interface PostListContainerProps {
  filter?: boolean,
  posts: Post[]
}

export default function PostListContainer({ filter = false, posts }: PostListContainerProps): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { postComments, showCommentsModal, closeCommentsModal } = usePostStore();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-[80vh] flex flex-col">
      <div className="w-1/3">
        {filter &&
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by title..."
            className="w-full p-2 mb-4 border rounded-md"
          />
        }
      </div>

      <PostList posts={filteredPosts} />

      {showCommentsModal &&
        <Modal closeModal={() => closeCommentsModal()}>
          <PostComments
            post={filteredPosts.find((post) => post.id === postComments[0].postId) ?? null}
            postComments={postComments} />
        </Modal>
      }

    </div>
  )
}